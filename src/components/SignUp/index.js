import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import '../../semantic-ui-css-master/semantic.min.css';
import Firebase from '../Firebase';


// class SignUpPage extends React {
//     render () {
//         return (
//             <div>
//                 <h1>SignUp</h1>
//                 <Firebase.Consumer>
//                     {firebase => <SignUpForm firebase={firebase} />}
//                 </Firebase.Consumer>
//             </div>        
//         )
//     }
// }

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <Firebase.Consumer>
            {firebase => <SignUpForm firebase={firebase}/>}
        </Firebase.Consumer>
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
        super(props);
        // set form initial state. spread operator either goes all the way up prop structure, or pulls everything from the object. 
        this.state = { ...INITIAL_STATE };
    };

    //to do 
    onSubmit = event => {
        // const { username, email, passwordOne } = this.state;
        const { email, passwordOne } = this.state;

        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
            this.setState({ ...INITIAL_STATE });
        });
        
        event.preventDefault();
    };
    
    onChange = event => {
        this.setState({ [ event.target.name]: event.target.value });
    };

    render(){
        // this.state is loaded with an object.
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        // simple form acceptance criteria
        const isInvalid = 
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';

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

                <button disabled={isInvalid} type="submit">
                    Sign Up
                </button>

                {error && <p> {error.message}</p>}
            </form>
        );
    }
}

class SignUpLink extends Component {
    redner(){
        return (
            <p>
                Dont have an account?
            </p>
        )
    }
}
// const SignUpLink = () => (
//     <p>
//         Don't have an account? <Link to={ROUTES.SIGN_UP}> Sign up </Link>
//     </p>
// );

export default SignUpPage

export { SignUpForm, SignUpLink };











// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import * as serviceWorker from './serviceWorker';
// import Firebase, { FirebaseContext } from './components/Firebase';
