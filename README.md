# Post-Comments Service

This project is a simple web application for creating posts and adding comments to those posts.

## Setup Instructions

To get started with the Post-Comments Service project, follow these steps:

1. **Clone the Repository**: Clone the repository into your local system using the following command:
   ```bash
   git clone https://github.com/rahulXbarnwal/Post-Comments-Service.git
   ```
2. **Install Dependencies for the Server**: Open the terminal inside the server folder & Run the command:
   ```bash
   npm install --force
   ```
3. **Start the Server**: After the node_modules are installed, run the command:
   ```bash
   npm run dev
   ```
   This will start the server at localhost:8000.
   
5. **Install Dependencies for the Client**: Open the terminal inside the client folder & Run the command:
   ```bash
   npm install --force
   ```
   Don't close the previous terminal running the server on port 8000.
   
7. **Start the Frontend**: Once the node_modules folder is installed in the client folder, run the command:
   ```bash
   npm run dev
   ```
   This will start the frontend at localhost:3000.
   
Now you're all set up and ready to start using the Post-Comments Service project!

## Overview

The Post-Comments Service is built using Node.js, Express.js, MongoDB, React, and Material-UI. It follows a client-server architecture where the server provides RESTful APIs for CRUD operations on posts and comments, and the client consumes these APIs to interact with the application.

### Server Architecture

- **Node.js**: The server-side code is written in Node.js, providing a runtime environment for JavaScript code execution.
- **Express.js**: Express is used as the web application framework for Node.js, simplifying the process of building APIs and handling HTTP requests.
- **MongoDB**: MongoDB is used as the database management system, storing data related to users, posts, and comments.
- **Mongoose**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a schema-based solution for modeling application data.

### Client Architecture

- **React**: The client-side code is built using React, a JavaScript library for building user interfaces. React components are used to create the frontend views and manage the application state.
- **Material-UI**: Material-UI is a popular React UI framework that provides pre-designed components and styles based on Google's Material Design guidelines. It is used for styling the frontend components and creating a responsive user interface.


## Screenshots

1. **Register Yourself**
   <img width="959" alt="Screenshot 2024-05-13 163047" src="https://github.com/rahulXbarnwal/Post-Comments-Service/assets/78689930/5cadbaaf-a745-4f25-b7bc-b1e0bb2914df">

2. **Login using your credentials**
   <img width="959" alt="Login" src="https://github.com/rahulXbarnwal/Post-Comments-Service/assets/78689930/61475a20-73ff-4d82-919d-d369313d5285">

3. **Dashboard/Feed containing all posts**: Includes PostTitle, Post Text, Creation Time, Posted By etc.
   <img width="959" alt="AllPosts" src="https://github.com/rahulXbarnwal/Post-Comments-Service/assets/78689930/b2884b8a-3746-4c51-9179-806568362873">

4. **Create your own post my clicking on Create Post in NavBar**
   <img width="959" alt="CreatePost" src="https://github.com/rahulXbarnwal/Post-Comments-Service/assets/78689930/50526e20-b510-4feb-9d3d-897c84235e80">

5. **Click on Add Comment or Click on the a post itself to view the post or add comments**
   <img width="944" alt="PostDetailsAndComments" src="https://github.com/rahulXbarnwal/Post-Comments-Service/assets/78689930/7dd56199-440f-4a16-aa81-0794f63b5eb1">

6. **Add Comment using the Rich Text Editor**
   
7. **You will see the latest comment on the top**
   <img width="944" alt="Comments" src="https://github.com/rahulXbarnwal/Post-Comments-Service/assets/78689930/95688a0d-5dbe-416a-9474-5d079a26ff9e">


   



