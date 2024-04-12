import React, { useState, useContext } from "react";
import { MovieContext } from './MovieContext';

const AddMovie = () => {
  const [movies, setMovie] = useContext(MovieContext);

  const [newName, setName] = useState("");
  const [newPrice, setPrice] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
    //alert(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    //e.preventDefault();
   
    // { name: "LEO", price: "300", id: "555" }
    
   setMovie((prevMovies) => [...prevMovies, { name: newName, price: newPrice, id: 555 }]);
  };
  
  return (
    <>
    {/* <form onSubmit={addMovie}> */}
      <h3>Add New Movie</h3>
      <input type="text" name="name" onChange={updateName} placeholder="Movie Name" />
      <input type="text" name="price" onChange={updatePrice} placeholder="Movie Price" />
      <button onClick={addMovie}>Add Movie</button>
    {/* </form> */}
    </>
  );
};

export default AddMovie;
