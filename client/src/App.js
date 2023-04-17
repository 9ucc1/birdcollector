import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Homepage from './Homepage.js'
import Header from './Header.js'
import Login from './Login.js'
import Signup from './Signup.js'
import Logout from './Logout.js'

function App() {
  return (
    <>
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
      <Route path='/'>
        <Homepage/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
