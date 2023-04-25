import {useContext} from 'react'
import {UserContext} from './context/user'

import Sighting from './Sighting.js'

function Sightings({birds}){
    const {user} = useContext(UserContext)

    return (
        <>
        sighting
        {user ? user.birds.map(bird=>(
            <>
            <li>{bird.com_name}</li>
            <Sighting bird={bird}/>
            </>
        )) : "Log in or sign up to start sighting birds!"}
        </>
    )
}

export default Sightings