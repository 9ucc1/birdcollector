import {useState} from 'react'
//import {useHistory} from 'react-router-dom'

function Login({setUser}){

    //const history = useHistory()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
   
    function handleSubmit(e){
        e.preventDefault();
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
        //history.push('/')
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
                type="password"
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