import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    openSideDrawerHandler = () => {
        this.setState({showSideDrawer: true});
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    render() {
        return (
            <Aux>
                <Toolbar
                    openSideDrawer={this.openSideDrawerHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;