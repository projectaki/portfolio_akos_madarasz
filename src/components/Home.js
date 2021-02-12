import React, { Component } from 'react';
import Footer from './Footer';
import {HashLink as Link} from 'react-router-hash-link';
import Parallax from './Parallax';
class Home extends Component {
    
    render() {
        return (
            <div>
                <Parallax/>
                
                    <div className="row grey darken-3 no-padding " >
                        <div className="col s12 m12 no-padding">
                        <div className="card grey darken-3 no-padding">
                            <div className="card-content white-text">
                                <div className="container pad-left-right">
                                <span className="card-title resp-h-size" style={{fontFamily: "roboto Slab", color: "#24A9F7", fontStyle: "italic"}}>Hi, I am Akos Madarasz!</span>
                            <p style={{fontFamily: "roboto Slab", fontSize: "1.3vw", paddingLeft:"2%"}} className="resp-p-size">This is my portfolio. You can find my CV under my profile section. I like to create programming projects in my free time
                                and my projects can be found under the projects tab. I am mostly interested in algorithms, data structures and mostly backend
                                development, and I have recently, slightly got into frontend to create visualisations for some of my projects! I plan on
                                continously extending my portfolio with new projects and technologies as time goes.
                            </p>
                                </div>
                            
                            <br/>
                            
                            
                            <div class="row">

                                <div className="col s0.5 offset-s9 floatingdown" style={{fontSize: "1vw"}}>
                                    <a href="https://github.com/projectaki" style={{"color":"#E620D3"}}>
                                        <i className="fab fa-github fa-3x"  ></i>
                                    </a>
                                </div>
                                <div className="col s0.5 floatingup" style={{fontSize: "1vw"}}>
                                    <a href="https://www.linkedin.com/in/akos-madarasz-b430441a1/" style={{"color":"#4844F1"}} >
                                        <i className="fab fa-linkedin fa-3x" ></i>
                                    </a>
                                </div>
                                <div className="col s0.5 floatingdown" style={{fontSize: "1vw"}}>
                                    <a href="mailto:akosegypro@gmail.com" style={{"color":"#44F153"}}>
                                        <i className="fab fa-google fa-3x "></i>
                                    </a>
                                </div>
                                

                                </div>
                            
                            
                            
                            </div>
                        </div>
                        </div>
                    </div>
                
                
                <Parallax/>
                <Footer/>
            </div>
        );
    }
}

export default Home;