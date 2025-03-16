const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;

const app = express();

// Middleware to parse incoming requests as JSON
app.use(express.json());

// Global session middleware for managing sessions
app.use(session({
    secret: "fingerprint_customer", // Secret key for signing the session ID cookie
    resave: true,
    saveUninitialized: true
}));

// Authorization middleware to protect routes requiring authentication
app.use("/customer/auth/*", function auth(req, res, next) {
    if (req.session.authorization) { 
        const token = req.session.authorization['accessToken']; // Retrieve the token from session
        jwt.verify(token, "access", (err, user) => { // Verify JWT
            if (!err) {
                req.user = user; // Store user in the request object
                next(); // Proceed to the next middleware/route handler
            } else {
                return res.status(403).json({ message: "User not authenticated" }); // Token verification failed
            }
        });
    } else {
        return res.status(403).json({ message: "User not logged in" }); // No session found, user not logged in
    }
});

// Apply routes
app.use("/customer", customer_routes);  // Routes for customer
app.use("/", genl_routes);              // General routes accessible to all users

const PORT = 5000;

// Start the server
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
