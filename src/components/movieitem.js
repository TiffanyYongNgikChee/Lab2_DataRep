const MovieItem = (props)=>{
    return(
        <div>
            <h3>{props.myMovies.Title}</h3>
            <p>{props.myMovies.Year}</p>
            <img src={props.myMovies.Poster}></img>
        </div>
    );
}
export default MovieItem;