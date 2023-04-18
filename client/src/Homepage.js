import React from 'react'

function Homepage({user}){

    if (user) {
        return <h2>Welcome, {user.name}!</h2>
    } else {
        return <h2>Welcome! Please Log In or Sign Up.</h2>
    }
}

export default Homepage