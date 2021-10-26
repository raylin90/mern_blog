import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { blogsCreators } from '../states/types';
import Page from '../components/Page';

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
            oneBlog.state ? <Page blog={ oneBlog.state }/> : "No"
        }
        </>
    );
}

export default OneBlog;