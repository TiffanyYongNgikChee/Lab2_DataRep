import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./movies";

const Read = () => {
    const [movies,setMovies] = useState([]);
      useEffect(
        ()=>{
          axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
          .then((response)=>{
            console.log(response.data);
            setMovies(response.data.movies);
          })
          .catch()
        }
      );
      return <div>
        <h3>Hello from Read component</h3>
        <Movies myMovies={movies}/>
        </div>;
  };
  
  export default Read;