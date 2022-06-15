import React from "react";
import Dog from "./Dogs";

export const DogList=({dogs})=>{
    return (
        <ul>
            <h3>Dog number:</h3>
            {dogs.map(dog=>{
            return <Dog name={dog.name}  favoriteToy={dog.favoriteToy} chipNumber={dog.chipNumber} />
            })}
            
        </ul>
    )
}
