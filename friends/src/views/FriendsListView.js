import React from 'react';
import {connect} from 'react-redux';

// import {getFriends} from '../actions';

class FriendsListView extends React.Component {

    render() {
        return (
            <div className="friends-list">
                <h1>Friends List View</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default connect(mapStateToProps, {})(FriendsListView);