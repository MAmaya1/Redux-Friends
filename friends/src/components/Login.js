import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import {login} from '../actions';

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
            <div className="login">
                <h1>Login</h1>
                <form>
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
                    {this.props.error && (
                        <p>{this.props.error}</p>
                    )}
                    <button onClick={this.login}>
                        {this.props.loggingIn ? (
                            <Loader type="ThreeDots" color="#somecolor" height={20} width={20} />
                        ) : (
                            'Log in'
                        )}
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggingIn: state.loggingIn,
        error: state.error
    }
}

export default connect(mapStateToProps, {login})(Login);