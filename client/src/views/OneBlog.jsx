import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { blogsCreators } from '../states/types';
import Page from '../components/Page';

const OneBlog = props => {

    // destructure action from bindActionCreators
    const dispatch = useDispatch()
    const { getOneBlog } = bindActionCreators(blogsCreators, dispatch)
    const [refreshPage, setRefreshPage] = useState(false)

    useEffect(() => {
        getOneBlog(`${props._id}`)
        // eslint-disable-next-line
    }, [refreshPage])

    const oneBlog = useSelector(state => state.oneBlog)
    // console.log(oneBlog.state)

    return(
        <>
        {
            oneBlog.state ? <Page blog={ oneBlog.state } refreshPage={ refreshPage } setRefreshPage={ setRefreshPage } /> : ""
        }
        </>
    );
}

export default OneBlog;