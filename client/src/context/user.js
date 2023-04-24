import React, {useState, useEffect} from 'react'

//create context
const UserContext = React.createContext()

//create provider component
function UserProvider({children}){
    const [user, setUser] = useState([])

    useEffect(()=>{
        fetch('/me')
        .then(r=>r.json())
        .then(r=>{
            setUser(r)
        })
    }, [])

    const login = ()=>{

    }

    const logout = ()=>{

    }

    const signup = ()=>{

    }

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}