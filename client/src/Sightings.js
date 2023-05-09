import {useContext, useState, useEffect} from 'react'
import {UserContext} from './context/user'
import {BirdsContext} from './context/birds'
import {Link} from 'react-router-dom'

function Sightings(){
    const {user} = useContext(UserContext)

    if (!user || user.error){
        return <h3>Please log in to view sightings.</h3>
    } else {
        return (
            <>
            <h3>You have {user.sightings.length} total sightings, of {user.birds_uniq?.length} unique species.</h3>
            {user.birds_uniq?.map(bird=>(
                <>
                <img src={bird.image}/>
                <br/>
                <Link to={`/birds/${bird.id}/sightings`}><h4>View {bird.com_name} sightings</h4></Link>
                <br/>
                </>
            ))}
            </>
    )}
}

export default Sightings