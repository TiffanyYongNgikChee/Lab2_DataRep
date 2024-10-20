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

  // useEffect hook to perform a side effect (fetching data) when the component mounts
  useEffect(() => {
    // Using axios to make a GET request to fetch movie data from the given URL
    axios
      .get('https://jsonblob.com/api/jsonblob/1287718524221775872')
      .then((response) => {
        // Log the fetched data to the console for debugging
        console.log(response.data);
        // Update the state with the fetched movies data
        setMovies(response.data.movies);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error fetching movie data:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      <h3>Hello from Read component</h3>
      {/* Render the Movies component, passing the movies state as a prop */}
      <Movies myMovies={movies} />
    </div>
  );
};

// Export the Read component to be used in other parts of the app
export default Read;