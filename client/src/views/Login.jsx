import React, { useState } from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import axios from 'axios';
import { navigate } from '@reach/router';

const Login = props => {

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState("")

    const changeHandler = e => {
        setLoginForm({...loginForm, [e.target.name] : e.target.value});
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/login", loginForm, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                if(res.data.message === "Invalid Login") {
                    setErrors(res.data.message)
                } else {
                    navigate("/")
                }
            })
            .catch(err => console.log("something went wrong when login an user", err))
    }

    return(
        <div style={{ padding: "20px", width: "500px"}}>
        <h1>This is my Login Route</h1>
        <form >
            <FormControl sx={{ m: 1.5, width: "500px" }} >
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input name="email" onChange={changeHandler} />
            </FormControl>
            <br />
            <FormControl sx={{ m: 1.5, width: "500px" }} >
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input type="password" name="password" onChange={changeHandler} />
            </FormControl>
            <br />
            <Button variant="contained" sx={{marginLeft: "10px"}} fullWidth onClick={ submitHandler }>Submit</Button>
            {
                errors ? <FormHelperText sx={{ color: "#f44336" }}>{errors}</FormHelperText> : ""
            }
        </form>

        </div>
    );
}

export default Login;