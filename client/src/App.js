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

const initialState = {
  birds: [],
  error: null,
  status: "pending",
};

function App() {

  const user = useContext(UserContext)

  const [{birds, error, status}, setState] = useState(initialState)

  //const [user, setUser] = useState(null)//if user is null, loading message
  //use effect for when logged in, session checks for log in (check curriculum)
  //when user state exists, render route

  //const [birds, setBirds] = useState([])

  //const [sightings, setSightings] = useState([])

  useEffect(() => {
    setState(initialState)
      fetch('/birds')
      .then(r=>{
      if (r.ok){
        r.json().then((birds) => setState({birds, error: null, status: "ok"}))
      } else {
        r.json().then((message)=> setState({birds: null, error: message.error, status: "no"}))
      }})
      //.then(r=>r.json())
      //.then(r=>setBirds(r))
  }, [])

  //if (status === "ok") return <h4>Loading...</h4>
  if (status === "no") return <h4>{error}</h4>

  // https://www.youtube.com/watch?v=b10ZHv4dKmg
  // https://www.youtube.com/watch?v=qKLA4zEUNzQ

  function handleAddBird(newBird){
    console.log("app add bird", newBird)
    //setBirds([...birds, newBird])
    setState({birds: [...birds, newBird]}, error, status)
  }

  function handleEditBird(editedBird){
    console.log("app edit bird", editedBird)
    const updatedBirds = birds.map(bird => bird.id === editedBird.id ? editedBird : bird)
    //setBirds(updatedBirds)
    setState({birds: updatedBirds}, error, status)
  }

  function handleDeleteBird(deletedBirdId){
    console.log("app delete bird", deletedBirdId)
    const updatedBirds = birds.filter(bird=> bird.id != deletedBirdId)
    console.log(updatedBirds)
    //setBirds(updatedBirds)
    setState({birds: updatedBirds}, error, status)
  }

  /*function handleAddSighting(newSighting){
    console.log("app add sighting", newSighting)
    const birdToUpdate = birds.find(bird=>bird.id === newSighting.bird_id)
    const updatedSightings = [...birdToUpdate.sightings, newSighting]
    birdToUpdate.sightings = updatedSightings
    const updatedBirdState = birds.map((bird) => bird.id === birdToUpdate.id ? birdToUpdate : bird)
    //setBirds(updatedBirdState)
    setState({birds: updatedBirdState}, error, status)
  }*/

  function handleDeleteSighting(deletedSightingId, userBirdId){
    //if you just have sighting id how do you get its bird?
    //const sighting = user.sightings.find(sighting=>sighting.id == deletedSightingId)
    //const birdId = sighting.bird_id
    //const birdToUpdate = birds.find(bird=>bird.id == birdId)
    const birdToUpdate = birds.find(bird=>bird.id==userBirdId)
    const sightingsToUpdate = birdToUpdate.sightings
    const updatedSightings = sightingsToUpdate.filter(sighting=> sighting.id != deletedSightingId)
    birdToUpdate.sightings = updatedSightings
    const updatedBirdState = birds.map(bird=>bird.id === birdToUpdate.id ? birdToUpdate : bird)
    //setBirds(updatedBirdState)
    setState({birds: updatedBirdState}, error, status)
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
          //onAddSighting={handleAddSighting}
        />
      </Route>
      <Route path='/sightings/:id'>
        <EditSighting onDeleteSighting={handleDeleteSighting}/>
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
