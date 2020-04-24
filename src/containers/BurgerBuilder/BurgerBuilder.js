import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    purchaseContinueHandler = () => {
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Marcio Barboza',
                address: {
                    street: '5-9 Bellevue Street, Kogarah',
                    postcode: '2217',
                    country: 'Australia'
                },
                email: 'marciocleberbrazil@gmail.com'
            },
            deliveryMethod: 'AUSPOST'
        };

        this.setState({
            loading:true
        });

        axios.post('orders.json', order)
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .then(() => {
                this.setState({
                    loading:false,
                    purchasing: false
                });
            });
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }
    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((sum, el) => { return sum + el}, 0);

        this.setState({ purchaseable: sum > 0 });
    }

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });

        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];

        if(oldCount <= 0) return;

        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });

        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        const disabledInfo = {...this.state.ingredients};

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = this.state.loading ?
            <Spinner/> :
            <OrderSummary
                ingredients={this.state.ingredients}
                purchaseContinue={this.purchaseContinueHandler}
                purcheseCancelling={this.purchaseCancelHandler}
                price={this.state.totalPrice}/>;

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClose={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>

                <Burger ingredients={this.state.ingredients} />
                
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);