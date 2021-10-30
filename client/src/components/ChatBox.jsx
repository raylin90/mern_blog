import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';

const ChatBox = props => {

    // connection to backend server
    const [socket] = useState(()=> io(":8000"));
    // state to keep track of user input
    const [input, setInput] = useState({
        name: props.user,
        txt: "",
    })
    // array to hold the messages so we can display at fontend
    const [messages, setMessages] = useState([])
    console.log(input)
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
        // emit the message to everyone, which is stored at input
        input.txt ? socket.emit("chat", input): e.preventDefault();
        setInput({
            name: props.user,
            txt: "",
        })
    }

    const changeHandler = e => {
        setInput({...input, [e.target.name] : e.target.value})
    }

    return(
        <>
        <Paper elevation={3} sx={{height: "80vh", overflow: "scroll", padding: "20px"}} >
        <form>
            <Input name="txt" autoComplete="off" onChange={changeHandler} sx={{width: "91vw"}} value={ input.txt } placeholder="enter your msg here"/>
            <Button variant="contained" onClick={ submitHandler }>Send</Button>
        </form>
        <br />
        {
            messages.map((msg, i) => 
                <div key={i}>
                <Typography variant="body1" sx={{border: "1px solid", borderRadius: "15px", display: "inline-block", paddingLeft: "8px", paddingRight: "8px", backgroundColor: "#efefef"}}>{msg.txt}</Typography>
                <br />
                <Typography color="primary" variant="caption">&nbsp;&nbsp;- {msg.name}</Typography>
                </div>
            )
        }
        </Paper>
        </>
    );
}

export default ChatBox;