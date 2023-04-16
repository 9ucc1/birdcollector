import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Homepage from './Homepage.js'
import Header from './Header.js'
import Login from './Login.js'

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/'>
        <Homepage/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
