import React from 'react';

import burgerLogo from '../../assets/images/the-burger-builder-logo.png';
import classes from './Logo.css';

const logo = props => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="The Burger Builder" />
    </div>
)

export default logo;