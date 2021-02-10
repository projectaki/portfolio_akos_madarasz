import React, { Component } from 'react';
import ImgProfile from '../images/me.jpg';
import {HashLink as Link} from 'react-router-hash-link';

class Picture extends Component {
    render() {
        return (
            <div>
                <div>
                
                <div className="card">
                    <div className="card-image">
                        <img className="activator" src={ImgProfile} alt="Akos Madarasz"/>
                        
                    </div>
                    <div className="card-content">
                        <span className="card-title  grey-text text-darken-4">
                            Akos Madarasz
                        </span>
                        <p>Software developer</p>
                    </div>
                    
            </div>
            </div>
            </div>
        );
    }
}

export default Picture;