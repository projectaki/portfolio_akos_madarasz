import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="container pad-left-right">
                    <div class="row no-margin">
                        <div class="col s12 m12 no-padding">
                        <div class="card yellow darken-2">
                            <div class="card-content black-text">
                            <span class="card-title">My Projects</span>
                            <p>
                                Below is a list of my projects!
                            </p>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    <div class="collection">
                        <a href="https://projectaki.github.io/hanoi_vis/" class="collection-item">
                            <h6 style={{color : "black"}}>Towers of Hanoi</h6>
                            <p className="italic-style" style={{color : "orange"}}>
                                This project is a visualisation of the towers of hanoi problem, with React.js!
                            </p>
                        </a>
                        <a href="https://projectaki.github.io/sorting_vis/" class="collection-item">
                            <h6 style={{color : "black"}}>Sorting visualiser:</h6>
                            <p className="italic-style" style={{color : "orange"}}>
                                This project visualises different sorting algorithms, using React.js!
                            </p>
                        </a>
                        <a href="https://projectaki.github.io/pathfinder/" class="collection-item">
                            <h6 style={{color : "black"}}>Pathfinder visualiser:</h6>
                            <p className="italic-style" style={{color : "orange"}}>
                                This project visualises different pathfinding algorithms using React.js!
                            </p>
                        </a>
                        <a href="https://projectaki.github.io/sudoku_vis/" class="collection-item">
                            <h6 style={{color : "black"}}>Sudoku solver:</h6>
                            <p className="italic-style" style={{color : "orange"}}>
                                This is a visualisation of a sudoku solver. The algorithm solves the sudoku, and fills out the boxes. Made with React.js!
                            </p>
                        </a>
                        
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default Projects;