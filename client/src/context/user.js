import React, {useState, useEffect} from 'react'

//create context
const UserContext = React.createContext({user: []})

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

    return (
        <UserContext.Provider value={{user, signup, logout, login}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}