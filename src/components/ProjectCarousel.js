import React, { Component } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Img from "../images/folder.png";


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
                arrowLeft={<i style={{color: "#40a0e0"}} className="fas fa-chevron-left fa-3x"></i>} 
                arrowRight={<i style={{color: "#40a0e0"}} class="fas fa-chevron-right fa-3x" ></i>} 
                addArrowClickHandler
                slidesPerPage={1}
                clickToChange
                centered
                infinite
                value={this.state.value}
                onChange={this.onChange}
                >
                    <div style={{textAlign: "center"}}>
                    <a href="https://projectaki.github.io/pathfinder/" class="collection-item" >
                        <img src={Img} style={{height: "30vmin", width: "30vmin"}}/>
                    </a>
                        
                        <h5 style={{color: "#40a0e0", paddingTop: "5vmin"}} className="resp-h6 league-spartan">Pathfinder</h5>
                    </div>
                    <div style={{textAlign: "center"}}>
                    <a href="https://projectaki.github.io/hanoi_vis/" class="collection-item" >
                        <img src={Img} style={{height: "30vmin", width: "30vmin"}}/>
                    </a>
                        
                        <h5 style={{color: "#40a0e0", paddingTop: "5vmin"}} className="resp-h6 league-spartan">Towers of Hanoi</h5>
                    </div>
                    <div style={{textAlign: "center"}}>
                    <a href="https://projectaki.github.io/sorting_vis/" class="collection-item" >
                        <img src={Img} style={{height: "30vmin", width: "30vmin"}}/>
                    </a>
                        
                        <h5 style={{color: "#40a0e0", paddingTop: "5vmin"}} className="resp-h6 league-spartan">Sorting Visualiser</h5>
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