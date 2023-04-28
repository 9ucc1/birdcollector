import React, {useState, useEffect} from 'react'

//create context
const UserContext = React.createContext(/*{user: []}*/)

//create provider component
function UserProvider({children}){
    const [user, setUser] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetch('/me')
        .then(r=>r.json())
        .then(r=>{
            setUser(r)
            //console.log(user)
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

    const addSighting = (newSighting) =>{
        console.log("context add sighting", newSighting)
        const updatedSightings = [...user.sightings, newSighting]
        user.sightings = updatedSightings
        setUser(user)
    }
    /*function handleAddSighting(newSighting){
        console.log("app add sighting", newSighting)
        const birdToUpdate = birds.find(bird=>bird.id === newSighting.bird_id)
        const updatedSightings = [...birdToUpdate.sightings, newSighting]
        birdToUpdate.sightings = updatedSightings
        const updatedBirdState = birds.map((bird) => bird.id === birdToUpdate.id ? birdToUpdate : bird)
        //setBirds(updatedBirdState)
        setState({birds: updatedBirdState}, error, status)
      }*/

    return (
        <UserContext.Provider value={{user, signup, logout, login, addSighting}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}