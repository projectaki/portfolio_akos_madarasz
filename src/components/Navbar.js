import React, { Component } from 'react';
import {HashLink as Link} from 'react-router-hash-link';
class Navbar extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          });
    }
    
    render() {
        return (
            <>
                <nav class="nav-center grey darken-3" role="navigation">
                    <div class="nav-wrapper container">
                        <Link to="/" data-target="slide-out" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </Link>
                        <ul id="nav-mobile" class="hide-on-med-and-down">
                            <li>
                                <Link to="/">Home</Link>
                                
                            </li>
                            <li>
                                <Link to="/Profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/Projects">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <ul id="slide-out" class="sidenav grey darken-3">
                    <li className="sidenav-close" >
                        <Link to="/" style={{color: "white"}}>Home</Link>
                        
                    </li>
                    <li className="sidenav-close">
                        <Link to="/Profile" style={{color: "white"}}>Profile</Link>
                    </li>
                    <li className="sidenav-close">
                        <Link to="/Projects" style={{color: "white"}}>Projects</Link>
                    </li>
                </ul>
                
            </>
        );
    }
}

export default Navbar;