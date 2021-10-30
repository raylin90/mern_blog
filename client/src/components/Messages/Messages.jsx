import React from 'react';

const Messages = ({ messages, name }) => {
    return(
        <>
        <h1>This is my Messagessssss Page</h1>
        {
            messages.map((msg, i) =>
                <div key={i}>
                    <p>{msg.text}</p>
                    <p>{msg.user.id}</p>
                </div>
            )
        }
        </>
    );
}

export default Messages;