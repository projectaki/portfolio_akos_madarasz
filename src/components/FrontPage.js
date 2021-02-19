import React, { Component } from 'react';
import Img from "../images/logo.png";
import Navbar from "./Navbar";

class FrontPage extends Component {
    render() {
        return (
            <div  >
                <Navbar/>
                <div style={{position: "absolute", top: "54%", left: "50%", transform: "translate(-55%, -50%)"}}>
                    <div className="logofloatdown">
                    <img src={Img} style={{height: "28vmin", width: "38vmin"}}></img>
                    </div>
                    
                </div>
                <div class="row contact-positions"  >

                
                <div className="col s2 " style={{fontSize: "2vmin", paddingLeft: 0, paddingRight: 0, width: "6vmin"}}>
                    <center><a href="https://www.linkedin.com/in/akos-madarasz-b430441a1/" style={{"color":"#0a66c2"}} >
                        <i className="fab fa-linkedin fa-3x" ></i>
                    </a></center>
                    
                </div>
                <div className="col s2 " style={{fontSize: "2vmin", paddingLeft: 0, paddingRight: 0, width: "6vmin", marginLeft: "2vmin"}}>
                    <a href="https://github.com/projectaki" style={{"color":"#9a43a7"}}>
                        <i className="fab fa-github fa-3x"  ></i>
                    </a>
                </div>
                                
                                

                                </div>
                            
        </div>
        );
    }
}

export default FrontPage;