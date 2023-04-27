import {useContext} from 'react'
import {UserContext} from './context/user'
import {Link} from 'react-router-dom'

function Sightings({birds}){
    const {user} = useContext(UserContext)
    const userBirds = user.birds_uniq

    return (
        <>
        {user ? userBirds.map(bird=>(
            <>
            <img src={bird.image}/>
            <li>You've seen a {bird.com_name} <Link to={`/birds/${bird.id}/sightings`}>x times.</Link></li>
            </>
        )) : "Log in or sign up to start sighting birds!"}
        </>
    )
}

export default Sightings