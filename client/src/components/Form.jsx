import React from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = props => {

    const { submitHandler, changeHandler, myForm, errors } = props
    // console.log(errors)
    
    return(
        <form >
            <FormControl sx={{ m: 1.5, width: "60vw" }} >
                <InputLabel htmlFor="title">Title</InputLabel>
                <Input name="title" onChange={changeHandler} defaultValue={ myForm.title }/>
                {
                    errors ? errors.title ? <FormHelperText sx={{ color: "#f44336" }}>{errors.title.message}</FormHelperText> :"" : ""
                }
            </FormControl>
            <br />
            <FormControl sx={{ m: 1.5, width: "60vw" }}>
                <InputLabel htmlFor="url">Image</InputLabel>
                <Input name="url" onChange={ changeHandler } defaultValue={ myForm.url }/>
                {
                    errors ? errors.url ? <FormHelperText sx={{ color: "#f44336" }}>{errors.url.message}</FormHelperText> :"" : ""
                }
            </FormControl>
            <br />
            <FormControl sx={{ m: 1.5, width: "60vw" }} >
                <TextField
                    id="outlined-multiline-static"
                    label="Content"
                    multiline
                    rows={12}
                    defaultValue={ myForm.content }
                    name="content"
                    onChange={ changeHandler }
                />
                {
                    errors ? errors.content ? <FormHelperText sx={{ color: "#f44336" }}>{errors.content.message}</FormHelperText> :"" : ""
                }
                <br /><br />
                <Button variant="contained" onClick={ submitHandler }>Submit</Button>
            </FormControl>

        </form>
    );
}

export default Form