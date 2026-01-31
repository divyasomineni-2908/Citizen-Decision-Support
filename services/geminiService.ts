import { GoogleGenAI, Type } from "@google/genai";
import { Scheme, SimplifiedScheme, FailedCriterion, EligibilityAdvice, UserProfile } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY is not set. Chatbot functionality will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are a friendly and helpful AI assistant for 'GovWelfare Connect', a platform that provides information about government welfare schemes in India.
Your role is to answer user queries about these schemes in a simple, clear, and encouraging manner.
You are an expert on schemes related to agriculture, healthcare, education, social welfare, and pensions.
When a user asks a question like "Which schemes can I apply for in Tamil Nadu?", provide a general overview of popular schemes available in that state, but remind the user to use the 'Eligibility Checker' for a personalized list.
When a user asks "What documents do I need for old age pension?", provide a list of common documents (e.g., Aadhar card, proof of age, bank account details) but advise them to check the specific scheme's details for official requirements.
Do not provide financial or legal advice.
Keep your answers concise and easy to understand for a general audience.
If you don't know the answer, say that you cannot find the information at the moment and suggest they consult official government sources.
Base your knowledge on publicly available information about Indian government welfare schemes.
`;

export const getChatbotResponse = async (userMessage: string): Promise<string> => {
  if (!API_KEY) {
    return "The chatbot is currently unavailable because the API key is not configured.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
    
    if (response.text) {
        return response.text;
    }
    
    return "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Error fetching response from Gemini API:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later.";
  }
};

export const simplifySchemeDetails = async (scheme: Scheme): Promise<SimplifiedScheme> => {
    if (!API_KEY) {
        throw new Error("API key is not configured.");
    }

    const eligibilityString = Object.entries(scheme.eligibility)
        .filter(([, value]) => value != null)
        .map(([key, value]) => {
            switch (key) {
                case 'minAge': return `Must be at least ${value} years old`;
                case 'maxAge': return `Must be no more than ${value} years old`;
                case 'maxIncome': return `Annual household income should not be more than ₹${(value as number).toLocaleString('en-IN')}`;
                case 'minIncome': return `Annual household income should be at least ₹${(value as number).toLocaleString('en-IN')}`;
                case 'category': return `Must belong to the ${value} category`;
                case 'state': return `Must be a resident of ${value}`;
                default: return '';
            }
        })
        .filter(Boolean)
        .join('. ');

    const prompt = `
        You are an expert at simplifying complex information.
        Your task is to simplify the details of a government welfare scheme for a general audience with a low reading level (around 5th grade).
        Focus on clarity and ease of understanding. Avoid jargon. Use short sentences and simple words.
        Respond ONLY with a valid JSON object that adheres to the provided schema.

        Scheme Details to simplify:
        - Title: "${scheme.title}"
        - Description: "${scheme.description}"
        - Benefits: "${scheme.benefits.join('. ')}"
        - Eligibility Criteria: "${eligibilityString || 'General eligibility criteria apply.'}"
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        description: {
                            type: Type.STRING,
                            description: "A simplified, easy-to-understand summary of the scheme.",
                        },
                        benefits: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING },
                            description: "A list of the key benefits in simple language, one benefit per string.",
                        },
                        eligibility: {
                            type: Type.STRING,
                            description: "A single paragraph explaining who can apply in very simple terms.",
                        },
                    },
                    required: ["description", "benefits", "eligibility"],
                },
                temperature: 0.3,
            }
        });

        const textResponse = response.text.trim();
        if (textResponse) {
            return JSON.parse(textResponse) as SimplifiedScheme;
        }

        throw new Error("Failed to get a valid response from the API.");

    } catch (error) {
        console.error("Error simplifying scheme details:", error);
        throw new Error("Could not simplify the scheme details. Please try again later.");
    }
};

