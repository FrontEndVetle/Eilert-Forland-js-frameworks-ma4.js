import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import RecipeItem from "./RecipeItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "./SearchRecipe";





function RecipeList() {

    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);




    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
         .then(json => {
            setRecipes(json.results);
            setFilteredRecipes(json.results);
    })
            .catch(error => console.log(error));
    }, []);


const filterCards = function(e) {
  const searchValue = e.target.value.toLowerCase();

    const filteredArray = recipes.filter(function(char) {
        const lowerCaseName = char.title.toLowerCase();
        if (lowerCaseName.startsWith(searchValue)) {
            return true;
        }
        return false;
    });
    setFilteredRecipes(filteredArray);
};

  return (
    <Row>
        <Search handleSearch={filterCards} />

                {filteredRecipes.map(recipe => {
            const { title, thumbnail, ingredients } = recipe;

            return (
                <Col sm={6} md={2} key={title}>
                    <RecipeItem title={title} thumbnail={thumbnail} ingredients={ingredients}/>
                </Col>
            );
        })}
    </Row>
);
}

export default RecipeList;