import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { blogsCreators } from '../states/types';

const OneBlog = props => {

    // destructure action from bindActionCreators
    const dispatch = useDispatch()
    const { getOneBlog } = bindActionCreators(blogsCreators, dispatch)

    useEffect(() => {
        getOneBlog(`${props._id}`)
    }, [])

    const oneBlog = useSelector(state => state.blogs)
    console.log(oneBlog.state)
    
    return(
        <>
        {
            oneBlog.state ? 
            <>
                <h1>{oneBlog.state.title}</h1>
                <img src={oneBlog.state.url} alt="" />
                <h1>{oneBlog.state.content}</h1>
            </> : "No"
        }

        </>
    );
}

export default OneBlog;