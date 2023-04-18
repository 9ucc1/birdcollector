import {NavLink} from 'react-router-dom'

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white",
  };

function Header({user}){

    //conditionally display sign up / log in/out
    
    return(
        <>
        <div>BirdCollector</div>
        <main>
        <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "beige",
                    color: "black",
                  }}
            >
                Home
        </NavLink>
        {user ? (<>
                    <NavLink
                    to="/"
                    exact
                    style={linkStyles}
                    activeStyle={{
                        background: "beige",
                        color: "black",
                      }}
                >
                    Browse Birds
            </NavLink>
            <NavLink
                    to="/"
                    exact
                    style={linkStyles}
                    activeStyle={{
                        background: "beige",
                        color: "black",
                      }}
                >
                    My Birds
            </NavLink>
            <NavLink
                    to="/logout"
                    exact
                    style={linkStyles}
                    activeStyle={{
                        background: "beige",
                        color: "black",
                      }}
                >
                    Log Out
            </NavLink>
            </>)
         : (<>
            <NavLink
                to="/login"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "beige",
                    color: "black",
                  }}
            >
                Log In
            </NavLink>
            <NavLink
                to="/signup"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "beige",
                    color: "black",
                  }}
            >
                Sign Up
        </NavLink>
         </>)}

        </main>
        </>
    )
}

export default Header