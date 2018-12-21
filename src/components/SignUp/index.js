import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import '../../semantic-ui-css-master/semantic.min.css';

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);

// load form initial state
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpForm extends Component {
    // state pattern
    constructor(props) {
        super(propts);
        // set form initial state. spread operator either goes all the way up prop structure, or pulls everything from the object. 
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
    }
    
    onChange = event => {
        this.setState({ [ event.target.name]: event.target.value });
    };

    render(){
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full name"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />

                <button type="submit"> Sign Up</button>

                {error && <p> {error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}> Sign up </Link>
    </p>
);

export default SignUpPage

export { SignUpForm, SignUpLink };











// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import * as serviceWorker from './serviceWorker';
// import Firebase, { FirebaseContext } from './components/Firebase';
