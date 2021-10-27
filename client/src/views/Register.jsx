import React, { useState } from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import axios from 'axios';

const Register = props => {

    const [registerForm, setRegisterForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [errors, setErrors] = useState({})

    const changeHandler = e => {
        setRegisterForm({...registerForm, [e.target.name] : e.target.value});
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/register", registerForm, { withCredentials: true })
            .then(res => {
                if(res.data.errors) {
                    console.log(res.data.errors)
                    setErrors(res.data.errors)
                }
            })
            .catch(err => console.log("something went wrong when register an user", err))
    }

    return(
        <div style={{ padding: "20px", width: "500px"}}>
        <h1>This is my Register Route</h1>
        <form >
            <FormControl sx={{ m: 1.5, width: "500px" }} >
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <Input name="firstName" onChange={changeHandler} />
                {
                    errors.firstName ? <FormHelperText sx={{ color: "#f44336" }}>{errors.firstName.message}</FormHelperText> : ""
                }
            </FormControl>
            <br />
            <FormControl sx={{ m: 1.5, width: "500px" }} >
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <Input name="lastName" onChange={changeHandler} />
                {
                    errors.lastName ? <FormHelperText sx={{ color: "#f44336" }}>{errors.lastName.message}</FormHelperText> : ""
                }
            </FormControl>
            <br />
            <FormControl sx={{ m: 1.5, width: "500px" }} >
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input name="email" onChange={changeHandler} />
                {
                    errors.email ? <FormHelperText sx={{ color: "#f44336" }}>{errors.email.message}</FormHelperText> : ""
                }
            </FormControl>
            <br />
            <FormControl sx={{ m: 1.5, width: "500px" }} >
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input type="password" name="password" onChange={changeHandler} />
                {
                    errors.password ? <FormHelperText sx={{ color: "#f44336" }}>{errors.password.message}</FormHelperText> : ""
                }
            </FormControl>
            <br />
            <FormControl sx={{ m: 1.5, width: "500px" }} >
                <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                <Input type="password" name="confirmPassword" onChange={changeHandler} />
                {
                    errors.confirmPassword ? <FormHelperText sx={{ color: "#f44336" }}>{errors.confirmPassword.message}</FormHelperText> : ""
                }
            </FormControl>
            <br />
            <Button variant="contained" sx={{marginLeft: "10px"}} fullWidth onClick={ submitHandler }>Submit</Button>
        </form>

        </div>
    );
}

export default Register;