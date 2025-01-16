## Objective: ##
Create a system that allows users to submit their name, social media handle, and upload multiple images. The submitted data will be displayed on an admin dashboard, showing each user's name, social media handle, and all images they have uploaded.

## File Structure ##


- **project/**: Main project directory.
  - **.dist/**: Directory for distribution files.
  - **.git/**: Git directory for version control.
  - **backend/**: Main backend directory(node.js)
  - **frontend/**: Frontend directory(react.js)
  - **node_modules/**: Contains dependencies installed via npm.
  - **.gitignore**: Specifies files to be ignored by Git.
  - **package.json**: Lists project dependencies and scripts.
  - **package-lock.json**: Contains exact versions of installed dependencies.

## Features: ##
User submission form for name, social media handle, and image uploads.
Data is stored in MongoDB.
Admin login (username: admin, password: admin@1234).
Admin dashboard to view all user submissions.

## Technology used: #
Frontend: React, Axios
Backend: Node.js, Express, MongoDB, Mongoose, Multer
Styling: CSS



## Workflow

### Backend Setup

1. **Initialize Backend:**
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Initialize Node.js project:
     ```bash
     npm init -y
     ```

2. **Install Dependencies:**
   ```bash
   npm install express mongoose multer cors body-parser dotenv
   ```

3. **Setup Environment Variables:**
   Create a .env file in backend:
   ```bash 
      MONGO_URI=mongodb://localhost:27017/social_media
   ```
4. **Create server.js:**
   Setup Express server, connect to MongoDB, and define routes.
   Define Models and Routes:
   Create models/User.js for user schema.
   Create routes/userRoutes.js for handling user submissions and admin login.
   
6. **Start Backend Server:**
```bash 
   npm start
```
### Frontend Setup
1. **Initialize Frontend:**

Navigate to the frontend folder:
  ```bash
cd ../frontend
```
2. **Create React app or set up manually:**
```bash

npx create-react-app
```
3. **Install Dependencies:**

```bash

npm install axios
```
4. **Create Components:**

UserForm.js: Form for user submission (name, social media handle, images).
AdminLogin.js: Admin login page.
Dashboard.js: Admin dashboard to view user submissions.

5.**Start Frontend Development Server:**

```bash

npm start
```

### User Submission:

Access the user form, fill in details, and submit.
Data is stored in MongoDB.
Admin Dashboard:
Log in with credentials (admin/admin@1234).
View all user submissions in the dashboard.


## Outputs

1. ### User form:
   Where the user enters the details

   <img width="958" alt="image" src="https://github.com/user-attachments/assets/2b2971dd-d475-49f0-b7b8-07060c83a0c6" />


2. ### MongoDB:
   When user enters details it is saved in backend

   <img width="937" alt="image" src="https://github.com/user-attachments/assets/34975d0d-ab70-423f-9043-3070b9c70dea" />

3. ### Admin Login
Where the admin can login to see all data 
Default username admin_66 and password: admin@1234

<img width="958" alt="image" src="https://github.com/user-attachments/assets/3e36c7dd-0f0c-4707-9549-923bffcf3f7e" />

4. ### Admin Dashbord
   Where all data is visible
   
<img width="941" alt="image" src="https://github.com/user-attachments/assets/8dd9d78e-9b3d-4754-aeb9-7f47baf572c5" />


### The front end is deployed in netlify : https://vermillion-mermaid-878da6.netlify.app
### The backend is deployed in vercel : social-nyphzyfyv-vidulas-projects.vercel.app

