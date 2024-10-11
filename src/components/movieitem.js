import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

const MovieItem = (props)=>{

   
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.myMovies.Poster} />
            <Card.Body>
                <Card.Title>{props.myMovies.Title}</Card.Title>
                <Card.Text>
                {props.myMovies.Year}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default MovieItem;