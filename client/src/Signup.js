import {useState} from 'react'

function Signup(){

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

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
        .then(r=>console.log(r))
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
                type="text"
                value={password}
                onChange={e=>setPassword(e.target.value)}
            />
            <br/>
            <label>Confirm Password:</label>
            <input 
                type="text"
                value={passwordConfirmation}
                onChange={e=>setPasswordConfirmation(e.target.value)}
            />
            <br/>
            <button type="submit">Sign Up</button>
        </form>
        </>
    )
}

export default Signup