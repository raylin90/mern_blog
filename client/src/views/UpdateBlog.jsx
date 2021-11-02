import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { blogsCreators } from '../states/types'
import axios from 'axios';

const UpdateBlog = props => {

    // we need to use local state because we need to use onChange listener
    const [myForm, setMyForm] = useState({
        title: "",
        url: "",
        description: "",
        content: "",
    })

    // axios call to get blog info. and store at local state
    useEffect(() => {
        axios.get(`http://localhost:8000/api/blog/${props._id}`)
            .then(res => {
                // console.log(res.data)
                // set up local state myForm
                setMyForm(res.data)
            })
            .catch(err => console.log("something went wrong when getting one blog", err))
            // eslint-disable-next-line
    }, [])

    // extract updateBlog axios call from reducer
    const dispatch = useDispatch()
    const { updateBlog } = bindActionCreators(blogsCreators, dispatch)
    const errors = useSelector(state => state.errors)

    const changeHandler = e => {
        setMyForm({...myForm, [e.target.name] : e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        // update redux state
        updateBlog(`${props._id}`, myForm)
    }

    return(
        <div style={{ padding: "20px", minHeight: "88vh"}} onLoad={e => console.log("onload event ", e)}>
        <Form submitHandler={ submitHandler } changeHandler={ changeHandler } myForm={ myForm } errors={ errors.state}/>
        </div>
    );
}

export default UpdateBlog;