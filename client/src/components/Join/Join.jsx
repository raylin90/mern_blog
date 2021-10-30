import React, { useState } from 'react';
import { Link } from '@reach/router';
import Chat from '../Chat/Chat';

const Join = props => {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return(
        <>
        <h1>This is my Join Page</h1>

        <h3>Join</h3>
        {/* takes input from user their name and room, then redirect them to chat page  */}
        <input type="text" name="name" onChange={e => setName(e.target.value)} placeholder="name" />
        <input type="text" name="room" onChange={e => setRoom(e.target.value)} placeholder="room" />
        {/* either of fields are require, otherwise, it wont redirect */}
        <Link to={`/chat/${name}/${room}`} onClick={e => (!name || !room) ? e.preventDefault(): null}>Enter</Link>

        </>
    );
}

export default Join;