import {useState} from 'react'

function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
   
    function handleSubmit(e){
        e.preventDefault()
        console.log("submit")
    }

    return(
        <>
        <div>Log in to an existing account</div>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
                type="text"
                id="username"
            />
            <br/>
            <label>Password:</label>
            <input 
                type="text"
                id="password"
            />
            <br/>
            <button type="submit">Log In</button>
        </form>
        </>
    )
}

export default Login