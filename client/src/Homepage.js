import React, {useState, useEffect, useContext} from 'react'
import {UserProvider, UserContext} from './context/user'

function Homepage(/*{user}*/){

    const user = useContext(UserContext)

    if (user) {
        return <h2>Welcome, {user.name}!</h2>
    } else {
        return <h2>Welcome! Please log in or create an account.</h2>
    }
}

export default Homepage