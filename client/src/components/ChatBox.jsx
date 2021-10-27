import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatBox = props => {

    // connection to backend server
    const [socket] = useState(()=> io(":8000"));
    // state to keep track of user input
    const [input, setInput] = useState("")
    // array to hold the messages so we can display at fontend
    const [messages, setMessages] = useState([])

    useEffect(() => {
        socket.on("send chat", inputMsg => {
            // console.log(inputMsg);
            // push into message array
            setMessages(prevMsgs => {return [...prevMsgs, inputMsg]});
        })
        // unmount other component to prevent memory leak
        return () => socket.disconnect(true);
    }, [socket])

    const submitHandler = e => {
        e.preventDefault();
        // emit the message to everyone, which is stored at input
        socket.emit("chat", input)
    }

    const changeHandler = e => {
        setInput(e.target.value)
    }

    return(
        <>
        <h1>This is my ChatBox Page</h1>
        <form onSubmit={ submitHandler }>
            <input type="text" name="msg" autoComplete="on" value={ input } onChange={ changeHandler }/>
            <input type="submit" value="Submit" />
        </form>
        <hr />
        {
            messages.map((msg, i) => {
                return <p key={i}>{msg}</p>
            })
        }
        </>
    );
}

export default ChatBox;