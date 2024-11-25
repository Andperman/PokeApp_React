import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      
      <ul>
      <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvI9U-ImGqO7fh6lVypwxZCbx0xSa-qLV_LA&s" 
            alt="Pokemon Logo" 
            className="logo" 
          />

        <li><Link to="/">Home</Link></li>
        <li><Link to="/new">Add New Pokémon</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


