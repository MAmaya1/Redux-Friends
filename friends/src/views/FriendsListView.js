import React from 'react';
import {connect} from 'react-redux';

import FriendsList from '../components/FriendsList';

import {getFriends} from '../actions';

import styled from 'styled-components';

// Styled Components

const StyledView = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
`

// FriendsList View

class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <StyledView>
                <h1>Friends List</h1>
                {this.props.fetchingFriends && (
                    <p>Loading...</p>
                )}
                {this.props.friends && (
                    <FriendsList friends={this.props.friends}/>
                )}
                {this.props.loadError && (
                    <p>Cannot load friends :(</p>
                )}
            </StyledView>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        fetchingFriends: state.fetchingFriends,
        loadError: state.loadError
    }
}

export default connect(mapStateToProps, {getFriends})(FriendsListView);