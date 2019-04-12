import React from 'react';

import styled from 'styled-components';

// Styled Components

const FriendCard = styled.div`
    border: solid 1px lightgrey;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 3px lightgrey;
    margin: 20px 0;
    padding: 5px 20px;
    line-height: 0.5;

    strong {
        margin-right: 3px;
        font-weight: 600;
    }
`

// Friend Component

const Friend = props => {
    return (
        <FriendCard>
            <p><strong>Name:</strong> {props.name}</p>
            <p><strong>Age:</strong> {props.age}</p>
            <p><strong>Email:</strong> {props.email}</p>
        </FriendCard>
    )
}

export default Friend;