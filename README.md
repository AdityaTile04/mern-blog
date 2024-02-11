# MERN Blog

MERN Blog is a full-stack web application for creating and managing blog posts. It utilizes the MERN stack (MongoDB, Express.js, React.js, Node.js) to provide a robust and scalable solution for blogging.

## Features

- **User Authentication:** Secure user authentication using JWT (JSON Web Tokens).
- **Create and Edit Posts:** Users can create, edit, and delete their blog posts.
- **Real-time Updates:** Utilizes WebSocket for real-time updates, ensuring an interactive and dynamic user experience.
- **Responsive Design:** A responsive and mobile-friendly user interface for seamless user experience across devices.

## Technologies Used

- **MongoDB:** NoSQL database for storing blog posts and user information.
- **Express.js:** Backend framework for building the server and handling API requests.
- **React.js:** Frontend library for building the user interface.
- **Node.js:** JavaScript runtime environment for server-side scripting.
- **WebSocket:** For real-time communication between the server and clients.
- **JWT (JSON Web Tokens):** Used for secure user authentication.
- **Tailwind CSS:** Styling the user interface.

## Getting Started

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/AdityaTile04/mern-blog.git
    
    ```

2. **Install Dependencies:**

    ```bash
    # Install server dependencies
    cd api
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3. **Configure Environment Variables:**

    Create a `.env` file in the `server` directory and set the following variables:

    ```env
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    PORT=your_server_port
    ```

4. **Run the Application:**

    ```bash
    # Run the server (from the server directory)
    cd api
    npm run dev

    # Run the client (from the client directory)
    cd ../client
    npm run dev
    ```
