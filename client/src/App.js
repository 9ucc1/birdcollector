import './App.css';
import {useState, useEffect, useContext} from 'react'
import {UserProvider, UserContext} from './context/user'
import {Route, Switch} from 'react-router-dom'
import Homepage from './Homepage.js'
import Header from './Header.js'
import Login from './Login.js'
import Signup from './Signup.js'
import Logout from './Logout.js'
import Birds from './Birds.js'
import NewBird from './NewBird.js'
import EditBird from './EditBird.js'
import Sightings from './Sightings.js'
import NewSighting from './NewSighting.js'

function App() {

  const user = useContext(UserContext)

  //const [user, setUser] = useState(null)//if user is null, loading message
  //use effect for when logged in, session checks for log in (check curriculum)
  //when user state exists, render route
  //useContext
  const [birds, setBirds] = useState([])
  const [sightings, setSightings] = useState([])

  useEffect(() => {
      fetch('/birds')
      .then(r=>r.json())
      .then(r=>setBirds(r))
      fetch('/sightings')
      .then(r=>r.json())
      .then(r=>setSightings(r)) //don't fetch sightings, make serializers
      //fetch(`/me`)
      //if response isnt error, then set user to return of response
  }, [])

  //usecontext: global state technique, makes state available everywhere, separate file
  // https://www.youtube.com/watch?v=b10ZHv4dKmg
  // https://www.youtube.com/watch?v=qKLA4zEUNzQ
  // live coding: 

  function handleAddBird(newBird){
    console.log("app add bird", newBird)
    setBirds([...birds, newBird])
  }

  function handleEditBird(editedBird){
    console.log("app edit bird", editedBird)
    const updatedBirds = birds.map(bird => bird.id === editedBird.id ? editedBird : bird)
    setBirds(updatedBirds)
  }

  function handleDeleteBird(deletedBird){
    console.log("app delete bird", deletedBird)
    const updatedBirds = birds.filter(bird=> bird.id !== deletedBird.id)
    setBirds(updatedBirds)
  }

  return (
    <>
    <UserProvider>
    <Header user={user}/>
    <Switch>
      <Route path='/login'>
        <Login /*setUser={setUser}*//>
      </Route>
      <Route path='/logout'>
        <Logout /*setUser={setUser}*//>
      </Route>
      <Route path='/signup'>
        <Signup /*setUser={setUser}*//>
      </Route>
      <Route path='/birds/:id/newsighting'>
        <NewSighting birds={birds}/>
      </Route>
      <Route path='/birds/new'>
        <NewBird onAddBird={handleAddBird}/>
      </Route>
      <Route path='/birds/:id/edit'>
        <EditBird 
          birds={birds} 
          onEditBird={handleEditBird}
          onDeleteBird={handleDeleteBird}
        />
      </Route>
      <Route path='/birds'>
        <Birds birds={birds}/>
      </Route>
      <Route path='/sightings'>
        <Sightings birds={birds}/>
      </Route>
      <Route path='/'>
        <Homepage /*user={user}*//>
      </Route>
    </Switch>
    </UserProvider>
    </>
  );
}

export default App;
