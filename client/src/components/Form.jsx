import React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

const Form = props => {

    const { submitHandler, changeHandler, myForm } = props
    return(
        <form >
            <FormControl sx={{ m: 1.5, width: "60vw" }} >
                <InputLabel htmlFor="title">Title</InputLabel>
                <Input name="title" aria-describedby="my-helper-text" onChange={changeHandler} defaultValue={ myForm.title }/>
                <FormHelperText name="my-helper-text">Error message</FormHelperText>
            </FormControl>
            <br />
            <FormControl sx={{ m: 1.5, width: "60vw" }}>
                <InputLabel htmlFor="url">Image</InputLabel>
                <Input name="url" aria-describedby="my-helper-text" onChange={ changeHandler } defaultValue={ myForm.url }/>
                <FormHelperText name="my-helper-text">Error message</FormHelperText>
            </FormControl>
            <br />
            <FormControl sx={{ m: 1.5, width: "60vw" }} >
                {/* <InputLabel htmlFor="content">Content</InputLabel> */}
                {/* <Input name="content" aria-describedby="my-helper-text" onChange={ changeHandler } defaultValue={ myForm.content }/> */}
                <TextField
                    id="outlined-multiline-static"
                    label="Content"
                    multiline
                    rows={12}
                    defaultValue={ myForm.content }
                    name="content"
                    onChange={ changeHandler }
                />
                <FormHelperText name="my-helper-text">Error message</FormHelperText>
                <br /><br />
                <Button variant="contained" onClick={ submitHandler }>Submit</Button>
            </FormControl>

        </form>
    );
}

export default Form