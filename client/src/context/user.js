import React, {useState, useEffect} from 'react'

//create context
const UserContext = React.createContext()

//create provider component
function UserProvider({children}){
    const [user, setUser] = useState(null)
    //const [uniqBirds, setUniqBirds] = useState([])
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
        console.log(updatedUser)
        setUser(updatedUser)
        // how do i add this to birds.uniq
    }

    const patchSighting = (patchedSighting) => {
        console.log("context patch sighting", patchedSighting)
        const updatedSightings = user.sightings.map(sighting=>sighting.id === patchedSighting.id ? patchedSighting : sighting)
        const updatedUser = {...user}
        updatedUser.sightings = updatedSightings
        setUser(updatedUser) 
    }

    const deleteSighting = (deletedSightingId) => {
        console.log("context delete sighting", deletedSightingId)
        const updatedSightings = user.sightings.filter(sighting => sighting.id != deletedSightingId)
        const updatedUser = {...user}
        updatedUser.sightings = updatedSightings
        setUser(updatedUser)
    }

    return (
        <UserContext.Provider value={{user, signup, logout, login, addSighting, patchSighting, deleteSighting}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}