🚀 Job Portal Application
✨ Overview
This is a full-stack job portal application designed to connect job seekers with companies offering various opportunities. It provides functionalities for users to browse jobs, apply for positions, manage their profiles, and for companies to post jobs, manage applicants, and maintain their company profiles. The application also includes administrative features for overall management.

🌟 Features
User Features
User Authentication: Secure signup and login for job seekers.

Profile Management: Users can create and update their profiles.

Job Browsing: Explore available job listings.

Job Search & Filter: Filter jobs by various criteria (likely categories, location, etc. based on FilterCard.jsx).

Job Application: Apply to desired job positions.

Applied Jobs History: View a list of jobs they have applied to.

Email Verification: Verify user accounts via email.

Company Features
Company Registration/Setup: Companies can create and manage their profiles.

Job Posting: Companies can post new job openings.

Applicant Management: View and manage applications for their posted jobs.

Admin Features
Job Management: Admin can manage all job listings (view, edit, delete).

Company Management: Admin can manage registered companies.

Applicant Management: Admin can view and manage all applicants.

General Features
Responsive Design: A user-friendly interface that adapts to various screen sizes.

Theming: Light/Dark mode toggle for user preference (ThemeToggle.jsx).

State Management: Efficient data flow using Redux.

🛠️ Technologies Used
Backend (Node.js/Express.js)
Runtime: Node.js

Framework: Express.js

Database: Likely MongoDB (common with Mongoose for Node.js apps, though not explicitly shown, model folder suggests ORM usage)

Authentication: JSON Web Tokens (JWT) with isAuthenticated.js middleware.

File Uploads: multer.js for handling file uploads (e.g., resumes, company logos).

Cloud Storage: cloudinary.js for storing uploaded files.

Email Service: sendEmail.js for sending transactional emails (e.g., verification, application confirmations).

Environment Variables: dotenv for managing sensitive information.

Frontend (React.js)
Library: React.js

Build Tool: Vite

Styling: Tailwind CSS (indicated by components.json and ui folder structure for Shadcn UI components).

UI Components: Shadcn UI components (ui folder: button, input, dialog, table, etc.).

State Management: Redux Toolkit (Redux folder: authSlice, jobSlice, companySlice, applicationSlice).

Hooks: Custom React Hooks for data fetching (hooks folder).

🚀 Getting Started
Follow these instructions to set up and run the project locally on your machine.

Prerequisites
Node.js (LTS version recommended)

npm (Node Package Manager) or Yarn

MongoDB instance (local or cloud-based like MongoDB Atlas)

Cloudinary account

Email service provider credentials (e.g., SendGrid, Nodemailer setup)

Backend Setup
Clone the repository:

git clone <your-repository-url>
cd <your-repository-name>/backend

Install dependencies:

npm install
# OR
yarn install

Create a .env file:
In the backend directory, create a .env file and add the following environment variables. Replace the placeholder values with your actual credentials:

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_SERVICE=your_smtp_service
SMTP_MAIL=your_smtp_email
SMTP_PASSWORD=your_smtp_password
FRONTEND_URL=http://localhost:5173 # Or your frontend deployment URL

Run the backend server:

npm start
# OR
npm run dev # If you have a dev script

The backend server will start on http://localhost:8000 (or the port you specified in .env).

Frontend Setup
Navigate to the frontend directory:

cd ../frontend

Install dependencies:

npm install
# OR
yarn install

Run the frontend application:

npm run dev

The frontend application will typically open in your browser at http://localhost:5173.

🖥️ Usage
Once both the backend and frontend servers are running:

Register as a user: Create a new job seeker account or a company account.

Explore jobs: Browse through the available job listings.

Apply for jobs: As a job seeker, apply to positions that interest you.

Post jobs: As a company, log in to post new job openings.

Manage applications: Companies can view and manage applications received.

Admin dashboard: Access the admin routes (if applicable) to manage users, companies, and jobs.

🌐 Deployed Application
You can access the live deployed version of this application here:

https://jobflux-full-stack-8sja.vercel.app/

🤝 Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeature).

Make your changes.

Commit your changes (git commit -m 'Add new feature').

Push to the branch (git push origin feature/YourFeature).

Open a Pull Request.

📄 License
This project is licensed under the MIT License - see the LICENSE file (if available) for details.
