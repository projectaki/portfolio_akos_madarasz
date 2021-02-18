import React, { Component } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import PathImg from "../images/pathfinding.JPG";
import HanoiImg from "../images/hanoi.JPG";
import SortImg from "../images/sort.JPG";

class ProjectCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: 0,
        };
    }

    onChange = value => this.setState({ value });


    render() {
        return (
            <div>
                
                <Carousel 
                arrowLeft={<i style={{color: "#E4ED20"}} className="fas fa-chevron-left fa-3x"></i>} 
                arrowRight={<i style={{color: "#E4ED20"}} class="fas fa-chevron-right fa-3x" ></i>} 
                addArrowClickHandler
                slidesPerPage={1}
                clickToChange
                centered
                infinite
                value={this.state.value}
                onChange={this.onChange}
                
                
                >
                    <div style={{textAlign: "center"}}>
                        <img src={PathImg} style={{height: "30vmin", width: "30vmin"}}/>
                        <h5 style={{color: "black", paddingTop: "5vmin"}} className="resp-h6">Pathfinder</h5>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <img src={HanoiImg} style={{height: "30vmin", width: "30vmin"}}/>
                        <h5 style={{color: "black", paddingTop: "5vmin"}} className="resp-h6">Towers of Hanoi</h5>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <img src={SortImg} style={{height: "30vmin", width: "30vmin"}}/>
                        <h5 style={{color: "black", paddingTop: "5vmin"}} className="resp-h6">Sorting Visualiser</h5>
                    </div>
                    
                </Carousel>
                <div style={{paddingTop: "10vmin"}}>
                    <Dots value={this.state.value} onChange={this.onChange} number={3} />
                </div>
                
            </div>
        );
    }
}

export default ProjectCarousel;