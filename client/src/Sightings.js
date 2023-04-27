import {useContext} from 'react'
import {UserContext} from './context/user'
import {Link} from 'react-router-dom'

function Sightings({birds}){
    const {user} = useContext(UserContext)
    const userBirds = user.birds_uniq

    //get UNIQUE list of user.birds, map thru that

    /*const uniqBirds = userBirds.filter((bird, index)=>{
        return userBirds.indexOf(bird) === index
    })
    const uniqBirds = userBirds.filter((bird, index)=>{
        return userBirds.findIndex(obj=>obj.value === bird.value) === index
    })*/

    return (
        <>
        {user ? userBirds.map(bird=>(
            <>
            <img src={bird.image}/>
            <li>You've seen a {bird.com_name} <Link to={`/${bird.id}/sightings`}>x times.</Link></li>
            </>
        )) : "Log in or sign up to start sighting birds!"}
        </>
    )
}

export default Sightings