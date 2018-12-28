import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
// import SignOutButton from '../SignOut';

const Navigation = () => (
    <div className="ui menu">
        <div className="header item">
            <Link to={ROUTES.LANDING}>Landing</Link>
        </div>
        <div className="header item">
            <Link to={ROUTES.HOME}>Home</Link>
        </div>
        <div className="header item">
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </div>
        <div className="header item">
            <Link to={ROUTES.ADMIN}>Admin</Link>
        </div>
        <div className="header item">
            <Link to={ROUTES.SIGN_IN}>Sign In</Link> / <Link to={ROUTES.SIGN_UP}>Register</Link>
        </div>
        {/* <div className="header item">
            <SignOutButton />
        </div> */}
    </div>
);

export default Navigation;
