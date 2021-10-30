import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {


    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();
    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return(
        <>
        <h1>This is my Message Page</h1>

        {
            isSentByCurrentUser ? <p>{text}</p> : <p style={{color: "red"}}>{text}</p>
        }
        </>
    );
}

export default Message;