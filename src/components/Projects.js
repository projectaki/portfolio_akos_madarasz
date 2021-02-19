import React, { Component } from 'react';
import ProjectCarousel from './ProjectCarousel';

class Projects extends Component {
    render() {
        return (
            <div className=" project-back">
                <h5 className="bold-style resp-h-size league-spartan " style={{color: "black", paddingBottom: "15vmin", paddingTop: "5vmin"}}>Projects</h5>
                <div className="container">
                <ProjectCarousel/>   
                </div>
                
            </div>
        );
    }
}

export default Projects;