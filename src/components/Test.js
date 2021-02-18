import React, { Component } from 'react';


import Img from "../images/logo.png";


class Test extends Component {

    
    render() {
        return (
            <div className="grey darken-3" style={{height: "100vh"}}>
                <div style={{position: "absolute", top: "55%", left: "50%", transform: "translate(-55%, -50%)"}}>
                    <div className="logofloatdown">
                    <img src={Img} style={{height: "60vmin", width: "70vmin"}}></img>
                    </div>
                    
                 </div>
                                
            </div>
            
        );
    }
}

export default Test;