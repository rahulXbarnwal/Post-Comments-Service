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
