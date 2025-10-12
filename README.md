# AI Finance Platform

## Overview
The AI Finance Platform is a full-stack template for building modern finance web applications with integrated AI features. It leverages Next.js for the frontend, Supabase (Postgres) for data storage, Prisma for type-safe ORM, Tailwind CSS and shadcn/ui for UI development, Inngest for background job orchestration, Arcjet for endpoint protection, Clerk for authentication, Resend for transactional email, and Gemini API for LLM-powered intelligence. This platform is designed to be reliable, secure, and extensible, making it suitable for dashboards, alerts, reporting, and back-office workflows in the finance domain.

## Introduction
This project demonstrates how contemporary web technologies can be unified to accelerate development of AI-enabled finance applications. The stack provides a scalable backend, rapid UI prototyping, secure authentication, and robust operational features. Supabase and Prisma ensure consistent data management, while Tailwind CSS and shadcn/ui enable fast and accessible interface creation. Clerk simplifies user management, Arcjet protects endpoints, and Inngest supports background processing for tasks like data ingestion and reporting. Resend handles email notifications, and Gemini API brings advanced AI capabilities for insights and assistant-style interactions. The architecture is modular, allowing easy integration of new data sources, analytics pipelines, and external APIs as requirements evolve.

## Features
- Next.js frontend and API routes
- Supabase (Postgres) managed database
- Prisma ORM and migrations
- Tailwind CSS & shadcn/ui for UI
- Clerk authentication and user management
- Inngest background job orchestration
- Arcjet bot detection and rate limiting
- Resend transactional email
- Gemini API for AI features

## Getting Started
1. Clone the repository
   git clone https://github.com/jim2107054/Expense-Tracker.git
   cd expense-tracker
   
2. Install dependencies
   
   npm install
   
3. Create a .env file with the following variables:
   
   DATABASE_URL=
   DIRECT_URL=

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

   GEMINI_API_KEY=

   RESEND_API_KEY=

   ARCJET_KEY=
   
4. Run the development server
   
   npm run dev
   
5. Open the app at [http://localhost:3000](http://localhost:3000)



<img width="1470" alt="Screenshot 2024-12-10 at 9 45 45 AM" src="https://github.com/user-attachments/assets/1bc50b85-b421-4122-8ba4-ae68b2b61432">

## Folder Structure
- /pages – Next.js pages and API routes
- /prisma – Prisma schema and migrations
- /components – UI components
- /lib – Utility functions and integrations
- /jobs – Inngest background jobs
- /public – Static assets

## License
MIT License

---
For questions or contributions, please open an issue or submit a pull request.
