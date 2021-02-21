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
                arrowLeft={<i style={{color: "#66FCF1"}} className="fas fa-chevron-left fa-3x"></i>} 
                arrowRight={<i style={{color: "#66FCF1"}} class="fas fa-chevron-right fa-3x" ></i>} 
                addArrowClickHandler
                slidesPerPage={1}
                clickToChange
                centered
                infinite
                value={this.state.value}
                onChange={this.onChange}
                >
                    <div style={{textAlign: "center"}} >
                    <h5 style={{color: "#E4ED20", paddingBottom: "5vmin", fontFamily: "League Spartan"}} className="resp-h6 text-border-black">&lt;Pathfinder&gt;</h5>
                    <a href="https://projectaki.github.io/pathfinder/" class="collection-item" >
                        <img src={Img} style={{height: "40vmin", width: "50vmin"}} className="floatingup"/>
                    </a>
                        
                        
                    </div>
                    <div style={{textAlign: "center"}}>
                    <h5 style={{color: "#E4ED20", fontFamily: "League Spartan"}} className="resp-h6 text-border-black">Towers of Hanoi</h5>
                    <a href="https://projectaki.github.io/hanoi_vis/" class="collection-item" >
                        <img src={Img} style={{height: "40vmin", width: "50vmin"}} className="floatingdown"/>
                    </a>
                        
                        
                    </div>
                    <div style={{textAlign: "center"}}>
                    <h5 style={{color: "#E4ED20", fontFamily: "League Spartan"}} className="resp-h6 text-border-black">Sorting Visualiser</h5>
                    <a href="https://projectaki.github.io/sorting_vis/" class="collection-item" >
                        <img src={Img} style={{height: "40vmin", width: "50vmin"}} className="floatingdown"/>
                    </a>
                        
                        
                    </div>
                    
                </Carousel>
                {/* 
                <div style={{paddingTop: "10vmin"}}>
                          
                    <Dots value={this.state.value} onChange={this.onChange} number={3} />
                </div>
                */}
                
            </div>
        );
    }
}

export default ProjectCarousel;