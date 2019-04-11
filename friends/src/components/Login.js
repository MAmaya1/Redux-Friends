import React from 'react';
import {connect} from 'react-redux';

class Login extends React.Component {
    state = {

    }

    render() {
        return (
            <h1>Login</h1>
        )
    }
}

export default connect(null, {})(Login);