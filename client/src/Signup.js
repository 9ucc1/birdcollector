import {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {UserContext} from './context/user'

function Signup(){

    const history = useHistory()
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const {signup} = useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault()
        fetch('/signup', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
            })
        })
        .then(r=>r.json())
        .then(user=>{
            if (!user.errors){
                signup(user)
                history.push('/')
            } else {
                setName("")
                setUsername("")
                setPassword("")
                setPasswordConfirmation("")
                const errorLis = user.errors.map(error=> <li>{error}</li>)
                setErrorsList(errorLis)
            }
        })
    }

    return (
        <>
        <div>Create a new account</div>
        <form onSubmit={handleSubmit}>
            <label>Your name:</label>
            <input
                type="text"
                value={name}
                onChange={e=>setName(e.target.value)}
            />
            <br/>
            <label>Username:</label>
            <input
                type="text"
                value={username}
                onChange={e=>setUsername(e.target.value)}
            />
            <br/>
            <label>Password:</label>
            <input 
                type="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
            />
            <br/>
            <label>Confirm Password:</label>
            <input 
                type="password"
                value={passwordConfirmation}
                onChange={e=>setPasswordConfirmation(e.target.value)}
            />
            <br/>
            <button type="submit">Sign Up</button>
        </form>
        {errorsList}
        </>
    )
}

export default Signup