export const translateText = async (
  text: string | string[],
  targetLanguage: string
): Promise<string | string[]> => {
  if (!API_KEY) {
    throw new Error("API key is not configured.");
  }
  if (targetLanguage === 'English' || !text || text.length === 0) {
    return text;
  }

  const isArray = Array.isArray(text);
  const textsToTranslate = isArray ? (text as string[]) : [text as string];
  
  // Filter out any empty strings to avoid sending them to the API
  const nonEmptyTexts = textsToTranslate.filter(t => t.trim() !== '');
  if (nonEmptyTexts.length === 0) {
      return text;
  }

  const prompt = `
    You are an expert translator. Translate the following JSON array of English strings into ${targetLanguage}.
    Respond ONLY with a valid JSON array of the translated strings, maintaining the same order as the input.
    Do not add any preamble, explanation, or markdown formatting. The output must be a single, valid JSON array.

    English Texts:
    ${JSON.stringify(nonEmptyTexts)}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
         responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "An array of translated strings, one for each input string."
        },
        temperature: 0.1,
      }
    });

    const textResponse = response.text.trim();
    if (textResponse) {
      const translatedArray = JSON.parse(textResponse) as string[];
      return isArray ? translatedArray : translatedArray[0];
    }
    
    throw new Error("Failed to get a valid translated response from the API.");
  } catch (error) {
    console.error(`Error translating text to ${targetLanguage}:`, error);
    // On error, return original text to avoid breaking the UI
    return text;
  }
};


export const generateEligibilitySuggestions = async (
    scheme: Scheme,
    userProfile: UserProfile,
    failedCriteria: FailedCriterion[],
    language: string
): Promise<EligibilityAdvice> => {
    if (!API_KEY) {
        throw new Error("API key is not configured.");
    }

    const failedCriteriaString = failedCriteria
        .map(fc => `- ${fc.criterion}: Expected '${fc.expected}', but your profile shows '${fc.actual}'.`)
        .join('\n');

    const prompt = `
        You are a helpful and empathetic AI assistant for 'GovWelfare Connect', a portal for Indian government schemes.
        Your goal is to explain to a user why they are not eligible for a specific scheme in simple, encouraging terms and provide actionable advice. Avoid jargon.

        The final output MUST be in ${language}.

        User's Profile Summary:
        - Age: ${userProfile.age}
        - Annual Income: ₹${userProfile.annualIncome.toLocaleString('en-IN')}
        - Residence: ${userProfile.residence}
        - Category: ${userProfile.category}
        - Is a Student: ${userProfile.isStudent ? 'Yes' : 'No'}
        - Is a Person with Disability: ${userProfile.isPwD ? 'Yes' : 'No'}

        Scheme: "${scheme.title}"
        
        The user did not meet the following criteria:
        ${failedCriteriaString}

        Based on this, generate a JSON object with the following structure and content. ALL STRING VALUES in the final JSON object MUST be translated into ${language}.
        1.  **ineligibilityReason**: A single, simple sentence explaining the main reason for ineligibility. Start with an appropriate translated phrase for "You are not eligible for this scheme because...".
        2.  **eligibilitySuggestions**: A JSON array of strings with actionable, practical steps.
            - If a condition is time-based (like age), calculate and state when they will become eligible (e.g., "You will become eligible in X years.").
            - If a condition is document-based (like income or category), suggest what documents they might need to provide or update.
            - Suggestions must be legal and ethical. Do not suggest falsifying information.
            - If a condition cannot be changed (e.g., a scheme only for women), state it gently.
        3.  **alternativeSchemesSuggestion**: A single string suggesting that the user look for other schemes, especially mentioning the scheme's category (e.g., "You might be eligible for other 'Agriculture' schemes.").
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        ineligibilityReason: { type: Type.STRING },
                        eligibilitySuggestions: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING },
                        },
                        alternativeSchemesSuggestion: { type: Type.STRING },
                    },
                    required: ["ineligibilityReason", "eligibilitySuggestions", "alternativeSchemesSuggestion"],
                },
                temperature: 0.4,
            }
        });
        
        const textResponse = response.text.trim();
        if (textResponse) {
            return JSON.parse(textResponse) as EligibilityAdvice;
        }
        throw new Error("Failed to get a valid response from the API.");

    } catch (error) {
        console.error("Error generating eligibility suggestions:", error);
        throw new Error("Could not generate eligibility advice. Please try again later.");
    }
};