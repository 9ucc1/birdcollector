function Login(){
    return(
        <>
        <div>login here</div>
        <form>
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