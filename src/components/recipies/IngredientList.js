import React from 'react';
import PropTypes from 'prop-types';

function IngredientList({ ingredients }) {

	const ingredientsArray = ingredients.split(',');
	const listItems = ingredientsArray.map((ingredient, index) => {
			return <li key={index}>{ingredient}</li>
	})

	return (
		<>{listItems}</>
	);
}


IngredientList.propTypes = {
	ingredients: PropTypes.string.isRequired
};

export default IngredientList;


