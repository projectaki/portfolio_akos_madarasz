import React, { Component } from 'react';
import Footer from './Footer';
import {HashLink as Link} from 'react-router-hash-link';
import Parallax from './Parallax';
import Img from '../images/mountain2.jpg';
class Home extends Component {
    
    render() {
        return (
            <div>
                
                
                    <div >
                        
                        
                            
                                <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "60vw"}}>
                                    <h5 className="resp-h-size" style={{fontFamily: "roboto Slab", color: "white", fontStyle: "italic", fontSize: "4vmin"}}>Hi, I am Akos!</h5>
                                        <p style={{color: "white"}} className="screen-p">I am a software developer. You can find my CV under the About section. I like to create programming projects in my free time
                                            and my projects can be found under the projects tab. I am mostly interested in algorithms, data structures and I prefer backend
                                            development, but I have recently, slightly got into frontend to create visualisations for some of my projects! I plan on
                                            continously extending my portfolio with new projects and technologies as time goes.
                                        </p>
                                </div>
                                <div class="row" style={{position: "absolute", top: "90%", left: "90%", transform: "translate(-90%, -90%)"}} >

                                <div className="col s1 floatingdown" style={{fontSize: "1vw", paddingLeft: "1vw", paddingRight: "1vw"}}>
                                    <a href="https://github.com/projectaki" style={{"color":"#9a43a7"}}>
                                        <i className="fab fa-github fa-3x"  ></i>
                                    </a>
                                </div>
                                <div className="col s1 floatingup" style={{fontSize: "1vw", paddingLeft: "3vw", paddingRight: "1vw"}}>
                                    <a href="https://www.linkedin.com/in/akos-madarasz-b430441a1/" style={{"color":"#0a66c2"}} >
                                        <i className="fab fa-linkedin fa-3x" ></i>
                                    </a>
                                </div>
                                <div className="col s1 floatingdown" style={{fontSize: "1vw", paddingLeft: "3vw", paddingRight: "1vw"}}>
                                    <a href="mailto:akosegypro@gmail.com" style={{"color":"#0f9d58"}}>
                                        <i className="fab fa-google fa-3x "></i>
                                    </a>
                                </div>
                                

                                </div>

                    </div>
                    
                
                
                
                
            </div>
        );
    }
}

export default Home;