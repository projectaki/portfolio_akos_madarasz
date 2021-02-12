import React, { Component } from 'react';
import ImgProfile from '../images/me.jpg';
import {HashLink as Link} from 'react-router-hash-link';

class Picture extends Component {
    render() {
        return (
            <div>
                <div>
                
                <div className="card" style={{"background-color": "#d9b382"}}>
                    <div className="card-image">
                        <img className="activator" src={ImgProfile} alt="Akos Madarasz"/>
                        
                    </div>
                    <div className="card-content profile-pad">
                        <h6 className=" grey-text text-darken-4 resp-h-size">
                            Akos Madarasz
                        </h6>
                        <p className="resp-p-size">Software developer</p>
                    </div>
                    
            </div>
            </div>
            </div>
        );
    }
}

export default Picture;