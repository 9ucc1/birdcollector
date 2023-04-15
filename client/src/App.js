import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Homepage from './Homepage.js'
import Header from './Header.js'

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path='/'>
        <Homepage/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
