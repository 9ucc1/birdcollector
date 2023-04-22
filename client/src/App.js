import './App.css';
import {useState} from 'react'
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
        <NewBird/>
      </Route>
      <Route path='/birds/:id/edit'>
        <EditBird/>
      </Route>
      <Route path='/birds'>
        <Birds/>
      </Route>
      <Route path='/'>
        <Homepage user={user}/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
