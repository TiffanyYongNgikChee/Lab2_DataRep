// Import the MovieItem component from the movieitem file
import MovieItem from "./movieitem";

// Define the Movies component, which receives props as an argument
const Movies = (props) => {
    // Map over the myMovies array from props to render a list of MovieItem components
    return props.myMovies.map(
        (movie) => {
            // Render a MovieItem component for each movie in the array
            // Pass the movie object as a prop (myMovies)
            // Use the unique imdbID as the key to avoid the "missing key" warning
            return <MovieItem myMovies={movie} key={movie._id}/>
        }
    );
}

// Export the Movies component for use in other parts of the application
export default Movies;
