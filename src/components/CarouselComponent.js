import React, { Component } from 'react';
import M from "materialize-css";
import Description from "./Description";
import Work from "./Work";
import Education from "./Education";
import PathImg from "../images/pathfinding.JPG";
import HanoiImg from "../images/hanoi.JPG";
import SortImg from "../images/sort.JPG";

class CarouselComponent extends Component {
    componentDidMount() {
        
        let car = document.querySelectorAll(".carousel");
        M.Carousel.init(car, {indicators: true, fullWidth: false, dist: 0});
        console.log(M.Carousel);
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
                
                <div className="row" >
                        <div className="col s1" >
                            <a onClick={this.prevSlide} style={{marginLeft: "auto",marginRight: "auto", position: "absolute", top: "50%" ,msTransform: "translateY(-50%)", transform: "translate(-50%, -50%)",
                            fontSize: "8vmin", color: "black"}}><i class="material-icons" style={{fontSize: "8vmin"}}>chevron_left</i> </a>
                            
                        </div>
                        <div className="col s10" >
                        <div id="carousel" class="carousel carousel-slider center" style={{height: "60vmin"}}>
                            
                            <div class="carousel-item" href="#one!" >
                                <a href="https://projectaki.github.io/hanoi_vis/" class="collection-item" >
                                    <img src={HanoiImg} style={{width: "30vmin", height: "30vmin", position: "absolute", top: "50%", transform: "translate(-50%,-50%)",paddingBottom: "5vmin"}}></img>
                                    <label style={{left: "50%" ,transform: "translateX(-50%)", position: "absolute", fontSize: "3vmin"}}>Towers of Hanoi</label>
                                </a>
                            
                            </div>
                            <div class="carousel-item" href="#two!">
                                <a href="https://projectaki.github.io/sorting_vis/" class="collection-item" >
                                    <img src={SortImg} style={{width: "30vmin", height: "30vmin", position: "absolute", top: "50%", transform: "translate(-50%,-50%)"}}></img>
                                    <label style={{left: "50%" ,transform: "translateX(-50%)", position: "absolute", fontSize: "3vmin"}}>Sorting visualiser</label>
                                </a>
                            </div>
                            <div class="carousel-item" href="#three!">
                                <a href="https://projectaki.github.io/pathfinder/" class="collection-item" >
                                    <img src={PathImg} style={{width: "30vmin", height: "30vmin", position: "absolute", top: "50%", transform: "translate(-50%,-50%)"}}></img>
                                    <label style={{left: "50%" ,transform: "translateX(-50%)", position: "absolute", fontSize: "3vmin"}}>Pathfinding</label>
                                </a>
                            </div>
                            
                        </div>
                        </div>
                        <div className="col s1" >
                            <a onClick={this.nextSlide} style={{marginLeft: "auto",marginRight: "auto", position: "absolute", top: "50%" ,msTransform: "translateY(-50%)", transform: "translate(-50%, -50%)",
                            fontSize: "8vmin", color: "black"}}><i class="material-icons" style={{fontSize: "8vmin"}}>chevron_right</i></a>
                                
                            
                        
                        </div>
                        
                    </div>
                
                
                
  
  
            </div>
        );
    }
}

export default CarouselComponent;