import React, { Component } from 'react';
import ProjectCarousel from './ProjectCarousel';
import Navbar from "./Navbar";
class Projects extends Component {
    render() {
        return (
            <div className=" project-back">
                <Navbar/>
                <div className="container" style={{paddingTop: "15vmin"}}>
                <ProjectCarousel/>   
                </div>
                
            </div>
        );
    }
}

export default Projects;