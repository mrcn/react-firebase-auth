/*global firebase*/

import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { withFirebase } from '../Firebase';
import { FirebaseContext } from '../Firebase';
import { Menu } from 'semantic-ui-react';

export default class Navigation extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setstate({ activeItem: name })

    render () {

        const { activeItem } = this.state

        return (

        <div className="ui menu">
            <div className="header item">
                RANDOM HOUSE APP
            </div>
            <a className="item">
                <Link to={ROUTES.LANDING}>Landing</Link>
            </a>
            <a className="item">
                <Link to={ROUTES.HOME}>Home</Link>
            </a>
            <a className="item">
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </a>
            <a className="item">
                <Link to={ROUTES.ADMIN}>Admin</Link>
            </a>
            <div className="right menu">
                <a className="item">
                    <Link to={ROUTES.SIGN_IN}>Sign In</Link> / <Link to={ROUTES.SIGN_UP}>Register</Link>
                </a>
                <a className="item">
                    <SignOutButton />
                </a>
            </div>
        </div>
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
