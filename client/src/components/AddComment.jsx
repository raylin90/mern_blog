import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import axios from 'axios';

const AddComment = props => {

    const [comment, setComment] = useState({})
    const [error, setError] = useState("")

    const submitHandler = e => {
        axios.put(`http://localhost:8000/api/comments/update/${props.blogId}`, comment)
            .then(res => {
                if(res.data.error) {
                    setError(res.data.error.errors.comments.errors.text.message)
                } else {
                    props.setRefreshPage(!props.refreshPage)
                }
            })
            .catch(err => console.log(err))
    }
    const changeHandler = e => {
        setComment({...comment, [e.target.name] : e.target.value})
    }

    return(
        <Box sx={{marginTop: "50px",width: "95%", padding: "10px",}}>
            <form>
                <FormControl >
                    <InputLabel htmlFor="name">Name <small>-optional</small></InputLabel>
                    <Input sx={{ m: 1, width: "150%" }} name="name" onChange={ changeHandler } />
                </FormControl>
                <br />
                <FormControl >
                    <InputLabel htmlFor="email">Email <small>-optional</small></InputLabel>
                    <Input sx={{ m: 1, width: "150%" }} name="email" onChange={ changeHandler } />
                </FormControl>
                <br />
                <FormControl >
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={2}
                        name="text"
                        placeholder="leave a comment"
                        style={{ width: 275, padding: "10px", fontFamily: "Roboto", color: "#373737", backgroundColor: "#efefef" }}
                        onChange={ changeHandler } />
                    {
                        error ? <FormHelperText sx={{ color: "#f44336" }}>{error}</FormHelperText> : ""
                    }
                </FormControl>
                
                <br /><br />
                <Button variant="contained" onClick={ submitHandler } size="small">Add</Button>
            </form>
        </Box>
    );
}

export default AddComment;