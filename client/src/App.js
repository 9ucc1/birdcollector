import './App.css';
import {UserProvider} from './context/user'
import {BirdsProvider} from './context/birds'
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

  return (
    <>
    <UserProvider>
    <BirdsProvider>
      <Header/>
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
        <NewSighting/>
      </Route>
      <Route path='/sightings/:id'>
        <EditSighting/>
      </Route>
      <Route path='/birds/:id/sightings'>
        <Sighting />
      </Route>
      <Route path='/sightings'>
        <Sightings/>
      </Route>
      <Route path='/birds/new'>
        <NewBird/>
      </Route>
      <Route path='/birds/:id/edit'>
        <EditBird/>
      </Route>
      <Route path='/birds'>
        <Birds/>
      </Route>
      <Route path='/'>
        <Homepage/>
      </Route>
      </Switch>
    </BirdsProvider>
    </UserProvider>
    </>
  );
}

export default App;
