import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";



function RecipeItem({ title, thumbnail }) {
    return (
        <Card>
            <Card.Img variant="top" src={thumbnail} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    );
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
};

export default RecipeItem;