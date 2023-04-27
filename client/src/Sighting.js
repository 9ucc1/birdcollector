import {useContext} from 'react'
import {UserContext} from './context/user'
import {useParams, Link} from 'react-router-dom'

function Sighting(){

    const {user} = useContext(UserContext)
    const params = useParams()

    const userSightings = user.sightings.filter(sighting=>sighting.bird_id==params.id)
    const userBird = user.birds_uniq.find(bird=>bird.id==params.id)

    return(
        <>
            {userBird.com_name} Sightings
            {userSightings.map(sighting=>(
                <>
                <ol>
                    Date: {sighting.date},
                    Location: {sighting.location},
                    Notes: {sighting.notes}
                    <Link to={`/sightings/${sighting.id}`}><button>Edit Sighting</button></Link>
                </ol>
                </>
            ))}
            <Link to={`/sightings`}>Back to All Sightings</Link>
        </>
    )
}

export default Sighting