import React, { Component } from 'react';

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
                    <div class="collection">
                        <a href="https://projectaki.github.io/hanoi_vis/" class="collection-item" >
                            <h6 className="resp-h-size" style={{color : "black"}}>Towers of Hanoi</h6>
                            <p className="italic-style resp-p-size" style={{color : "black", paddingLeft: "5%", margin: 0}}>
                                This project is a visualisation of the towers of hanoi problem, with React.js!
                            </p>
                        </a>
                        <a href="https://projectaki.github.io/sorting_vis/" class="collection-item" >
                            <h6 className="resp-h-size" style={{color : "black"}}>Sorting visualiser:</h6>
                            <p className="italic-style resp-p-size" style={{color : "black", paddingLeft: "5%", margin: 0}}>
                                This project visualises different sorting algorithms, using React.js!
                            </p>
                        </a>
                        <a href="https://projectaki.github.io/pathfinder/" class="collection-item" >
                            <h6 className="resp-h-size" style={{color : "black"}}>Pathfinder visualiser:</h6>
                            <p className="italic-style resp-p-size" style={{color : "black", paddingLeft: "5%", margin: 0}}>
                                This project visualises different pathfinding algorithms using React.js!
                            </p>
                        </a>
                        
                        
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default Projects;