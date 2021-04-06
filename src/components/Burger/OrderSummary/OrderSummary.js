import React from 'react';

import Auxilliary from "../../../hoc/Auxilliary";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
        });
    return (
        <Auxilliary>
            <h3>Your Order</h3>
            <p>A delicious burger with these ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Auxilliary>
    )
};

export default orderSummary;