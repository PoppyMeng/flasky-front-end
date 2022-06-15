import React from "react";

const Dog=({name, favoriteToy, chipNumber})=>{
    return (
        <li>
            <h1>Name:{name}</h1>
           
            <span>Favorite Toy:{favoriteToy} </span>
            <span>Chip number: {chipNumber}</span>
            <button>add tag</button>
        </li>
    ) 
}
export default Dog;