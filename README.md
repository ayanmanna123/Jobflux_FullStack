# 🚀 Job Portal Application

## ✨ Overview
This is a full-stack job portal application designed to connect job seekers with companies offering various opportunities.  
It provides functionalities for users to browse jobs, apply for positions, manage their profiles, and for companies to post jobs, manage applicants, and maintain their company profiles.  
The application also includes administrative features for overall management.

---

## 🌟 Features

### 👤 User Features
- **User Authentication:** Secure signup and login for job seekers.  
- **Profile Management:** Users can create and update their profiles.  
- **Job Browsing:** Explore available job listings.  
- **Job Search & Filter:** Filter jobs by various criteria (likely categories, location, etc. based on `FilterCard.jsx`).  
- **Job Application:** Apply to desired job positions.  
- **Applied Jobs History:** View a list of jobs they have applied to.  
- **Email Verification:** Verify user accounts via email.  

### 🏢 Company Features
- **Company Registration/Setup:** Companies can create and manage their profiles.  
- **Job Posting:** Companies can post new job openings.  
- **Applicant Management:** View and manage applications for their posted jobs.  

### 🛠️ Admin Features
- **Job Management:** Admin can manage all job listings (view, edit, delete).  
- **Company Management:** Admin can manage registered companies.  
- **Applicant Management:** Admin can view and manage all applicants.  

### 🌍 General Features
- **Responsive Design:** A user-friendly interface that adapts to various screen sizes.  
- **Theming:** Light/Dark mode toggle for user preference (`ThemeToggle.jsx`).  
- **State Management:** Efficient data flow using Redux.  

---

## 🛠️ Technologies Used

### 🔙 Backend (Node.js/Express.js)
- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Database:** MongoDB (with Mongoose ORM)  
- **Authentication:** JSON Web Tokens (JWT) with `isAuthenticated.js` middleware.  
- **File Uploads:** `multer.js` for handling file uploads (resumes, logos).  
- **Cloud Storage:** `cloudinary.js` for storing uploaded files.  
- **Email Service:** `sendEmail.js` for sending transactional emails (verification, confirmations).  
- **Environment Variables:** `dotenv` for managing sensitive information.  

### 🎨 Frontend (React.js)
- **Library:** React.js  
- **Build Tool:** Vite  
- **Styling:** Tailwind CSS  
- **UI Components:** Shadcn UI components (`ui` folder: button, input, dialog, table, etc.).  
- **State Management:** Redux Toolkit (`authSlice`, `jobSlice`, `companySlice`, `applicationSlice`).  
- **Hooks:** Custom React Hooks for data fetching (`hooks` folder).  

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js (LTS version recommended)  
- npm or Yarn  
- MongoDB instance (local or Atlas)  
- Cloudinary account  
- Email service provider credentials (e.g., SendGrid, Nodemailer)  

### ⚙️ Backend Setup
```bash
# Clone the repository
git clone https://github.com/ayanmanna123/Jobflux_FullStack.git
cd  ./backend

# Install dependencies
npm install   # OR yarn install

# Create .env file
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
FRONTEND_URL=http://localhost:5173
```

