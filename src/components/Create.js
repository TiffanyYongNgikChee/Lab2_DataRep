// Importing the useState hook from React for managing component state
import { useState } from "react";

// Create functional component to handle adding a new movie
const Create = () => {
  // State variables for storing movie details (title, year, poster)
  const [title, setTitle] = useState(''); // Movie title state
  const [year, setYear] = useState('');   // Movie year state
  const [poster, setPoster] = useState(''); // Movie poster URL state

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Log the current values of the state variables to the console
    console.log(title);
    console.log(year);
    console.log(poster);
  }

  return (
    <div>
      <h3>Hello from create component</h3>

      {/* Form for adding a new movie */}
      <form onSubmit={handleSubmit}>
        {/* Movie Title Input Field */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input 
            type="text"
            className="form-control"
            value={title} // Bind input value to title state
            onChange={(e) => { setTitle(e.target.value) }} // Update title state on input change
          />
        </div>
        
        {/* Movie Year Input Field */}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input 
            type="text"
            className="form-control"
            value={year} // Bind input value to year state
            onChange={(e) => { setYear(e.target.value) }} // Update year state on input change
          />
        </div>
        
        {/* Movie Poster Input Field */}
        <div className="form-group">
          <label>Add Movie Poster: </label>
          <input 
            type="text"
            className="form-control"
            value={poster} // Bind input value to poster state
            onChange={(e) => { setPoster(e.target.value) }} // Update poster state on input change
          />
        </div>

        {/* Submit Button for the form */}
        <div>
          <input type="submit" value="Add Movie" />
        </div>
      </form>
    </div>
  );
};

// Export the Create component to be used in other parts of the app
export default Create;