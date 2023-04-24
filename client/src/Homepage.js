import React, {useContext} from 'react'
import {UserContext} from './context/user'

function Homepage(/*{user}*/){

    const {user} = useContext(UserContext)

    if (!user || user.error) {
        return <h2>Welcome! Please log in or create an account.</h2>
    } else {
        console.log(user)
        return <h2>Welcome, {user.name}!</h2>
    }
}

export default Homepage