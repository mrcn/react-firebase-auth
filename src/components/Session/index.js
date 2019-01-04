import React from 'react';
import AuthUserContext from './context';
import withAuthentication from './withAuthentication';
// import { AuthUserContext } from '../Session';



const Session = () => (
    <div>
        <h1>Session</h1>
    </div>
);

export { AuthUserContext, withAuthentication };
export default Session;

