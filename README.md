🧑‍💼 Employee Management Dashboard

A modern Employee Management Dashboard built using React.js, featuring authentication, protected routes, employee CRUD operations, search & filtering, and a clean UI using Tailwind CSS.

📌 Project Overview

This project allows users to:

Log in using mock authentication

Access a protected dashboard

Manage employees (Add, Edit, Delete)

Upload and preview employee profile images

Search and filter employees

Toggle employee active/inactive status

Print the employee list

Authentication state is handled using localStorage, and routing is secured using Protected Routes.

🚀 Features
🔐 Authentication

Login page with mock credentials

Protected dashboard route

Unauthorized users are redirected to login

Logout functionality with confirmation

📊 Dashboard

Employee summary

Employee list displayed in a table

Active / Inactive status toggle

🧾 Employee Management

Add new employee

Edit existing employee

Delete employee with confirmation

Image upload with preview

Form validation

🔍 Search & Filter

Search employees by name

Filter by gender

Filter by active/inactive status

Combined filtering supported

🖨 Print

Print employee list directly from the dashboard

🛠 Tech Stack

React.js (18+)

React Router DOM (v6)

Tailwind CSS

Vite

JavaScript (ES6+)

LocalStorage (Mock API)

▶️ How to Run the Project Locally

1️⃣ Clone the repository
git clone https://github.com/<your-username>/employee-management-dashboard.git

2️⃣ Navigate to the project folder
cd employee-management-dashboard

3️⃣ Install dependencies
npm install

4️⃣ Start the development server
npm run dev

5️⃣ Open in browser
http://localhost:5173

🧠 Design Decisions & Assumptions

Authentication is mocked using localStorage

No backend API is used

Tailwind CSS is used for fast and consistent UI styling

React Router v6 is used for routing and route protection

Focused on clean code, reusability, and readability

📈 Future Improvements

Backend integration (Node.js / Firebase)

Role-based authentication

Pagination for employee list

Export employee data (CSV / PDF)

Dark mode support

👩‍💻 Author

Developed by Madhusmita Swain
Frontend Developer | React.js Enthusiast
