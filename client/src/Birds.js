import Bird from './Bird.js'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Birds({birds}){

    return (
    <>
    <Link to='/birds/new'>
        Create a new bird
    </Link>
    <Bird birds={birds}/>
    </>
    )
}

export default Birds