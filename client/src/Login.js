import {useState} from 'react'

function Login({setUser}){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
   
    function handleSubmit(e){
        e.preventDefault()
        console.log("he")
        fetch('/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(r=>r.json())
        .then(r=>setUser(r))
    }

    return(
        <>
        <div>Log in to an existing account</div>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={e=>setUsername(e.target.value)}
            />
            <br/>
            <label>Password:</label>
            <input 
                type="text"
                id="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
            />
            <br/>
            <button type="submit">Log In</button>
        </form>
        </>
    )
}

export default Login