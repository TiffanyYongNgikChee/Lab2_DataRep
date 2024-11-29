// Import necessary modules
const express = require('express'); // Import Express for handling server requests
const app = express();              // Initialize Express app
const port = 4000;                  // Define port for server to listen on

const bodyParser = require('body-parser'); // Import body-parser for handling request data

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data from the request body
app.use(bodyParser.json());  // Parse JSON data from the request body

// Import and configure Mongoose for database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Admin:Admin@cluster0.uxdft.mongodb.net/DB11'); // Connect to MongoDB database

// Define schema for movies collection
const movieSchema = new mongoose.Schema({
  title: String, // Movie title
  year: String,  // Release year of the movie
  poster: String // URL of the movie poster
});

// Create a Mongoose model for interacting with the movies collection
const movieModel = mongoose.model('MyMovie', movieSchema);

// Enable CORS (Cross-Origin Resource Sharing) to allow requests from any origin
const cors = require('cors');
app.use(cors());

// Set custom headers to control allowed origins, methods, and headers for CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow specific HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Allow specific request headers
  next(); // Pass control to the next middleware
});

// Define GET endpoint for retrieving a list of all movies
app.get('/api/movies', async (req, res) => {
    const movies = await movieModel.find({}); // Fetch all movies from the database
    res.status(200).json({ movies }); // Respond with the list of movies in JSON format
});

// Define GET endpoint for retrieving details of a specific movie by ID
app.get('/api/movies/:id', async (req, res) => {
  const movie = await movieModel.findById(req.params.id); // Fetch movie details by ID
  res.json(movie); // Respond with the movie details in JSON format
});

// Define PUT endpoint for updating a movie by ID
app.put('/api/movies/:id', async (req, res) => {
  const movie = await movieModel.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update movie details
  res.send(movie); // Respond with the updated movie details
});

// Define POST endpoint for adding a new movie
app.post('/api/movies', async (req, res) => {
  console.log("Movies: " + req.body); // Log the received movie data
  
  const { title, year, poster } = req.body; // Extract movie data from the request body
  const newMovie = new movieModel({ title, year, poster }); // Create a new movie instance
  await newMovie.save(); // Save the new movie to the database

  res.status(201).json({ message: 'Movie created successfully', movie: newMovie }); // Respond with success message and new movie details
});

app.delete('/api/movies/:id', async (req, res) => {
  
  console.log('Deleting movie with ID:', req.params.id);
  const movie = await movieModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Movie deleted successfully", movie });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log server start message with URL
});


/* const movies = [
          {
            "Title": "Avengers: Infinity War (server)",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
          },
          {
            "Title": "Captain America: Civil War (server)",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
          },
          {
            "Title": "World War Z (server)",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
          }
        ]; 
        // Send movie data as JSON response
        res.json({movies})
        */