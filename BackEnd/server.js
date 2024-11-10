// Import necessary modules
const express = require('express'); // Import Express for handling server requests
const app = express();              // Initialize Express app
const port = 4000;                  // Define port for server to listen on

const bodyParser = require('body-parser'); // Import body-parser for handling request data

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(bodyParser.json());                         // Parse JSON data

// Enable CORS to allow requests from any origin
const cors = require('cors');
app.use(cors());

// Set custom headers to control allowed origins, methods, and headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow any origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow specific HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Allow specific headers
  next(); // Move to the next middleware
});

// Define GET endpoint for retrieving a list of movies
app.get('/api/movies', (req, res) => {
    // Sample movie data array
    const movies = [
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
    res.json({movies});
});

// Define POST endpoint for receiving new movie data
app.post('/api/movies', (req, res) => {
  console.log("Movies: " + req.body); // Log the received movie data
  res.send("movie received");         // Send confirmation response
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
