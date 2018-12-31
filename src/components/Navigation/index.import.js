/*global firebase*/

import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { Menu } from 'semantic-ui-react';


// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import * as ROUTES from '../../constants/routes';
// import SignOutButton from '../SignOut';
// import { withFirebase } from '../Firebase';
// import { FirebaseContext } from '../Firebase';
// import { Menu } from 'semantic-ui-react';
// import AuthUserContext from './context';


const Navigation = ({ authUser }) => (
    <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
    <Menu>
        <Link to={ROUTES.LANDING}>
            <Menu.Item
                name="Landing"
                onclick={this.handleItemClick}
            >
                Landing
            </Menu.Item>
        </Link>
    </Menu>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

export default Navigation;
