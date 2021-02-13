import React, { Component } from 'react';
import Footer from './Footer';
import {HashLink as Link} from 'react-router-hash-link';
import Parallax from './Parallax';
class Home extends Component {
    
    render() {
        return (
            <div>
                <Parallax/>
                
                    <div className="row grey darken-3" style={{paddingBottom: "2vh", paddingTop: "3vh", marginBottom: 0}} >
                        
                        
                            
                                <div className="container pad-left-right">
                                <span className="resp-h-size" style={{fontFamily: "roboto Slab", color: "#24A9F7", fontStyle: "italic"}}>Hi, I am Akos!</span>
                            <p style={{fontFamily: "roboto Slab", fontSize: "1.3vw", paddingLeft:"2%", color: "white"}} className="resp-p-size">This is my portfolio. You can find my CV under my profile section. I like to create programming projects in my free time
                                and my projects can be found under the projects tab. I am mostly interested in algorithms, data structures and I prefer backend
                                development, but I have recently, slightly got into frontend to create visualisations for some of my projects! I plan on
                                continously extending my portfolio with new projects and technologies as time goes.
                            </p>
                                </div>

                    </div>
                    <div class="row grey darken-3" style={{paddingBottom: "4vh", marginBottom: 0}} >

                                <div className="col s0.5 offset-s8 floatingdown" style={{fontSize: "1vw", paddingLeft: "1vw", paddingRight: "1vw"}}>
                                    <a href="https://github.com/projectaki" style={{"color":"#9a43a7"}}>
                                        <i className="fab fa-github fa-3x"  ></i>
                                    </a>
                                </div>
                                <div className="col s0.5 floatingup" style={{fontSize: "1vw", paddingLeft: "1vw", paddingRight: "1vw"}}>
                                    <a href="https://www.linkedin.com/in/akos-madarasz-b430441a1/" style={{"color":"#0a66c2"}} >
                                        <i className="fab fa-linkedin fa-3x" ></i>
                                    </a>
                                </div>
                                <div className="col s0.5 floatingdown" style={{fontSize: "1vw", paddingLeft: "1vw", paddingRight: "1vw"}}>
                                    <a href="mailto:akosegypro@gmail.com" style={{"color":"#0f9d58"}}>
                                        <i className="fab fa-google fa-3x "></i>
                                    </a>
                                </div>
                                

                                </div>
                
                
                <Parallax/>
                <Footer/>
            </div>
        );
    }
}

export default Home;