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

## Worflow ##

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

