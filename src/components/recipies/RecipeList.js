import React, { useState, useEffect } from "react";
import RecipeItem from "./RecipeItem";



function RecipeList() {

    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/")
            .then(response => response.json())
            .then(json => setRecipes(json.results))
            .catch(error => console.log(error));
    }, []);

  return (
    <div>
        {recipes.map(recipe => {
            const {id, title, image } = recipe;

            return (
                <div sm={6} md={3} key={id}>
                    <RecipeItem id={id} name={title} image={image} />
                </div>
            );
        })}
    </div>
);
}

export default RecipeList;