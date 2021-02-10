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
                            <li><a href="/">Home</a></li>
                            <li><a href="/Profile">Profile</a></li>
                            <li><a href="/Projects">Projects</a></li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;