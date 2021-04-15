import React, { Component } from 'react';

import Auxilliary from "../../../hoc/Auxilliary";
import Button from "../../UI/Button/Button";


class OrderSummary extends Component {
    //This could be functional component instead of class
    componentDidUpdate() {
        console.log('[OrderSummary] will update')
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>);
        });
        return(
        <Auxilliary>
            <h3>Your Order</h3>
            <p>A delicious burger with these ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)} </strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Auxilliary>
        );
    }
};

export default OrderSummary;