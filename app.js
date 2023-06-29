const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/mylibrary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define the book schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  genres: [String],
  ratings: [{
    user: String,
    rating: Number,
  }],
});

// Create the book model
const Book = mongoose.model('Book', bookSchema);

// Function to add a book
async function addBook(book) {
  try {
    const newBook = new Book(book);
    await newBook.save();
    console.log('Book added successfully:', newBook);
  } catch (error) {
    console.error('Error adding book:', error);
  }
}

// Function to get books by genre
async function getBooksByGenre(genre) {
  try {
    const books = await Book.find({ genres: genre }, 'title');
    const bookTitles = books.map((book) => book.title);
    console.log(`Books in the ${genre} genre:`, bookTitles);
  } catch (error) {
    console.error('Error getting books by genre:', error);
  }
}

// Function to get average rating for a book
async function getAverageRating(title) {
  try {
    const book = await Book.findOne({ title });
    if (!book) {
      console.log('Book not found');
      return;
    }

    const ratings = book.ratings.map((rating) => rating.rating);
    const averageRating = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
    console.log(`Average rating for ${title}: ${averageRating}`);
  } catch (error) {
    console.error('Error getting average rating:', error);
  }
}

// Usage example

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mylibrary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sample book objects
const sampleBooks = [
  {
    title: 'Book 1',
    author: 'Author 1',
    year: 2020,
    genres: ['Fiction', 'Mystery'],
    ratings: [
      { user: 'User 1', rating: 4 },
      { user: 'User 2', rating: 5 },
    ],
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    year: 2018,
    genres: ['Fiction', 'Sci-Fi'],
    ratings: [
      { user: 'User 1', rating: 5 },
      { user: 'User 2', rating: 3 },
    ],
  },
  // Add more sample books here
];

// Add sample books
sampleBooks.forEach((book) => addBook(book));

// Get books by genre
getBooksByGenre('Fiction');

// Get average rating for a book
getAverageRating('Book 1');
