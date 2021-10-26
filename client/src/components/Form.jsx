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

const Form = props => {

    const { submitHandler, changeHandler } = props
    return(

        <form onSubmit={ submitHandler }>
            <FormControl sx={{ m: 1, width: '12ch' }}>
                <InputLabel htmlFor="title">Title</InputLabel>
                <Input name="title" aria-describedby="my-helper-text" onChange={changeHandler}/>
                <FormHelperText name="my-helper-text">Error message</FormHelperText>
            </FormControl>
            <br />
            <FormControl>
                <InputLabel htmlFor="url">Image</InputLabel>
                <Input name="url" aria-describedby="my-helper-text" onChange={ changeHandler }/>
                <FormHelperText name="my-helper-text">Error message</FormHelperText>
            </FormControl>
            <br />
            <FormControl>
                <InputLabel htmlFor="content">Content</InputLabel>
                <Input name="content" aria-describedby="my-helper-text" onChange={ changeHandler }/>
                <FormHelperText name="my-helper-text">Error message</FormHelperText>
            </FormControl>

            <input type="text" name="title" onChange={ changeHandler } />
            <input type="text" name="url" onChange={ changeHandler } />
            <input type="text" name="content" onChange={ changeHandler } />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form