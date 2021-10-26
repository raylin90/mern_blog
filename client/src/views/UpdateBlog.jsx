import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { blogsCreators } from '../states/types'
import axios from 'axios';

const UpdateBlog = props => {

    const [myForm, setMyForm] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/blog/${props._id}`)
            .then(res => {
                console.log(res.data)
                setMyForm(res.data)
            })
            .catch(err => console.log("something went wrong when getting one blog", err))
    }, [])

    const dispatch = useDispatch()
    const { updateBlog } = bindActionCreators(blogsCreators, dispatch)
    const errors = useSelector(state => state.errors)
    console.log("errors: ", errors)


    const changeHandler = e => {
        setMyForm({...myForm, [e.target.name] : e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        updateBlog(`${props._id}`, myForm)
    }

    return(
        <div style={{ padding: "20px", minHeight: "100vh"}} onLoad={e => console.log("onload event ", e)}>
        <h1>This is my Update Page</h1>
        <Form submitHandler={ submitHandler } changeHandler={ changeHandler } myForm={ myForm } errors={ errors.state}/>
        </div>
    );
}

export default UpdateBlog;