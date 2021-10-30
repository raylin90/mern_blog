import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import queryString from "query-string";
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

const Chat = props => {


    // connection to backend server
    const [socket] = useState(()=> io(":8000"));
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [users, setUsers] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    console.log(message, " AND ", messages)

    
    useEffect(() => {
        // set the name and room we got from join page
        console.log(props.name)
        console.log(props.room)

        setTimeout(function(){ alert("Hello"); }, 3000);
        
        if(name || room) {
            console.log("we have it")
        } else {
            console.log("NO HAVE IT")
        }
        socket.emit("join", name)
        // socket.emit("join", (error) => {
        //     if(error) {
        //         alert(error);
        //     }
        // })
        
        // return() => {
        //     socket.emit("userLeft");
        //     socket.off();
        // }
    }, [socket])

    useEffect(() => {
        socket.on("message", (message) => {
            console.log(message)
            setMessages([...messages, message]);
            // setMessages(prevMsgs => {return [...prevMsgs, message]});
        })
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, [messages, users])

    const sendMessage = e => {
        e.preventDefault();
        if(message) {
            socket.emit("sendMessage", message)
        }
    }

    return(
        <div className="outerContainer">
            <div className="container">
                <h1>This is my Chat Page</h1>
                <TextContainer users={users}/>
                <Messages messages={messages} name={name}/>
                <InfoBar room={room}/>
                <Input setMessage={setMessage} sendMessage={sendMessage} message={message}/>
            </div>
        </div>
    );
}

export default Chat;





// const ChatBox = props => {


//     // state to keep track of user input
//     const [input, setInput] = useState("")
//     // array to hold the messages so we can display at fontend
//     const [messages, setMessages] = useState([])

//     useEffect(() => {
//         socket.on("send chat", inputMsg => {
//             // console.log(inputMsg);
//             // push into message array
//             setMessages(prevMsgs => {return [...prevMsgs, inputMsg]});
//         })
//         // unmount other component to prevent memory leak
//         return () => socket.disconnect(true);
//     }, [socket])

//     const submitHandler = e => {
//         e.preventDefault();
//         // emit the message to everyone, which is stored at input
//         socket.emit("chat", input)
//     }

//     const changeHandler = e => {
//         setInput(e.target.value)
//     }

//     return(
//         <>
//         {props.user}
//         <h1>This is my ChatBox Page</h1>
//         <form onSubmit={ submitHandler }>
//             <input type="text" name="msg" autoComplete="on" value={ input } onChange={ changeHandler }/>
//             <input type="submit" value="Submit" />
//         </form>
//         <hr />
//         {
//             messages.map((msg, i) => {
//                 return <p key={i}>{msg}</p>
//             })
//         }
//         </>
//     );
// }

// export default ChatBox;