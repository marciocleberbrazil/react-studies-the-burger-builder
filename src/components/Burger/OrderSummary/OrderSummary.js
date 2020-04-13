import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import classes from './OrderSummary.css';

const orderSummary = props => {
    const ingredienteSummary = Object.keys(props.ingredients)
        .map(igKey => <li key={igKey}><span className={classes.ItemTitle}>{igKey}</span>: {props.ingredients[igKey]}</li>);

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredientes:</p>
            <ul>
                {ingredienteSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
}

export default orderSummary;