import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    }
    render() {
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;