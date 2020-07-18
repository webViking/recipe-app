import React from 'react'
import './Recipe.scss'
const NotFound = (props) =>{
    console.log(props)
    return(
        <div className = "recipe">
            <h1>Cannot found {props.searched}</h1>
        </div>
    )
};


export default NotFound;