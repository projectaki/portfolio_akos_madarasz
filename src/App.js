import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CarouselComponent from './components/CarouselComponent';
import Test from "./components/Test";
import FrontPage from "./components/FrontPage";
import Footer from './components/Footer';


function App() {
  return (
    <>
    
    <HashRouter basename="/">
    
    <Navbar/>
      <>
        <Route exact path = "/" component={FrontPage}/>
        <Switch>
          
          <Route path="/Projects" component = {Projects}/>
          <Route path="/Profile" component = {Profile}/>
          <Route path="/CarouselComponent" component = {CarouselComponent}/>
          <Route path="/test" component = {Test}/>
        </Switch>
      </>
      
    </HashRouter>
    



    </>
  );
}

export default App;