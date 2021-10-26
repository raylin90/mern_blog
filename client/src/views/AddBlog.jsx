import React, { useState } from 'react';
import Form from '../components/Form';

const AddBlog = props => {

    const [myForm, setMyForm] = useState({
        title: "1",
        url: "2",
        content: "3",
    })
    

    const changeHandler = e => {
        setMyForm({...myForm, [e.target.name] : e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(myForm)
    }

    return(
        <div style={{ padding: "20px", minHeight: "100vh"}}>
        <h1>This is my Add Page</h1>
        <Form submitHandler={ submitHandler } changeHandler={ changeHandler } myForm={ myForm }/>
        </div>
    );
}

export default AddBlog