import React, {useContext} from 'react'
import {UserContext} from './context/user'

function Homepage(){

    const {user} = useContext(UserContext)

    if (!user || user.error) {
        return (<>
        <h2>Welcome!</h2>
        <h3>Please log in or create an account to browse birds and record sightings.</h3>
        </>
        )
    } else {
        return (<>
        <h2>Welcome, {user.name}!</h2>
        <h3>Click the buttons above to browse birds and record sightings.</h3>
        </>
        )
    }
}

export default Homepage