import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = props => (
    <nav className={classes.NavigationItems}>
        <ul>
            <NavigationItem link="/" active>The Burger Builder</NavigationItem>
            <NavigationItem link="/">Check out</NavigationItem>
        </ul>
    </nav>
);
export default navigationItems;