import React, { Component } from 'react';
import M from "materialize-css";
import Description from "./Description";
import Work from "./Work";
import Education from "./Education";

class CarouselComponent extends Component {
    componentDidMount() {
        let car = document.querySelectorAll(".carousel");
        M.Carousel.init(car, { fullWidth: true, indicators: true});
        
    }

    nextSlide() {
        let car = document.getElementById("carousel");
        var instance = M.Carousel.getInstance(car)
        console.log(instance);
        instance.next();
    }

    prevSlide() {
        let car = document.getElementById("carousel");
        var instance = M.Carousel.getInstance(car)
        console.log(instance);
        instance.prev();
    }
    
    render() {
        return (
            <div>
                <div className="container" style={{ width: "95vw"}}>
                <div className="row" style={{display: "flex", position: "relative"}}>
                        <div className="col s1" >
                            <a onClick={this.prevSlide} style={{marginLeft: "auto",marginRight: "auto", position: "absolute", top: "50%" ,msTransform: "translateY(-50%)", transform: "translateY(-50%)",
                            fontSize: "4vw", color: "black"}}><i class="material-icons" style={{fontSize: "4vw"}}>chevron_left</i> </a>
                            
                        </div>
                        <div className="col s10">
                        <div id="carousel" class="carousel carousel-slider center" style={{height: "60vh"}}>
                            
                            <div class="carousel-item" href="#one!">
                            <a href="https://projectaki.github.io/hanoi_vis/" class="collection-item" >
                            <h6 className="resp-h-size" style={{color : "black"}}>Towers of Hanoi</h6>
                            <p className="italic-style resp-p-size" style={{color : "black", paddingLeft: "5%", margin: 0}}>
                                This project is a visualisation of the towers of hanoi problem, with React.js!
                            </p>
                        </a>
                            
                            </div>
                            <div class="carousel-item" href="#two!">
                            <a href="https://projectaki.github.io/sorting_vis/" class="collection-item" >
                            <h6 className="resp-h-size" style={{color : "black"}}>Sorting visualiser:</h6>
                            <p className="italic-style resp-p-size" style={{color : "black", paddingLeft: "5%", margin: 0}}>
                                This project visualises different sorting algorithms, using React.js!
                            </p>
                        </a>
                            </div>
                            <div class="carousel-item" href="#three!">
                            <a href="https://projectaki.github.io/pathfinder/" class="collection-item" >
                            <h6 className="resp-h-size" style={{color : "black"}}>Pathfinder visualiser:</h6>
                            <p className="italic-style resp-p-size" style={{color : "black", paddingLeft: "5%", margin: 0}}>
                                This project visualises different pathfinding algorithms using React.js!
                            </p>
                        </a>
                            </div>
                            
                        </div>
                        </div>
                        <div className="col s1" >
                            <a onClick={this.nextSlide} style={{marginLeft: "auto",marginRight: "auto", position: "absolute", top: "50%" ,msTransform: "translateY(-50%)", transform: "translateY(-50%)",
                            fontSize: "4vw", color: "black"}}><i class="material-icons" style={{fontSize: "4vw"}}>chevron_right</i></a>
                                
                            
                        
                        </div>
                        
                    </div>
                
                </div>
                
  
  
            </div>
        );
    }
}

export default CarouselComponent;