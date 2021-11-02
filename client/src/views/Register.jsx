import React, { useState } from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authCreators } from '../states/types'
import Typography from '@mui/material/Typography';

const Register = props => {

    const errors = useSelector(state => state.errors)
    const dispatch = useDispatch()
    const { authRegister } = bindActionCreators(authCreators, dispatch)

    const [registerForm, setRegisterForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const changeHandler = e => {
        setRegisterForm({...registerForm, [e.target.name] : e.target.value});
    }

    const submitHandler = e => {
        e.preventDefault();
        authRegister(registerForm);
    }

    return(
        <div style={{ padding: "20px", width: "500px", minHeight: "88vh"}}>
            <Typography variant="h3">Register</Typography>
            <form >
                <FormControl sx={{ m: 1.5, width: "500px" }} >
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <Input name="firstName" onChange={changeHandler} />
                    {
                        errors.state ? errors.state.firstName ? <FormHelperText sx={{ color: "#f44336" }}>{errors.state.firstName.message}</FormHelperText>: "" : ""
                    }
                </FormControl>
                <br />
                <FormControl sx={{ m: 1.5, width: "500px" }} >
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <Input name="lastName" onChange={changeHandler} />
                    {
                        errors.state ? errors.state.lastName ? <FormHelperText sx={{ color: "#f44336" }}>{errors.state.lastName.message}</FormHelperText>: "" : ""
                    }
                </FormControl>
                <br />
                <FormControl sx={{ m: 1.5, width: "500px" }} >
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input name="email" onChange={changeHandler} />
                    {
                        errors.state ? errors.state.email ? <FormHelperText sx={{ color: "#f44336" }}>{errors.state.email.message}</FormHelperText>: "" : ""
                    }
                </FormControl>
                <br />
                <FormControl sx={{ m: 1.5, width: "500px" }} >
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input type="password" name="password" onChange={changeHandler} />
                    {
                        errors.state ? errors.state.password ? <FormHelperText sx={{ color: "#f44336" }}>{errors.state.password.message}</FormHelperText>: "" : ""
                    }
                </FormControl>
                <br />
                <FormControl sx={{ m: 1.5, width: "500px" }} >
                    <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                    <Input type="password" name="confirmPassword" onChange={changeHandler} />
                    {
                        errors.state ? errors.state.confirmPassword ? <FormHelperText sx={{ color: "#f44336" }}>{errors.state.confirmPassword.message}</FormHelperText>: "" : ""
                    }
                </FormControl>
                <br />
                <Button variant="contained" sx={{marginLeft: "10px"}} fullWidth onClick={ submitHandler }>Register</Button>
            </form>
        </div>
    );
}

export default Register;