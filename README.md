# 📚 Book Review Application

Welcome to the **Book Review Application**! 🎉 This app allows users to browse a collection of books, view their details, add reviews, and more! 🚀

---

## 🎯 Objectives

- **Create APIs** and perform **CRUD operations** on an Express server using **Session & JWT authentication**.
- Use **Async/Await** or **Promises** with **Axios** in Node.js.
- Create **REST API endpoints** and test them using **Postman**.

---

## 📋 Table of Contents

1. [About](#about)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Contributors](#contributors)
8. [License](#license)

---

## 🧐 About

The **Book Review Application** is a web app that allows users to:
- Browse a list of books 📖
- Search for books by title, author, or ISBN 🔍
- Add reviews for books 📝
- Manage user accounts (register, login, etc.) 🔑

---

## ✨ Features

- **User Registration & Authentication**: Secure user registration and login with JWT authentication.
- **Book Reviews**: Users can add, edit, or delete their reviews for books.
- **Search**: Find books by title, author, or ISBN.
- **Responsive UI**: Mobile-friendly design for a seamless experience on any device. 📱

---

## ⚙️ Technologies Used

- **Node.js**: Backend server using Express.js.
- **Express**: Web framework for building the API.
- **JWT**: JSON Web Tokens for user authentication and session management 🔐.
- **MongoDB**: Database for storing user and book data (if needed).
- **Axios**: For handling HTTP requests.

---

## 🛠️ Installation

Follow these steps to get the project up and running locally:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/book-review-app.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd book-review-app
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Start the Server**:
    ```bash
    npm start
    ```

5. Visit [http://localhost:5000](http://localhost:5000) in your browser to start using the app!

---

## 📑 API Endpoints

### Public Routes (No authentication required)

- **Get all books**:
    - `GET /`
    - Returns a list of all books in the store.

- **Get book by ISBN**:
    - `GET /isbn/:isbn`
    - Get details of a specific book by its ISBN.

- **Get books by author**:
    - `GET /author/:author`
    - Get books by a specific author.

- **Get books by title**:
    - `GET /title/:title`
    - Get books matching a specific title.

- **Get book reviews**:
    - `GET /review/:isbn`
    - Get reviews for a book using its ISBN.

### Authenticated User Routes (JWT Required)

- **User Registration**:
    - `POST /customer/register`
    - Register a new user with a username and password.

- **User Login**:
    - `POST /customer/login`
    - Login with an existing username and password, receive a JWT token.

- **Add or Modify Book Review**:
    - `PUT /auth/review/:isbn`
    - Add or update a review for a book by ISBN.

- **Delete Book Review**:
    - `DELETE /auth/review/:isbn`
    - Delete a review for a book by ISBN.

---

## 🚀 Usage

- **Register**: Create an account by sending a `POST` request to `/customer/register` with your username and password in the request body.
- **Login**: After registering, log in by sending a `POST` request to `/customer/login` with your username and password. You’ll receive a JWT token that will be used for authentication in subsequent requests.
- **Add Review**: Once logged in, you can add reviews for books by sending a `PUT` request to `/auth/review/:isbn` with your review in the body.
- **View Reviews**: You can view reviews for a specific book by sending a `GET` request to `/review/:isbn`.

---

## 🤝 Contributors

- [Willie Conway](https://github.com/Willie-Conway) - Developer and Maintainer.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📌 Screenshot

![Book Review App](https://github.com/Willie-Conway/Book-Review-Application/blob/48c5811c90a39fc62686f78e9561991fa4b36170/Screenshots/REST%20API%20Server.png)

> "The best way to predict the future is to create it." – Abraham Lincoln 🌟
