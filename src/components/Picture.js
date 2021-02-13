import React, { Component } from 'react';
import ImgProfile from '../images/me.jpg';
import {HashLink as Link} from 'react-router-hash-link';

class Picture extends Component {
    render() {
        return (
            <div>
                <div>
                
                <div className="card" style={{"background-color": "#7A71AA", marginBottom: 0}}>
                    <div className="card-image">
                        <img className="activator" src={ImgProfile} alt="Akos Madarasz"/>
                        
                    </div>
                    <div className="card-content profile-pad">
                        <h6 className=" black-text resp-h-size">
                            Akos Madarasz
                        </h6>
                        <p className="white-text resp-p-size" style={{fontStyle: "italic"}}>Software developer</p>
                    </div>
                    
            </div>
            </div>
            </div>
        );
    }
}

export default Picture;