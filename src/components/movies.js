import MovieItem from "./movieitem";

const Movies = (props)=>{
    return props.myMovies.map(
        ()=>{
            return <MovieItem/>
        }
    )
}
export default Movies;