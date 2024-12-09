import React, { Component } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Img from "../images/folder.png";

class ProjectCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  onChange = (value) => this.setState({ value });

  render() {
    return (
      <div>
        <Carousel
          arrowLeft={
            <i
              style={{ color: "#66FCF1" }}
              className="fas fa-chevron-left fa-3x"
            ></i>
          }
          arrowRight={
            <i
              style={{ color: "#66FCF1" }}
              class="fas fa-chevron-right fa-3x"
            ></i>
          }
          addArrowClickHandler
          slidesPerPage={1}
          clickToChange
          centered
          infinite
          value={this.state.value}
          onChange={this.onChange}
        >
          <div style={{ textAlign: "center" }}>
            <a
              href="https://projectaki.github.io/movie-react/"
              class="collection-item"
            >
              <div style={{ position: "relative", textAlign: "center" }}>
                <img src={Img} style={{ height: "40vmin", width: "50vmin" }} />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontFamily: "League Spartan",
                    color: "black",
                    fontSize: "3vmin",
                  }}
                >
                  Movie app
                </div>
              </div>
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://projectaki.github.io/pathfinder/"
              class="collection-item"
            >
              <div style={{ position: "relative", textAlign: "center" }}>
                <img src={Img} style={{ height: "40vmin", width: "50vmin" }} />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontFamily: "League Spartan",
                    color: "black",
                    fontSize: "3vmin",
                  }}
                >
                  Pathfinder
                </div>
              </div>
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://projectaki.github.io/hanoi_vis/"
              class="collection-item"
            >
              <div style={{ position: "relative", textAlign: "center" }}>
                <img src={Img} style={{ height: "40vmin", width: "50vmin" }} />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontFamily: "League Spartan",
                    color: "black",
                    fontSize: "3vmin",
                  }}
                >
                  Towers of Hanoi
                </div>
              </div>
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://projectaki.github.io/sorting_vis/"
              class="collection-item"
            >
              <div style={{ position: "relative", textAlign: "center" }}>
                <img src={Img} style={{ height: "40vmin", width: "50vmin" }} />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontFamily: "League Spartan",
                    color: "black",
                    fontSize: "3vmin",
                  }}
                >
                  Sorting visualiser
                </div>
              </div>
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              href="https://projectaki.github.io/sudoku_vis/"
              class="collection-item"
            >
              <div style={{ position: "relative", textAlign: "center" }}>
                <img src={Img} style={{ height: "40vmin", width: "50vmin" }} />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontFamily: "League Spartan",
                    color: "black",
                    fontSize: "3vmin",
                  }}
                >
                  Sudoku solver
                </div>
              </div>
            </a>
          </div>
          {/* <div style={{ textAlign: "center" }}>
            <a
              href="https://spring-mongo-react.herokuapp.com/#/"
              class="collection-item"
            >
              <div style={{ position: "relative", textAlign: "center" }}>
                <img src={Img} style={{ height: "40vmin", width: "50vmin" }} />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontFamily: "League Spartan",
                    color: "black",
                    fontSize: "3vmin",
                  }}
                >
                  Todo notes (Mongodb + spring boot + React)
                </div>
              </div>
            </a>
          </div> */}
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
