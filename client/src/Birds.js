import Bird from './Bird.js'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Birds({birds}){

    return (
    <>
    <Link to='/birds/new'>
        <h3>Create a new bird</h3>
    </Link>
    <Bird birds={birds}/>
    </>
    )
}

export default Birds