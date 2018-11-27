import React, { Component } from 'react';
import {connect} from 'react-redux';

import './Login.css';
import { loginAction } from '../../actions';

const mapStateToProps = state =>({
    session: state.session
})

const mapDispatchToProps = dispatch =>({
    login: input => dispatch(loginAction(input))
})

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginInput:"",
            placeholder: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (event) => {
        const value = event.target.value;

        this.setState( () => ({
            loginInput: value
        }));
    }

    handleClick = () => {
        const value = this.state.loginInput;

        value === '' ? alert('Enter your login first') 
            : alert(`You've been logged in`);
    }

    

    render() {
        return (
            <div className="Login">
                <a className="Button" onClick={this.handleClick}>Sign in</a>
                or
                <a className="Button" onClick={this.handleClick}>Create an account!</a>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);