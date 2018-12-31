/*global firebase*/

import React, { Component } from 'react';
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
// import React from 'react';





const Navigation = (authUser) => {
    // state = {}
    // handleItemClick = (e, { name }) => this.setstate({ activeItem: name })
    // const { activeItem } = this.state

    return (
        <div>
            {authUser ? <NavigationAuth /> : <NavigationNonAuth />} 
        </div> 
    );
};


export class NavigationAuth extends Component {

    render() {
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
                <div className="right menu">
                    <a className="item">
                        <SignOutButton />
                    </a>
                </div>
            </div>
        )
    }
}

export class NavigationNonAuth extends Component {

    render() {
        const { activeItem } = this.state

        return (

            <div className="ui menu">
                <div className="header item">
                    RANDOM HOUSE APP
            </div>
                <a className="item">
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </a>
                <div className="right menu">
                    <a className="item">
                        <Link to={ROUTES.SIGN_IN}>Sign In</Link> / <Link to={ROUTES.SIGN_UP}>Register</Link>
                    </a>
                </div>
            </div>
        )
    }
}




export { Navigation }
