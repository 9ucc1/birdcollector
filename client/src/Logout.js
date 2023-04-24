import {useHistory} from 'react-router-dom'
import {useContext} from 'react'
import {UserContext} from './context/user'

function Logout({/*setUser*/}){

    const history = useHistory()
    const {logout} = useContext(UserContext)

    function handleLogout(){
        fetch('/logout', {
            method: "DELETE"
        })
        .then(r=>{
            if (r.ok){
                logout()
            }
        })
        alert("You've been logged out!")
        history.push('/')
    }

    return (
        <>
        <button onClick={handleLogout}>Click to Confirm Logout</button>
        </>
    )
}

export default Logout