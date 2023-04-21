import Bird from './Bird.js'
import {useState, useEffect} from 'react'
//import {Link} from 'react-router-dom'

function Birds(){

    const [birds, setBirds] = useState([])

    useEffect(() => {
        fetch('/birds')
        .then(r=>r.json())
        .then(r=>setBirds(r))
    }, [])

    return (
    <>
    bird
    <Bird birds={birds}/>
    </>
    )
}

export default Birds