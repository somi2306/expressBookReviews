const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

// Register a new user
public_users.post("/register", (req, res) => {
  // Implement user registration logic here
  return res.status(300).json({ message: "Yet to be implemented" });
});

// Get the book list available in the shop
public_users.get('/', function (req, res) {
  // Return the list of books as a JSON response
  return res.status(200).json(books);
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  // Implement logic to fetch book by ISBN here
  return res.status(300).json({ message: "Yet to be implemented" });
});

// Get book details based on author
public_users.get('/author/:author', function (req, res) {
  // Implement logic to fetch book by author here
  return res.status(300).json({ message: "Yet to be implemented" });
});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
  // Implement logic to fetch book by title here
  return res.status(300).json({ message: "Yet to be implemented" });
});

// Get book review
public_users.get('/review/:isbn', function (req, res) {
  // Implement logic to fetch book review by ISBN here
  return res.status(300).json({ message: "Yet to be implemented" });
});

module.exports.general = public_users;
