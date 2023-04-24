import {useHistory} from 'react-router-dom'

function Logout({setUser}){

    const history = useHistory()

    function handleLogout(){
        fetch('/logout', {
            method: "DELETE"
        })
        .then(r=>{
            if (r.ok){
                setUser(null)
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