import {useContext} from 'react'
import {UserContext} from './context/user'
import {Link} from 'react-router-dom'

function Sightings(){
    const {user} = useContext(UserContext)
    const userBirds = user.birds_uniq

    return (
        <>
        <h3>You have {user.sightings.length} total sightings, of {userBirds.length} unique species.</h3>
        {user ? userBirds.map(bird=>(
            <>
            <img src={bird.image}/>
            <br/>
            <Link to={`/birds/${bird.id}/sightings`}><h4>View {bird.com_name} sightings</h4></Link>
            <br/>
            </>
        )) : "Log in or sign up to start sighting birds!"}
        </>
    )
}

export default Sightings