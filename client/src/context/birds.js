import React, {useState, useEffect} from 'react'

const BirdsContext = React.createContext()

function BirdsProvider({children}){
    const [birds, setBirds] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetch('/birds')
        .then(r=>r.json())
        .then(r=>{
            setBirds(r)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded){
        return(
            <p>Loading...</p>
        )
    }

    const editBird = (editedBird) => {
        const updatedBirds = birds.map(bird => bird.id === editedBird.id ? editedBird : bird)
        setBirds(updatedBirds)
    }

    const addBird = (addedBird) => {
        setBirds([...birds, addedBird])
    }

    /*const updateSightedBird = (sighting) => {
        const sightingUser = sighting.user
        const seenBird = birds.find(bird=> sighting.bird_id === bird.id)
        const updatedBirdUsers = [...seenBird.users, sightingUser]
        seenBird.users = updatedBirdUsers
        const updatedBirds = birds.map(bird => bird.id === seenBird.id ? seenBird : bird)
        setBirds(updatedBirds)
    }*/

    return (
        <BirdsContext.Provider value={{birds, addBird, editBird}}>
            {children}
        </BirdsContext.Provider>
    )
}

export {BirdsContext, BirdsProvider}