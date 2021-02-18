import React, { Component } from 'react';
import ProjectCarousel from './ProjectCarousel';

class Projects extends Component {
    render() {
        return (
            <div className="project-back">
                <h5 className="bold-style resp-h-size" style={{color: "black", paddingBottom: "15vmin", paddingTop: "5vmin"}}>&lt;Projects&gt;</h5>
                <div className="container">
                <ProjectCarousel/>   
                </div>
                
            </div>
        );
    }
}

export default Projects;