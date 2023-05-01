import React, {useState, useEffect} from 'react'

//create context
const UserContext = React.createContext()

//create provider component
function UserProvider({children}){
    const [user, setUser] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetch('/me')
        .then(r=>r.json())
        .then(r=>{
            setUser(r)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded){
        return(
            <p>Loading...</p>
        )
    }

    const login = (user)=>{
        setUser(user)
    }

    const logout = ()=>{
        setUser(null)
    }

    const signup = (user) => {
        setUser(user)
    }

    const addSighting = (newSighting) => {
        console.log("context add sighting", newSighting)
        const updatedSightings = [...user.sightings, newSighting]
        const updatedUser = {...user}
        updatedUser.sightings = updatedSightings
        // before setting user, based on sighting do I need to make a change to birds.uniq
        console.log(newSighting.bird)
        if((updatedUser.birds_uniq.find(bird=>bird.id == newSighting.bird_id)) === undefined){
        //console.log(updatedUser.birds_uniq.find(bird => bird == newSighting.bird))
            const updatedBirds = [...updatedUser.birds_uniq, newSighting.bird]
            updatedUser.birds_uniq = updatedBirds
        //console.log(updatedUser)
            setUser(updatedUser)
        } else {
            setUser(updatedUser)
        }
    }

    const patchSighting = (patchedSighting) => {
        console.log("context patch sighting", patchedSighting)
        const updatedSightings = user.sightings.map(sighting=>sighting.id === patchedSighting.id ? patchedSighting : sighting)
        const updatedUser = {...user}
        updatedUser.sightings = updatedSightings
        setUser(updatedUser) 
    }

    const deleteSighting = (deletedSightingId, userBird) => {
        //if this sighting's birds only have 1 sighting, then filter through birds uniq to delete bird
        console.log("context delete sighting", deletedSightingId, userBird)
        const updatedSightings = user.sightings.filter(sighting => sighting.id != deletedSightingId)
        const updatedUser = {...user}
        updatedUser.sightings = updatedSightings
        //console.log(userBird.sightings.find(sighting => sighting.user_id == user.id))
       if((userBird.sightings.find(sighting => sighting.user_id == user.id)) === undefined){
        //const updatedBirds = updatedUser.birds_uniq.filter(bird => bird.id !== userBird.id)
        const updatedBirds = updatedUser.birds_uniq.filter(bird=>bird.id != userBird.id) ///////remove userBird from birds_uniq
        console.log(updatedBirds)
        updatedUser.birds_uniq = updatedBirds
        setUser(updatedUser)
       } else {
        setUser(updatedUser)
       }
    }

    return (
        <UserContext.Provider value={{user, setUser, signup, logout, login, addSighting, patchSighting, deleteSighting}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}