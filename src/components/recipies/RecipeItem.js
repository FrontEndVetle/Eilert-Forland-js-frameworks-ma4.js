import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import IngredientList from './IngredientList';




function RecipeItem({ title, thumbnail, ingredients }) {
    return (
        <Card>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
				<Card.Text>INGREDIENTS:</Card.Text>
                        <IngredientList ingredients={ingredients}></IngredientList>
            </Card.Body>

        </Card>
    );
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
};

export default RecipeItem;