Run the backend server:
```bash
npm start
# OR
npm run dev
```
The backend runs at: [http://localhost:8000](http://localhost:8000).  

### 🎨 Frontend Setup
```bash
cd ../frontend

# Install dependencies
npm install   # OR yarn install

# Run frontend
npm run dev
```
Frontend runs at: [http://localhost:5173](http://localhost:5173).  

---

## 🖥️ Usage
- **Register as a user:** Create a job seeker or company account.  
- **Explore jobs:** Browse listings.  
- **Apply for jobs:** Submit applications.  
- **Post jobs:** Companies can post new job openings.  
- **Manage applications:** Companies manage received applications.  
- **Admin dashboard:** Manage users, jobs, and companies.  

---

## 🌐 Deployed Application
👉 [Live Demo](https://jobflux-full-stack-8sja.vercel.app/)  

---

## 🤝 Contributing
1. Fork the repo  
2. Create a new branch (`git checkout -b feature/YourFeature`)  
3. Make your changes  
4. Commit (`git commit -m 'Add new feature'`)  
5. Push (`git push origin feature/YourFeature`)  
6. Open a Pull Request  

---
# 📂 Project Structure
```bash
├── backend
│ ├── .env
│ ├── .gitignore
│ ├── controllers
│ │ ├── aplication.controllers.js
│ │ ├── company.controllers.js
│ │ ├── job.controllers.js
│ │ └── user.controllers.js
│ ├── index.js
│ ├── middlewares
│ │ ├── isAuthenticated.js
│ │ └── multer.js
│ ├── model
│ │ ├── Company.model.js
│ │ ├── application.model.js
│ │ ├── job.model.js
│ │ └── user.model.js
│ ├── package-lock.json
│ ├── package.json
│ ├── routes
│ │ ├── application.route.js
│ │ ├── company.route.js
│ │ ├── job.route.js
│ │ └── user.route.js
│ ├── utils
│ │ ├── cloudinary.js
│ │ ├── datauri.js
│ │ ├── db.js
│ │ └── sendEmail.js
│ └── vercel.json
└── frontend
├── .gitignore
├── README.md
├── components.json
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│ ├── art-illustration-icon-symbol-log.jpg
│ └── vite.svg
├── src
│ ├── App.css
│ ├── App.jsx
│ ├── Redux
│ │ ├── applicationSlice.js
│ │ ├── authSilce.js
│ │ ├── companySlice.js
│ │ ├── jobSlice.js
│ │ └── store.js
│ ├── assets
│ │ ├── abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg
│ │ └── react.svg
│ ├── components
│ │ ├── Appliedjjob.jsx
│ │ ├── Brouse.jsx
│ │ ├── CatagoryCorouscomponent.jsx
│ │ ├── DashboardStats.jsx
│ │ ├── FilterCard.jsx
│ │ ├── HeroSection.jsx
│ │ ├── Home.jsx
│ │ ├── Job.jsx
│ │ ├── Jobdescription.jsx
│ │ ├── Jobs.jsx
│ │ ├── LatestJob.jsx
│ │ ├── LatestJobCard.jsx
│ │ ├── Profile.jsx
│ │ ├── ThemeToggle.jsx
│ │ ├── UPdtaeprofiledilog.jsx
│ │ ├── VerifyEmail.jsx
│ │ ├── admin
│ │ │ ├── AdminJobs.jsx
│ │ │ ├── AdminJobsTable.jsx
│ │ │ ├── Applicants.jsx
│ │ │ ├── ApplicantsTable.jsx
│ │ │ ├── Companies.jsx
│ │ │ ├── CompantCreat.jsx
│ │ │ ├── CompanyTable.jsx
│ │ │ ├── Companysetup.jsx
│ │ │ ├── PostJob.jsx
│ │ │ ├── ProtectedRoute.jsx
│ │ │ └── ProtectedRouteStudent.jsx
│ │ ├── auth
│ │ │ ├── Login.jsx
│ │ │ └── Signup.jsx
│ │ ├── shared
│ │ │ ├── Footer.jsx
│ │ │ └── Navbar.jsx
│ │ └── ui
│ │ ├── avatar.jsx
│ │ ├── badge.jsx
│ │ ├── button.jsx
│ │ ├── carousel.jsx
│ │ ├── dialog.jsx
│ │ ├── input.jsx
│ │ ├── label.jsx
│ │ ├── popover.jsx
│ │ ├── radio-group.jsx
│ │ ├── select.jsx
│ │ ├── sonner.jsx
│ │ └── table.jsx
│ ├── hooks
│ │ ├── useGetAllAdminJobs.jsx
│ │ ├── useGetAppliedJobs.jsx
│ │ ├── usegetAllCompanies.jsx
│ │ ├── usegetAllJobs.jsx
│ │ ├── usegetCompanybyid.jsx
│ │ └── usegetSinglejob.jsx
│ ├── index.css
│ ├── lib
│ │ └── utils.js
│ └── main.jsx
├── vercel.json
└── vite.config.js
```

---
## 📄 License
This project is licensed under the **MIT License** - see the LICENSE file for details.  
