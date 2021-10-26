import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { blogsCreators } from '../states/types'
import MediaCard from '../components/MediaCard'


const AllBlog = props => {

    const blogs = useSelector(state => state.blogs)
    console.log("all blogs ", blogs.state)

    const dispatch = useDispatch()
    const { getAllBlogs} = bindActionCreators(blogsCreators, dispatch)
    // console.log(getAllBlogs);
    // console.log(getOneBlogs);


    useEffect(() => {
        // dispatch(getOneBlogs())
        getAllBlogs()
    }, [])

    return(
        <>
        <h1>This is All Blog Page</h1>
        {
            blogs.state ? blogs.state.map((blog, i) => <MediaCard key={i}/>) : ""
        }
        </>

    );
}

export default AllBlog;