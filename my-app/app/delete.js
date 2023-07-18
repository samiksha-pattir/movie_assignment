"use client"
import React from 'react';
function Delete(props){
    return(
        <>
             <img id="remove" src="delete.png" onClick={props.onClick}/>
        </>
    );
};

export default Delete;
