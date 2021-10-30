import React from 'react';

const InfoBar = ({room}) => {
    return(
        <>
        <h1>This is my InfoBar Page</h1>
        <h3> {room} </h3>
        <a href="/join">Leave</a>
        </>
    );
}

export default InfoBar;