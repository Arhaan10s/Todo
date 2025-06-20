Project Setup Guide-----------------------------------------------------------
Technology Stack
•	Backend: Node.js (Express, Sequelize)
•	Frontend: React.js (Vite)
________________________________________
Backend Setup (Node.js + Express)
1.	Navigate to the backend directory:
cd backend
2.	Install dependencies:
npm install
3.	Required Packages:
"body-parser": "^2.2.0"
"cors": "^2.8.5"
"dotenv": "^16.5.0"
"express": "^5.1.0"
"fs": "^0.0.1-security"
"modules": "^0.4.0"
"node": "^24.2.0"
"nodemon": "^3.1.10"
"sequelize": "^6.37.7"
4.	Start the backend server:
nodemon index.js
________________________________________
Frontend Setup (React.js)
1.	Navigate to the frontend directory:
cd frontend
2.	Install dependencies:
npm install
3.	Required Packages:
"axios": "^1.10.0"
"bootstrap": "^5.3.7"
"react": "^19.1.0"
"react-dom": "^19.1.0"
"react-router-dom": "^7.6.2"
4.	Start the frontend development server:
npm run dev
________________________________________
Development URLs
•	Backend API URL: http://localhost:3000/api
•	Frontend URL: http://localhost:5173
________________________________________
Notes
•	Ensure Node.js and npm are installed on your machine.
•	Create a .env file in the backend directory for environment-specific configurations (if required).

