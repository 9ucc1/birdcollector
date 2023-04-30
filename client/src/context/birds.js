import React, {useState, useEffect} from 'react'

//create context
const BirdsContext = React.createContext()

//create provider component
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
        console.log("context edit bird", editedBird)
        const updatedBirds = birds.map(bird => bird.id === editedBird.id ? editedBird : bird)
        setBirds(updatedBirds)
    }

    const addBird = (addedBird) => {
        console.log("context create bird", addedBird)
        setBirds([...birds, addedBird])
    }

    return (
        <BirdsContext.Provider value={{birds, addBird, editBird}}>
            {children}
        </BirdsContext.Provider>
    )
}

export {BirdsContext, BirdsProvider}