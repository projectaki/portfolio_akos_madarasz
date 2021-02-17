import React, { Component } from 'react';
import CarouselComponent from './CarouselComponent';

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="container pad-left-right">
                    <div class="row no-margin">
                        <div class="col s12 m12 no-padding">
                        <div class="card" style={{"background-color": "#7B878C"}}>
                            <div class="card-content black-text">
                            <h5 className="bold-style resp-h-size" style={{"color": "black"}}>My Projects</h5>
                            
                            <p className="italic-style resp-p-size" style={{"color": "white", paddingLeft: "0%", paddingTop: "1vh", paddingBottom: 0}}>
                                Below is a list of my visualisation projects!
                            </p>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    
                </div>
                <CarouselComponent/>
                
            </div>
        );
    }
}

export default Projects;