import {useContext} from 'react'
import {UserContext} from './context/user'

function Sighting({bird}){

    const {user} = useContext(UserContext)

    //return all sightings, by user, of THIS bird

    return(
        <>
        {bird.sightings.map(sighting => (
            <>{sighting.date}</>
        ))}
        </>
    )
}

export default Sighting