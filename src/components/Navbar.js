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
                <nav class="nav-center grey darken-4" role="navigation">
                    <div class="nav-wrapper container">
                        <Link to="/" data-target="slide-out" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </Link>
                        <ul id="nav-mobile" class="hide-on-med-and-down">
                            <li  style={{fontFamily: "League Spartan"}}>
                                <Link style={{color:"#E4ED20", fontSize:"2.5vmin"}} to="/">Home</Link>
                                
                            </li>
                            <li  style={{fontFamily: "League Spartan"}}>
                                <Link style={{color:"#E4ED20", fontSize:"2.5vmin"}} to="/Profile">About</Link>
                            </li>
                            <li  style={{fontFamily: "League Spartan"}}>
                                <Link style={{color:"#E4ED20", fontSize:"2.5vmin"}} to="/Projects">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <ul id="slide-out" class="sidenav grey darken-3" style={{width: "100%"}}>
                    <li className="sidenav-close" style={{position: "absolute", left: "50%", transform: "translateX(-55%)"}}>
                        <Link to="/" style={{color: "white"}}>Home</Link>
                        
                    </li>
                    <li className="sidenav-close" style={{position: "absolute", left: "50%",top:"10%", transform: "translateX(-55%)"}}>
                        <Link to="/Profile" style={{color: "white"}}>Profile</Link>
                    </li>
                    <li className="sidenav-close" style={{position: "absolute", left: "50%", top:"20%", transform: "translateX(-55%)"}}>
                        <Link to="/Projects" style={{color: "white"}}>Projects</Link>
                    </li>
                </ul>
                
            </>
        );
    }
}

export default Navbar;