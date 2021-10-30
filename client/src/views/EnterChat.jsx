import { navigate } from '@reach/router';
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const EnterChat = props => {

    const [user, setUser] = useState()
    const submitHandler = e => {
        navigate(`/chatroom/${user}`)
    }

    return(
        <> 
        <Paper elevation={3} sx={{height: "95vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <form>
                <FormControl sx={{ m: 1.5, width: "60vw" }} >
                    <Input name="userForChat" placeholder="Enter a name for chatbox" onChange={e=>setUser(e.target.value)}/>
                </FormControl>
                <br />
                <Button variant="contained" color="success" fullWidth onClick={ submitHandler }>Enter</Button>
            </form>
        </Paper>
        </>
    );
}

export default EnterChat;