News App
A responsive and fast News Application developed using React.js (Vite), Bootstrap, and NewsAPI. The app fetches real-time news and displays top headlines using reusable React components.

Features
Real-time news fetched from NewsAPI
Fully responsive UI using Bootstrap
Fast performance with Vite
Easy navigation with Navbar
Clean and minimal design
Technologies Used
React.js
Vite
Bootstrap 5
JavaScript (ES6)
NewsAPI
HTML & CSS
Project Folder Structure
news-app/ │── node_modules/ │── public/ │── src/ │ ├── assets/ │ │ └── news.png │ ├── Components/ │ │ ├── Navbar.jsx │ │ ├── NewsBoard.jsx │ │ └── NewsItem.jsx │ ├── App.jsx │ ├── App.css │ ├── index.css │ └── main.jsx │── .env │── .gitignore │── eslint.config.js │── index.html │── package.json │── package-lock.json │── vite.config.js │── README.md

Environment Variable Setup
Create a .env file in the root directory
Add your NewsAPI key:
VITE_API_KEY=

How to Run the Project Locally
Clone the repository:
git clone https://github.com/codemanav16/        https://github.com/codemanav16/News_App


Move into the project directory:

cd news-app


Install dependencies:

npm install


Start the development server:

npm run dev


Open the app in your browser:

http://localhost:5173

 Components Overview

Navbar.jsx → Displays navigation bar

NewsBoard.jsx → Fetches and manages news data

NewsItem.jsx → Displays individual news cards




 Author

Manav Anal

GitHub: https://github.com/codemanav16/     -codemanav16

Email: manavanal16@gmail.com
