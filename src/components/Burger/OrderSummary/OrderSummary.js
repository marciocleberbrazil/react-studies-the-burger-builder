import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './OrderSummary.css';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // this could be a functional component, doesn't need to be a class based component
    render() {
        const ingredienteSummary = Object.keys(this.props.ingredients)
            .map(igKey => <li key={igKey}><span className={classes.ItemTitle}>{igKey}</span>: {this.props.ingredients[igKey]}</li>);

        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredientes:</p>
                <ul>
                    {ingredienteSummary}
                </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button
                    btnType="Danger"
                    clicked={this.props.purcheseCancelling}>CANCEL</Button>
                <Button
                    btnType="Success"
                    clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;