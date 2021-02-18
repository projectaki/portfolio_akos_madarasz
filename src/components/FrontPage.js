import React, { Component } from 'react';
import Img from "../images/logo.png";


class FrontPage extends Component {
    render() {
        return (
            <div className="grey darken-3" style={{height: ""}}>
                <div style={{position: "absolute", top: "53%", left: "50%", transform: "translate(-55%, -50%)"}}>
                    <div className="logofloatdown">
                    <img src={Img} style={{height: "30vmin", width: "40vmin"}}></img>
                    </div>
                    
                </div>
                <div class="row" style={{position: "absolute", top: "65%", left: "98%", transform: "translate(-65%, -98%)", width: "40vmin"}} >

                                <div className="col s1 " style={{fontSize: "2vmin", paddingLeft: "", paddingRight: "6vmin"}}>
                                    <a href="https://github.com/projectaki" style={{"color":"#9a43a7"}}>
                                        <i className="fab fa-github fa-3x"  ></i>
                                    </a>
                                </div>
                                <div className="col s1 " style={{fontSize: "2vmin", paddingLeft: "", paddingRight: ""}}>
                                    <a href="https://www.linkedin.com/in/akos-madarasz-b430441a1/" style={{"color":"#0a66c2"}} >
                                        <i className="fab fa-linkedin fa-3x" ></i>
                                    </a>
                                </div>
                                <div className="col s1 " style={{fontSize: "2vmin", paddingLeft: "6vmin", paddingRight: ""}}>
                                    <a href="mailto:akosegypro@gmail.com" style={{"color":"#0f9d58"}}>
                                        <i className="fab fa-google fa-3x "></i>
                                    </a>
                                </div>
                                

                                </div>
                            
        </div>
        );
    }
}

export default FrontPage;