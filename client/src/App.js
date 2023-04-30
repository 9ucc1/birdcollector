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
import Sighting from './Sighting.js'
import NewSighting from './NewSighting.js'
import EditSighting from './EditSighting.js'

function App() {

  const user = useContext(UserContext)

  //const [user, setUser] = useState(null)//if user is null, loading message
  //use effect for when logged in, session checks for log in (check curriculum)
  //when user state exists, render route

  const [birds, setBirds] = useState([])

  useEffect(() => {
      fetch('/birds')
      .then(r=>r.json())
      .then(r=>setBirds(r))
  }, [])

  // https://www.youtube.com/watch?v=b10ZHv4dKmg
  // https://www.youtube.com/watch?v=qKLA4zEUNzQ

  function handleAddBird(newBird){
    console.log("app add bird", newBird)
    setBirds([...birds, newBird])
  }

  function handleEditBird(editedBird){
    console.log("app edit bird", editedBird)
    const updatedBirds = birds.map(bird => bird.id === editedBird.id ? editedBird : bird)
    setBirds(updatedBirds)
  }

  function handleDeleteBird(deletedBirdId){
    console.log("app delete bird", deletedBirdId)
    const updatedBirds = birds.filter(bird=> bird.id != deletedBirdId)
    console.log(updatedBirds)
    setBirds(updatedBirds)
  }

  function updateSightedBirds(sighting){
    console.log("app change bird", sighting)
    const newBird = birds.find(bird=>bird.id === sighting.bird_id)
    console.log(newBird)
  }

  return (
    <>
    <UserProvider>
    <Header user={user}/>
    <Switch>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/logout'>
        <Logout/>
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/birds/:id/newsighting'>
        <NewSighting 
          birds={birds} 
          onChangeUniqBird={updateSightedBirds}
        />
      </Route>
      <Route path='/sightings/:id'>
        <EditSighting birds={birds}
          onChangeUniqBird={updateSightedBirds}
        />
      </Route>
      <Route path='/birds/:id/sightings'>
        <Sighting />
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
        <Homepage/>
      </Route>
    </Switch>
    </UserProvider>
    </>
  );
}

export default App;
