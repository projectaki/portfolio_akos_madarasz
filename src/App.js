import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Home from './components/Home';
import Navbar from './components/Navbar'



function App() {
  return (
    <>
    
    <Router>
    <Navbar />
    
      <>
        <Route exact path = "/" component={Home}/>
        <Switch>
          
          <Route path="/Projects" component = {Projects}/>
          <Route path="/Profile" component = {Profile}/>
        </Switch>
      </>
      
    </Router>



    </>
  );
}

export default App;
