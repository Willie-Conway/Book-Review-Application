const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

// Helper functions

// Check if a user exists
const isValid = (username) => {
  const userMatches = users.filter((user) => user.username === username);
  return userMatches.length > 0;
};

// Authenticate the user based on username and password
const authenticatedUser = (username, password) => {
  const matchingUsers = users.filter((user) => user.username === username && user.password === password);
  return matchingUsers.length > 0;
};

// Middleware to check if the user is authenticated via JWT
const verifyJWT = (req, res, next) => {
  const token = req.session.authorization?.accessToken;

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, 'access', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = decoded;  // Store user info in the request object
    next();
  });
};

// Task 7 - User login (POST request)
regd_users.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (authenticatedUser(username, password)) {
    // Create a JWT token when the user logs in
    let accessToken = jwt.sign({ username }, "access", { expiresIn: 3600 });  // 1 hour expiration
    req.session.authorization = { accessToken, username };
    return res.status(200).send("User successfully logged in");
  } else {
    return res.status(208).json({ message: "Invalid username or password" });
  }
});

// Task 8 - Add or modify a book review (PUT request)
regd_users.put("/auth/review/:isbn", verifyJWT, (req, res) => {
  const isbn = req.params.isbn;
  const review = req.body.review;
  const username = req.session.authorization.username;

  if (books[isbn]) {
    let book = books[isbn];

    // Add or modify the review for the current user
    book.reviews[username] = review;
    return res.status(200).send("Review successfully posted");
  } else {
    return res.status(404).json({ message: `ISBN ${isbn} not found` });
  }
});

// Task 9 - Delete a book review (DELETE request)
regd_users.delete("/auth/review/:isbn", verifyJWT, (req, res) => {
  const isbn = req.params.isbn;
  const username = req.session.authorization.username;

  if (books[isbn]) {
    let book = books[isbn];

    // Ensure that only the user who posted the review can delete it
    if (book.reviews[username]) {
      delete book.reviews[username];
      return res.status(200).send("Review successfully deleted");
    } else {
      return res.status(404).json({ message: "Review not found for this user" });
    }
  } else {
    return res.status(404).json({ message: `ISBN ${isbn} not found` });
  }
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
