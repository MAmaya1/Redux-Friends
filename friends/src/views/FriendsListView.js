import React from 'react';
import {connect} from 'react-redux';

import FriendsList from '../components/FriendsList';

import {getFriends} from '../actions';

class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div className="friends-list-view">
                <h1>Friends List</h1>
                {this.props.fetchingFriends && (
                    <p>Loading...</p>
                )}
                {this.props.friends && (
                    <FriendsList friends={this.props.friends}/>
                )}
                {this.props.error && (
                    alert(this.props.error)
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        fetchingFriends: state.fetchingFriends,
        error: state.error
    }
}

export default connect(mapStateToProps, {getFriends})(FriendsListView);