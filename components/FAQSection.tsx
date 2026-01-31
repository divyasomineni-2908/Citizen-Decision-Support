import React, { useState } from 'react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  language: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqs: FAQ[] = language === 'Hindi' ? [
    {
      id: '1',
      question: 'मैं कैसे जांच सकता हूं कि मैं किसी योजना के लिए पात्र हूं?',
      answer: 'अपनी पात्रता जांचने के लिए "पात्रता जांचकर्ता" टैब पर जाएं। अपनी आयु, आय, राज्य और अन्य विवरण भरें। सिस्टम स्वचालित रूप से आपके लिए उपयुक्त योजनाओं को दिखाएगा।',
      category: 'सामान्य'
    },
    {
      id: '2',
      question: 'आवेदन में कितना समय लगता है?',
      answer: 'आवेदन प्रक्रिया में आमतौर पर 2-4 सप्ताह लगते हैं। आप "मेरे आवेदन" सेक्शन में अपने आवेदन की स्थिति ट्रैक कर सकते हैं। कुछ योजनाओं में त्वरित प्रक्रिया हो सकती है।',
      category: 'आवेदन'
    },
    {
      id: '3',
      question: 'मुझे किन दस्तावेजों की आवश्यकता है?',
      answer: 'आमतौर पर आवश्यक दस्तावेज़: आधार कार्ड, आय प्रमाणपत्र, निवास प्रमाण पत्र, बैंक पासबुक, और पासपोर्ट साइज फोटो। विशिष्ट योजना के लिए विस्तृत सूची देखें।',
      category: 'दस्तावेज़'
    },
    {
      id: '4',
      question: 'क्या मैं एक से अधिक योजनाओं के लिए आवेदन कर सकता हूं?',
      answer: 'हां, आप एक साथ कई योजनाओं के लिए आवेदन कर सकते हैं, बशर्ते आप प्रत्येक योजना की पात्रता मानदंडों को पूरा करें। कुछ योजनाएं परस्पर अनन्य हो सकती हैं।',
      category: 'सामान्य'
    },
    {
      id: '5',
      question: 'यदि मेरा आवेदन अस्वीकार कर दिया जाता है तो क्या होगा?',
      answer: 'आपको अस्वीकृति का कारण बताया जाएगा। आप सुधार के साथ पुनः आवेदन कर सकते हैं या शिकायत अनुभाग के माध्यम से अपील कर सकते हैं। आप संबंधित अधिकारी से भी संपर्क कर सकते हैं।',
      category: 'आवेदन'
    },
    {
      id: '6',
      question: 'क्या मैं अपने दस्तावेज़ों को सुरक्षित रूप से संग्रहीत कर सकता हूं?',
      answer: 'हां, "डॉक्यूमेंट वॉल्ट" सुविधा का उपयोग करें। आपके दस्तावेज़ एन्क्रिप्ट किए गए हैं और सुरक्षित रूप से संग्रहीत हैं। आप उन्हें कई आवेदनों के लिए पुन: उपयोग कर सकते हैं।',
      category: 'दस्तावेज़'
    },
    {
      id: '7',
      question: 'मुझे लाभ कब मिलेगा?',
      answer: 'स्वीकृति के बाद, अधिकांश योजनाएं 7-15 दिनों में लाभ वितरित करती हैं। कुछ योजनाओं में मासिक या त्रैमासिक वितरण होता है। आपको SMS/Email अपडेट मिलेंगे।',
      category: 'लाभ'
    },
    {
      id: '8',
      question: 'क्या कोई हेल्पलाइन नंबर है?',
      answer: 'हां, राष्ट्रीय हेल्पलाइन: 1800-XXX-XXXX (टोल फ्री)। आप चैटबॉट का भी उपयोग कर सकते हैं या योजना-विशिष्ट संपर्क विवरण के लिए योजना पृष्ठ देखें।',
      category: 'समर्थन'
    }
  ] : [
    {
      id: '1',
      question: 'How can I check if I am eligible for a scheme?',
      answer: 'Go to the "Eligibility Checker" tab and fill in your details such as age, income, state, and other relevant information. The system will automatically show you schemes that match your profile.',
      category: 'General'
    },
    {
      id: '2',
      question: 'How long does application processing take?',
      answer: 'Application processing typically takes 2-4 weeks depending on the scheme. You can track your application status in the "My Applications" section. Some schemes may have faster processing times.',
      category: 'Application'
    },
    {
      id: '3',
      question: 'What documents do I need?',
      answer: 'Commonly required documents include: Aadhaar Card, Income Certificate, Residence Proof, Bank Passbook, and Passport-size Photos. Check the specific scheme page for detailed document requirements.',
      category: 'Documents'
    },
    {
      id: '4',
      question: 'Can I apply for multiple schemes?',
      answer: 'Yes, you can apply for multiple schemes simultaneously, provided you meet the eligibility criteria for each. Some schemes may be mutually exclusive, which will be indicated.',
      category: 'General'
    },
    {
      id: '5',
      question: 'What if my application is rejected?',
      answer: 'You will receive a detailed reason for rejection. You can reapply after addressing the issues, or file a grievance through the Grievance section. You can also contact the concerned officer.',
      category: 'Application'
    },
    {
      id: '6',
      question: 'Can I store my documents securely?',
      answer: 'Yes, use the "Document Vault" feature. Your documents are encrypted and stored securely. You can reuse them for multiple applications without uploading again.',
      category: 'Documents'
    },
    {
      id: '7',
      question: 'When will I receive benefits?',
      answer: 'After approval, most schemes disburse benefits within 7-15 days. Some schemes have monthly or quarterly disbursements. You will receive SMS/Email notifications about disbursement.',
      category: 'Benefits'
    },
    {
      id: '8',
      question: 'Is there a helpline number?',
      answer: 'Yes, National Helpline: 1800-XXX-XXXX (Toll-free). You can also use the chatbot for instant help or check the scheme page for scheme-specific contact details.',
      category: 'Support'
    }
  ];

  const categories = ['All', ...Array.from(new Set(faqs.map(f => f.category)))];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          ❓ {language === 'Hindi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {language === 'Hindi' 
            ? 'सामान्य प्रश्नों के उत्तर खोजें'
            : 'Find answers to common questions'}
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder={language === 'Hindi' ? 'प्रश्न खोजें...' : 'Search questions...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
          <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="space-y-3">
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <p>{language === 'Hindi' ? 'कोई प्रश्न नहीं मिला' : 'No questions found'}</p>
          </div>
        ) : (
          filteredFAQs.map(faq => (
            <div
              key={faq.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-start gap-3 text-left flex-1">
                  <span className="text-primary text-xl mt-1">
                    {expandedId === faq.id ? '−' : '+'}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 inline-block">
                      {faq.category}
                    </span>
                  </div>
                </div>
              </button>
              {expandedId === faq.id && (
                <div className="px-6 pb-4 pt-2 bg-gray-50 dark:bg-gray-750">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Contact Support */}
      <div className="mt-8 bg-blue-50 dark:bg-blue-900 rounded-lg p-6 text-center">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
          {language === 'Hindi' ? 'अपना उत्तर नहीं मिला?' : "Didn't find your answer?"}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {language === 'Hindi'
            ? 'हमारी सहायता टीम से संपर्क करें या चैटबॉट का उपयोग करें'
            : 'Contact our support team or use the chatbot for instant help'}
        </p>
        <div className="flex justify-center gap-3">
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            💬 {language === 'Hindi' ? 'चैटबॉट खोलें' : 'Open Chatbot'}
          </button>
          <button className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
            📞 {language === 'Hindi' ? 'हेल्पलाइन' : 'Helpline'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
