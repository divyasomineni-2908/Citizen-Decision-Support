You are a full-stack system architect and civic-tech developer.
Build a Node.js + Express web application that helps citizens easily discover government welfare schemes, subsidies, and government exams, and clearly understand eligibility, non-eligibility reasons, and improvement steps.

The platform must improve transparency, awareness, and decision-making for citizens.

🔹 Core Objectives

Design a system that:

Centralizes all government schemes, subsidies, and exams

Matches users with eligible benefits

Explains why they are NOT eligible

Suggests how to become eligible

Works for students, citizens, and job seekers

🔹 Required Modules
1️⃣ Education & Exams Module

Include:

Government entrance exams

Central & state exams

Job-related exams

Features:

After 10th qualification → show eligible exams

After 12th qualification → show eligible exams

After Degree/Diploma → show eligible exams

Filters:

Qualification

Age

Category

State

Show:

Exam details

Eligibility

Important dates

Apply link

2️⃣ Welfare & Skilling Schemes Module

Include:

Welfare schemes

Subsidies (money-based benefits)

Skilling/Training schemes

Collect inputs:

Age

Income

Caste/Category

Gender

Education

State

Employment status

Use these inputs to accurately match schemes.

3️⃣ Scheme vs Subsidy Classification

System must clearly separate:

Schemes → services/training/support

Subsidies → direct financial benefits

Display them separately so users understand benefit type.

4️⃣ Eligibility Engine

Implement a rules-based eligibility engine that:

Checks each scheme’s criteria

Matches with user profile

Returns:

Eligible

Partially Eligible

Not Eligible

5️⃣ Non-Eligible Transparency Dashboard (Key Feature ⭐)

Create a dashboard section:

“Schemes You Are Not Eligible For”

For each scheme:

Show failed conditions

Explain clearly:

“Income exceeds ₹X”

“Minimum age is 60”

“Only for SC/ST category”

Provide:

How to become eligible

Time-based suggestions

Required documents

Alternative similar schemes

Use:

Red ❌ Not eligible

Yellow ⚠ Partial

Green ✅ Eligible

6️⃣ AI & Smart Assistance

Add:

Chatbot for queries

Multilingual support

Voice-based access

Simplified explanations of complex policies

Personalized scheme recommendations

7️⃣ User Roles

Citizen

Student

Admin

Government Officer

8️⃣ Tech Stack Requirements

Backend: Node.js + Express

Frontend: React or HTML/CSS/JS

DB: MongoDB/PostgreSQL

Auth: JWT

REST APIs

Modular architecture

9️⃣ Non-Functional Requirements

Secure data handling

Scalable

Mobile-friendly

Low bandwidth support

Accessible UI

🔹 Expected Outcome

The system should:

Increase awareness

Improve scheme utilization

Reduce exclusion

Build trust through transparency

Provide clear guidance, not confusion
