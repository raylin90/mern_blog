import React, { useState } from 'react';
import Form from '../components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { blogsCreators } from '../states/types'

const AddBlog = props => {

    const errors = useSelector(state => state.errors)
    // console.log(errors)

    const dispatch = useDispatch()
    const { saveBlog} = bindActionCreators(blogsCreators, dispatch)

    const [myForm, setMyForm] = useState({
        title: "",
        url: "",
        content: "",
    })
    
    const changeHandler = e => {
        setMyForm({...myForm, [e.target.name] : e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        saveBlog(myForm);
    }
    

    return(
        <div style={{ padding: "20px", minHeight: "100vh"}}>
        <h1>This is my Add Page</h1>
        <Form submitHandler={ submitHandler } changeHandler={ changeHandler } myForm={ myForm } errors={ errors.state}/>
        </div>
    );
}

export default AddBlog