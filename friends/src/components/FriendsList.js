import React from 'react';
import {connect} from 'react-redux';

const FriendsList = props => {
    return (
        <div className="friends-list">
            <h1>Friends List</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default connect(mapStateToProps, {})(FriendsList);