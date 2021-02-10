import React, { Component } from 'react';
import Img from '../images/hdtri.png';
import M from 'materialize-css';
class Parallax extends Component {

    componentDidMount() {
        
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems, {});
          
    }

    render() {
        return (
            <div className="parallax-container">
                <div className="parallax">
                    <img src={Img}/>
                </div>
            </div>
        );
    }
}

export default Parallax;