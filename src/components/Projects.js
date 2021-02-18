import React, { Component } from 'react';
import CarouselComponent from './CarouselComponent';

class Projects extends Component {
    render() {
        return (
            <div className="project-back">
                <h5 className="bold-style resp-h-size" style={{color: "black", paddingBottom: "5vmin", paddingTop: "5vmin"}}>My Projects</h5>
                <CarouselComponent/>   
            </div>
        );
    }
}

export default Projects;