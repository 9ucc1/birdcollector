import {useContext} from 'react'
import {UserContext} from './context/user'
import {useParams, Link} from 'react-router-dom'

function Sighting(){

    const {user} = useContext(UserContext)
    const params = useParams()

    const userSightings = user.sightings.filter(sighting=>sighting.bird_id==params.id)
    const userBird = user.birds_uniq.find(bird=>bird.id==params.id)

    if (!user || user.error){
        return <h3>Please log in to view sightings.</h3>
    } else {
        return(
            <>
                <h3>{userBird.com_name} Sightings</h3>
                {userSightings.map(sighting=>(
                    <>
                    <ol>
                        <b>Date:</b> {sighting.date} <br/>
                        <b>Location:</b> {sighting.location} <br/>
                        <b>Notes:</b> {sighting.notes} <br/>
                        <Link to={`/sightings/${sighting.id}`}><button>Edit Sighting</button></Link>
                    </ol>
                    </>
                ))}
                <Link to={`/sightings`}>Back to All Sightings</Link>
            </>
        )
    }
}

export default Sighting