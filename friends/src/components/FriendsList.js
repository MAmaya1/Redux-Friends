import React from 'react';

import Friend from './Friend';

const FriendsList = props => {
    return (
        <div className="friends-list">
            {props.friends.map(friend => (
                <Friend 
                    key={friend.id}
                    name={friend.name}
                    age={friend.age}
                    email={friend.email}
                />
            ))}
        </div>
    )
}

export default FriendsList;