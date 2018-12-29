import React from 'react';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <div className="item">
        <div className="ui button" onClick={firebase.doSignOut}>
            Sign out
        </div>
    </div>
);

export default withFirebase(SignOutButton);
