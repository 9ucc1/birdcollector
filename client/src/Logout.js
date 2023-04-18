function Logout({setUser}){

    function handleLogout(){
        fetch('/logout', {
            method: "DELETE"
        })
        .then(r=>{
            if (r.ok){
                setUser(null)
            }
        })
    }

    return (
        <>
        <div>click below to confirm logout</div>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Logout