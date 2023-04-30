import Bird from './Bird.js'
import {useContext} from 'react'
import {UserContext} from './context/user'
import {Link} from 'react-router-dom'

function Birds({birds}){

    const {user} = useContext(UserContext)

    if (!user || user.error){
        return <h3>Please log in to view birds.</h3>
    } else {
        return (
            <>
            <Link to='/birds/new'>
                <h3>Create a new bird</h3>
            </Link>
            <Bird birds={birds}/>
            </>
        )
    }
}

export default Birds