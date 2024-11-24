// Importing the useState hook from React for managing component state
import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Create functional component to handle editing an existing movie
const Edit = () => {

  // State variables for storing and managing movie details (title, year, poster)
  let { id } = useParams(); // Extracting movie ID from route parameters
  const [title, setTitle] = useState(''); // Movie title state
  const [year, setYear] = useState('');   // Movie year state
  const [poster, setPoster] = useState(''); // Movie poster URL state
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Fetching the current movie details when component mounts or id changes
  useEffect(() => {
    axios.get('http://localhost:4000/api/movies/' + id) // API call to get movie data by ID
        .then((response) => {
            setTitle(response.data.title); // Set movie title in state
            setYear(response.data.year);   // Set movie year in state
            setPoster(response.data.poster); // Set movie poster URL in state
        })
        .catch((error) => {
            console.log(error); // Log error if API call fails
        });
  }, [id]); // Dependency array ensures effect runs when id changes

  // Event handler for form submission to edit movie details
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`); // Debugging log for submitted data
    
    const movie = {
      title: title, // Updated title
      year: year,   // Updated year
      poster: poster // Updated poster URL
    };

    // API call to update movie details in the database
    axios.put('http://localhost:4000/api/movies/' + id, movie)
        .then((res) => {
            console.log(res.data); // Log response data
            navigate('/read'); // Navigate to 'read' page upon successful update
        });
  };

  return (
    <div>
      <h3>Edit Movie Details</h3>

      {/* Form for editing movie details */}
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
          <input type="submit" value="Edit Movie" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

// Export the Edit component to be used in other parts of the app
export default Edit;
