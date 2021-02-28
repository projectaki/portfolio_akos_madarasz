import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Projects from './components/Projects';
import FrontPage from "./components/FrontPage";


function App() {
  return (
    <HashRouter basename="/">

        <Switch>
          <Route exact path = "/" component={FrontPage}/>
          <Route exact path= "/Projects" component = {Projects}/>
          <Route exact path= "/Profile" component = {Profile}/>
        </Switch>

    </HashRouter>
    



    
  );
}

export default App;
