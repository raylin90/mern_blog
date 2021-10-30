import React, { useState } from 'react';
import Chat from '../Chat/Chat';

const Input = ({ setMessage, sendMessage, message}) => {

    return(
        <>
        <h1>This is my Input Page</h1>

        <form onSubmit={sendMessage}>
        <input type="text" name="msg" onChange={e=>setMessage(e.target.value)} value={message}/>
        <input type="submit" value="send" />
        </form>

        <Chat/>
        </>
    );
}

export default Input;