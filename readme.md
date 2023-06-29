Hi Team skillGigs,

This project is covering following requirements: 
Define a Mongoose schema for a "book" document with the following fields:
• title (string): the title of the book.
• author (string): the author of the book.
• year (number): the publication year of the book.
• genres (array of strings): an array containing the genres of the book.
• ratings (array of objects): an array containing objects with the following fields:
• user (string): the name of the user who provided the rating.
• rating (number): the rating given by the user (between 1 and 5).
Create a Mongoose model based on the defined schema.
Implement a function named addBook that accepts a book object as a parameter and inserts it into the "books" collection using the Mongoose model.
Implement a function named getBooksByGenre that accepts a genre name as a parameter and returns an array of book titles belonging to that genre. The function should query the "books" collection and use the genre name to filter the results.
Implement a function named getAverageRating that accepts a book title as a parameter and calculates the average rating for that book. The function should query the "books" collection and use the title to filter the results.
Test the addBook, getBooksByGenre, and getAverageRating functions by performing the following steps:
• Insert at least five sample book documents into the "books" collection using the addBook function.
• Call the getBooksByGenre function with a sample genre and log the returned book titles to the console.
• Call the getAverageRating function with a sample book title and log the average rating to the console.


To run this project in local: 

run: node app.js