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
                        <ul>
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
            </>
        );
    }
}

export default Navbar;