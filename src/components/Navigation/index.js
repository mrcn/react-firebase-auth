/*global firebase*/

import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { withFirebase } from '../Firebase';
import { FirebaseContext } from '../Firebase';
import { Menu } from 'semantic-ui-react';

export default class Navigation extends Component {
    state = { activeItem: null }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render () {
        const { activeItem } = this.state

        return (

            <Menu borderless>
                <Menu.Item
                    name='Landing'
                    active={activeItem === 'Landing'}
                    onClick={this.handleItemClick}
                >
                <Link to={ROUTES.LANDING}>Landing</Link>
                </Menu.Item>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'Home'}
                    onClick={this.handleItemClick}
                >
                <Link to={ROUTES.HOME}>Home</Link>
                </Menu.Item>
                <Menu.Item
                    name='Account'
                    active={activeItem === 'Account'}
                    onClick={this.handleItemClick}
                >
                <Link to={ROUTES.ACCOUNT}>Account</Link>
                </Menu.Item>
                <Menu.Item
                    name='Admin'
                    active={activeItem === 'Admin'}
                    onClick={this.handleItemClick}
                >
                <Link to={ROUTES.HOME}>Admin</Link>
                </Menu.Item>
                <Menu.Item
                    name='SignIn'
                    active={activeItem === 'SignIn'}
                    onClick={this.handleItemClick}
                    position="right"
                >
                <Link to={ROUTES.SIGN_IN}>Sign In</Link> / 
                <Link to={ROUTES.SIGN_UP}>Register</Link>
                </Menu.Item>
                <Menu.Item
                    name='SignOut'
                    active={activeItem === 'SignOut'}
                    onClick={this.handleItemClick}
                >
                <SignOutButton />
                </Menu.Item>

            </Menu>
        )
    }
}


const MenuSwitcher = () => (

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            console.log(user)
        } else {
            // No user is signed in.
        }
    })
);
    

export { Navigation }
