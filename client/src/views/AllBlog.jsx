import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { blogsCreators } from '../states/types'
import MediaCard from '../components/MediaCard'
import img from '../images/main.jpg'
import Box from '@mui/material/Box';

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
        <img src={img} alt="main img" style={{width: "99vw", height: "50vh", objectFit: "cover"}} />
        <Box sx={{ display: "flex", flexWrap: 'wrap' }}>
        {
            blogs.state ? blogs.state.map((blog, i) => <MediaCard key={i} blog={blog}/>) : ""
        }
        </Box>
        </>
    );
}

export default AllBlog;