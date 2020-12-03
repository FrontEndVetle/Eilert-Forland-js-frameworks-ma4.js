import React, { useState, useEffect } from "react";

function RecipeList() {
useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/")
        .then(response => response.json())
        .then(json => console.dir(json))
        .catch(error => console.log(error));
}, []);

   return null;
}

export default RecipeList;