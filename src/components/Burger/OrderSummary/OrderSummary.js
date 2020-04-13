import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import classes from './OrderSummary.css';
import Button from '../../../UI/Button/Button';

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
    <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                btnType="Danger"
                clicked={props.purcheseCancelling}>CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;