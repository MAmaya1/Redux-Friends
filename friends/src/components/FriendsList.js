import React from 'react';

import Friend from './Friend';

const FriendsList = props => {
    return (
        <>
            {props.friends.map(friend => (
                <Friend 
                    key={friend.id}
                    name={friend.name}
                    age={friend.age}
                    email={friend.email}
                />
            ))}
        </>
    )
}

export default FriendsList;