import React, { useState } from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authCreators } from '../states/types'

const Login = props => {

    const errors = useSelector(state => state.errors)
    const dispatch = useDispatch()
    const { authLogin } = bindActionCreators(authCreators, dispatch)

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    })

    const changeHandler = e => {
        setLoginForm({...loginForm, [e.target.name] : e.target.value});
    }

    const submitHandler = e => {
        e.preventDefault();
        authLogin(loginForm);
    }

    return(
        <div style={{ padding: "20px", width: "500px", minHeight: "88vh"}}>
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
                <br /><br />
                {
                    errors.state ? <FormHelperText sx={{ color: "#f44336", marginLeft: "10px" }}>{errors.state}</FormHelperText> : ""
                }
            </form>
        </div>
    );
}

export default Login;