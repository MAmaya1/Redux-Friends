import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import {login} from '../actions';

import styled from 'styled-components';

// Styled Components

const StyledLogin = styled.div`
    margin-top: 200px;
    padding: 20px;
    background: white;
    border-radius: 10px;

    h1 {
        text-align: center;
        margin-bottom: 10px;
    }
`
const Form = styled.form`
    display: flex;;
    flex-direction: column;

    input {
        width: 50%;
        margin: 3px auto;
        padding: 7px;
        border-radius: 10px;

        @media (max-width: 500px) {
            width: 80%;
        }
    }

    button {
        width: 20%;
        height: 40px;
        margin: 20px auto;
        border-radius: 10px;

        @media (max-width: 500px) {
            width: 50%;
        }

        &:hover {
            background: white;
            transition: all 200ms ease;
        }
    }
`

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.8rem
    margin: 0 158px;
`

// Login Component Constructor

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    login = event => {
        event.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/protected');
            })
    }

    render() {
        return (
            <StyledLogin>
                <h1>Login</h1>
                <Form>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    {this.props.loginError && (
                        <ErrorMessage>{this.props.loginError}</ErrorMessage>
                    )}
                    <button onClick={this.login}>
                        {this.props.loggingIn ? (
                            <Loader type="ThreeDots" color="#somecolor" height={20} width={20} />
                        ) : (
                            'Log in'
                        )}
                    </button>
                </Form>
            </StyledLogin>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggingIn: state.loggingIn,
        loginError: state.loginError
    }
}

export default connect(mapStateToProps, {login})(Login);