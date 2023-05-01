import {useContext, useState, useEffect} from 'react'
import {UserContext} from './context/user'
import {BirdsContext} from './context/birds'
import {Link} from 'react-router-dom'

function Sightings(){
    const {user} = useContext(UserContext)
    const {birds} = useContext(BirdsContext)

    //this one isnt updating with state

    //const userBirds = birds.filter(bird => bird.sightings.find(sighting => sighting.user_id == user.id))
    //console.log(userBirds)
    console.log(user)

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

    /*return (
        <>
        <h3>You have {user.sightings.length} total sightings.</h3>
        {user.sightings.map(sighting =>(
            <>

            </>
        ))}
        </>
    )*/
}

export default Sightings