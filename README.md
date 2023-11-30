# Full Stack Blog Application

This is a full stack blog application that allows a single admin user to post content, while other users can comment and like the posts. The application uses MongoDB for data storage, Express and Node.js for the backend, and embedded JavaScript for the views. It also implements cookie-based authentication for user management. The frontend is responsive, ensuring a seamless user experience on various devices.

## Features

- **Admin Capabilities**: Only the admin user can create and publish blog posts.
- **User Interaction**: Users can comment on blog posts and like them.
- **Responsive Design**: The application's user interface is designed to adapt to different screen sizes and devices.
- **Authentication**: Cookie-based authentication is implemented for user management.

## Setup

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

```
git clone https://github.com/gnaaruag/fs-blog-app.git
```

2. Navigate to project directory:

```
cd fs-blog-app
```

3. Create a .env file with following environment variables:
```
MONGODB_URI=your_mongodb_connection_uri
PORT=port
```

Replace your_mongodb_connection_uri with your MongoDB connection string. You can obtain this by setting up a MongoDB database, such as MongoDB Atlas.

Choose a port of your preference.

4. Install project dependencies:
```
npm install
```

5. Start the application using:
```
npm start
```
For working with dev dependencies use: 
```
npm run dev
```

Once the application is running, open a web browser and access the application at http://localhost:(port).

## Folder Structure

The project is organized as follows:

- views: Contains the EJS templates for rendering the views.
- public: Holds static assets like CSS, JavaScript, and images.
- routes: Defines the application's routes and controllers.
- models: Contains the data models for the application.
- middleware: Custom middleware functions for authentication.
- config: Configuration files for authentication strategies and other settings.

## Dependencies
Key dependencies for this project include:

- express: The web application framework for Node.js.
- mongoose: A MongoDB object modeling tool.
- passport: A popular authentication middleware for Node.js.
- express-session: Middleware for managing user sessions.
- bcrypt: Library for hashing and salting passwords securely.
- cookie-parser: Middleware for handling cookies.
Make sure to check the package.json file for a complete list of dependencies.

Note that the deploy link provided in the repository runs on a free instance so it will take a while to boot up

