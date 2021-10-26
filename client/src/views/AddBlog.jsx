import React, { useState } from 'react';
import Form from '../components/Form';

const AddBlog = props => {

    const [myForm, setMyForm] = useState({
        title: "",
        url: "",
        content: "",
    })
    console.log(myForm)

    const changeHandler = e => {
        setMyForm({...myForm, [e.target.name] : e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
    }

    return(
        <div style={{ padding: "20px", minHeight: "100vh"}}>
        <h1>This is my Add Page</h1>
        <Form submitHandler={ submitHandler } changeHandler={ changeHandler }/>
        </div>
    );
}

export default AddBlog