// Importing the useState hook from React for managing component state
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Create functional component to handle adding a new movie
const Edit = () => {

  // State variables for storing movie details (title, year, poster)
  const id = useParams();
  const [title, setTitle] = useState(''); // Movie title state
  const [year, setYear] = useState('');   // Movie year state
  const [poster, setPoster] = useState(''); // Movie poster URL state
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:4000/api/movies/' + id)
        .then((response) => {
            setTitle(response.data.title);
            setYear(response.data.year);
            setPoster(response.data.poster);
        })
        .catch((error) => {
            console.log(error);
        });
  },[id]);

  // create.js
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
    
    const movie = {
      title: title,
      year: year,
      poster: poster
    };

    axios.put('http://localhost:4000/api/movies/'+id, movie)
        .then((res) => {
            console.log(res.data);
            navigate('/read');
        });
    
    //axios.post('http://localhost:4000/api/movies', movie)
    //  .then((res) => console.log(res.data))
    //  .catch((err) => console.log(err.data));
  };

  return (
    <div>
      <h3>Hello from create component</h3>

      {/* Form for adding a new movie */}
      <form onSubmit={handleSubmit}>
        {/* Movie Title Input Field */}
        <div className="form-group">
          <label>Edit Movie Title: </label>
          <input 
            type="text"
            className="form-control"
            value={title} // Bind input value to title state
            onChange={(e) => { setTitle(e.target.value) }} // Update title state on input change
          />
        </div>
        
        {/* Movie Year Input Field */}
        <div className="form-group">
          <label>Edit Movie Year: </label>
          <input 
            type="text"
            className="form-control"
            value={year} // Bind input value to year state
            onChange={(e) => { setYear(e.target.value) }} // Update year state on input change
          />
        </div>
        
        {/* Movie Poster Input Field */}
        <div className="form-group">
          <label>Edit Movie Poster: </label>
          <input 
            type="text"
            className="form-control"
            value={poster} // Bind input value to poster state
            onChange={(e) => { setPoster(e.target.value) }} // Update poster state on input change
          />
        </div>

        {/* Submit Button for the form */}
        <div>
          <input type="submit" value="Edit Movie" />
        </div>
      </form>
    </div>
  );
};

// Export the Create component to be used in other parts of the app
export default Edit;