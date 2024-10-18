import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(title);
    console.log(year);
    console.log(poster);
  }

    return (
      <div>
        <h3>Hello from create component</h3>

        <form onSubmit={handleSubmit}>
          {/*Movie Title */}
          <div className="form-group">
            <label>Add Movie Title: </label>
            <input type="text"
              className="form-control"
              value={title}
              onChange={(e) => {setTitle(e.target.value)}} 
            />
          </div>
          {/*Movie Year */}
          <div className="form-group">
            <label>Add Movie Year: </label>
            <input type="text"
              className="form-control"
              value={year}
              onChange={(e) => {setYear(e.target.value)}} 
            />
          </div>
          {/*Movie Poster */}
          <div className="form-group">
            <label>Add Movie Poster: </label>
            <input type="text"
              className="form-control"
              value={poster}
              onChange={(e) => {setPoster(e.target.value)}} 
            />
          </div>

          <div>
            <input type="submit" value="Add Movie"></input>
          </div>

        </form>
      </div>
    );
  };
  
  export default Create;