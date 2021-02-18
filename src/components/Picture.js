import React, { Component } from 'react';
import ImgProfile from '../images/me.jpg';
import {HashLink as Link} from 'react-router-hash-link';

class Picture extends Component {
    render() {
        return (
            <div>
                <div>

                        <img src={ImgProfile} alt="Akos Madarasz" style={{height: "40vmin"}}/>
                        
                    
            </div>
            </div>
        );
    }
}

export default Picture;