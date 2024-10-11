import MovieItem from "./movieitem";

const Movies = (props)=>{
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem myMovies={movie} key={movie.imdbID}/>
        }
    )
}
export default Movies;