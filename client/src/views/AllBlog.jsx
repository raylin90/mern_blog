import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { blogsCreators } from '../states/types'
import { getAllBlogs } from '../states/actions/blogsAction'

const AllBlog = props => {

    const blogs = useSelector(state => state.blogs)
    console.log(blogs)

    const dispatch = useDispatch()
    const hello = bindActionCreators(blogsCreators, dispatch)
    console.log(hello);


    useEffect(() => {
        console.log("hi")
        dispatch(getAllBlogs())
    }, [])

    return(
        <>
        <h1>This is All Blog Page</h1>
        </>
    );
}

export default AllBlog;