# 0x04. Files Manager

## Back-end

### Technologies Used:
- JavaScript (ES6)
- NoSQL
- MongoDB
- Redis
- NodeJS
- ExpressJS
- Kue

### Project Details:
- **Weight**: 1
- **Team Members**: Ailwei Maemu, [Your Name]
- **Start Date**: June 27, 2024, 6:00 AM
- **End Date**: July 4, 2024, 6:00 AM
- **Checker Released**: June 29, 2024, 12:00 AM
- **Manual QA Review**: Request when done
- **Auto Review**: Launched at the deadline

### Project Summary:
This project is a summary of the back-end trimester, covering authentication, NodeJS, MongoDB, Redis, pagination, and background processing.

### Objective:
Build a simple platform to upload and view files with the following features:
- User authentication via a token
- List all files
- Upload a new file
- Change permission of a file
- View a file
- Generate thumbnails for images

### Project Structure:
You have the freedom to implement and split the project into multiple files. The `utils` folder will be your friend.

### Learning Purpose:
This project aims to assemble each piece and build a full product, similar to real-life services.

### Resources:
- [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Process API doc](https://nodejs.org/api/process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://nodemon.io/)
- [MongoDB](https://www.mongodb.com/)
- [Bull](https://optimalbits.github.io/bull/)
- [Image thumbnail](https://sharp.pixelplumbing.com/)
- [Mime-Types](https://www.npmjs.com/package/mime-types)
- [Redis](https://redis.io/)

### Learning Objectives:
By the end of this project, you should be able to explain:
- How to create an API with Express
- How to authenticate a user
- How to store data in MongoDB
- How to store temporary data in Redis
- How to set up and use a background worker

### Requirements:
- **Editors**: vi, vim, emacs, Visual Studio Code
- **Environment**: All files will be interpreted/compiled on Ubuntu 18.04 LTS using Node (version 12.x.x)
- **File Endings**: All files should end with a new line
- **Mandatory File**: A `README.md` file at the root of the project
- **File Extensions**: Use the `.js` extension
- **Linting**: Code will be verified against lint using ESLint

### Project Setup:
1. **Initialize the Project**
    ```bash
    mkdir files-manager
    cd files-manager
    npm init -y
    ```

2. **Install Required Packages**
    ```bash
    npm install express mongoose redis kue jsonwebtoken bcryptjs multer sharp mime-types nodemon
    npm install --save-dev eslint mocha chai
    ```

3. **Project Structure**
    ```plaintext
    files-manager/
    ├── controllers/
    ├── middlewares/
    ├── models/
    ├── routes/
    ├── tests/
    ├── utils/
    ├── .eslintrc.js
    ├── README.md
    └── package.json
    ```
