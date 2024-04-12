import React, { useState } from "react";

const Movie = ({ name, price, id }) => {
  return (
    <div>
      
      <h2>Id:{id},  Movie Name: {name}, Price: {price}</h2>
         
    </div>
  );
};

export default Movie;
