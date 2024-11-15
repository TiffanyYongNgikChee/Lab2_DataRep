// Import the Card component from the react-bootstrap library for UI styling
import Card from 'react-bootstrap/Card';

// Define the MovieItem component, which receives props as an argument
const MovieItem = (props) => {
    // Render a Card component to display movie details
    // The Card component is styled using inline styles with a fixed width
    return (
        <div>
          <Card>
            <Card.Header>{props.mymovie.title}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <img src={props.mymovie.poster} alt={props.mymovie.Title} />
                <footer>{props.mymovie.year}</footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      );
}

// Export the MovieItem component to be used in other parts of the application
export default MovieItem;