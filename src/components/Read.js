// Importing the useEffect and useState hooks from React
import { useEffect, useState } from "react";
// Importing axios for making HTTP requests
import axios from "axios";
// Importing the Movies component to display the list of movies
import Movies from "./movies";

// Define the Read functional component
const Read = () => {
  // State variable for storing the movies data
  const [movies, setMovies] = useState([]);
  const [data, setData] = useState([]);

// Function to reload movie data from the server
const Reload = () => {

  // Log a message indicating the data reload process
  console.log("Reloading movie data...");

  // Make a GET request to the server to fetch all movies
  axios.get('http://localhost:4000/api/movies')
      .then((response) => {
          // On success, update the state with the fetched movie data
          setMovies(response.data.movies);
      })
      .catch((error) => {
          // Log any errors that occur during the data fetch
          console.error("Error reloading data:", error);
      });
};


  // useEffect hook to perform a side effect (fetching data) when the component mounts
  useEffect(
    () => {
      Reload();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      <h3>Hello from Read component</h3>
      {/* Render the Movies component, passing the movies state as a prop */}
      <Movies myMovies={movies} ReloadData={Reload} />
    </div>
  );
};

// Export the Read component to be used in other parts of the app
export default Read;