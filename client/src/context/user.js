import React, {useState, useEffect} from 'react'

//create context
const UserContext = React.createContext()

//create provider component
function UserProvider({children}){
    const [user, setUser] = useState(null)

    useEffect(()=>{
        fetch('/me')
        .then(r=>r.json())
        .then(r=>{
            setUser(r)
            console.log(user)
        })
    }, [])

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