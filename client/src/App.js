import './App.css';
import {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Homepage from './Homepage.js'
import Header from './Header.js'
import Login from './Login.js'
import Signup from './Signup.js'
import Logout from './Logout.js'
import Birds from './Birds.js'
import NewBird from './NewBird.js'
import EditBird from './EditBird.js'

function App() {

  const [user, setUser] = useState(null)
  const [birds, setBirds] = useState([])

  useEffect(() => {
      fetch('/birds')
      .then(r=>r.json())
      .then(r=>setBirds(r))
  }, [])

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
    <Header user={user}/>
    <Switch>
      <Route path='/login'>
        <Login setUser={setUser}/>
      </Route>
      <Route path='/logout'>
        <Logout setUser={setUser}/>
      </Route>
      <Route path='/signup'>
        <Signup setUser={setUser}/>
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
      <Route path='/'>
        <Homepage user={user}/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
