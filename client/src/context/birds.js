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
        //console.log("context edit bird", editedBird)
        const updatedBirds = birds.map(bird => bird.id === editedBird.id ? editedBird : bird)
        setBirds(updatedBirds)
    }

    const addBird = (addedBird) => {
        //console.log("context create bird", addedBird)
        setBirds([...birds, addedBird])
    }

    const updateSightedBird = (sighting) => {
        console.log("bird context", sighting)
        // update birds with sighting.user
        const sightingUser = sighting.user
        const seenBird = birds.find(bird=> sighting.bird_id === bird.id)
        // this bird got a new user.
        const updatedBirdUsers = [...seenBird.users, sightingUser] //update this with sightingUser
        seenBird.users = updatedBirdUsers
        const updatedBirds = birds.map(bird => bird.id === seenBird.id ? seenBird : bird)
        setBirds(updatedBirds)
        console.log("sighting's bird", seenBird, updatedBirdUsers, updatedBirds)
    }

    return (
        <BirdsContext.Provider value={{birds, addBird, editBird, updateSightedBird}}>
            {children}
        </BirdsContext.Provider>
    )
}

export {BirdsContext, BirdsProvider}