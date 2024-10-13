// Import the Card component from the react-bootstrap library for UI styling
import Card from 'react-bootstrap/Card';

// Define the MovieItem component, which receives props as an argument
const MovieItem = (props) => {
    // Render a Card component to display movie details
    // The Card component is styled using inline styles with a fixed width
    return (
        <Card style={{ width: '18rem' }}>
            {/* Display the movie's poster image using the Card.Img component */}
            {/* Access the movie poster from props.myMovies.Poster */}
            <Card.Img variant="top" src={props.myMovies.Poster} />
            
            <Card.Body>
                {/* Display the movie title using the Card.Title component */}
                <Card.Title>{props.myMovies.Title}</Card.Title>
                
                {/* Display the movie's release year using the Card.Text component */}
                <Card.Text>
                    {props.myMovies.Year}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

// Export the MovieItem component to be used in other parts of the application
export default MovieItem;