function Signup(){

    return (
        <>
        <form>
            <label>Username:</label>
            <input
                type="text"
            />
            <br/>
            <label>Password:</label>
            <input 
                type="text"
            />
            <br/>
            <label>Confirm Password:</label>
            <input 
                type="text"
            />
            <br/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Signup