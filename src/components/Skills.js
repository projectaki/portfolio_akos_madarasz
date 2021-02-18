import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                
                        <h5 className="bold-style text-darken-4 resp-h-size" style={{paddingBottom: "5vh", color: "beige"}}>
                            &lt;Skills&gt;
                        </h5>
                        <div className="container" style={{width: "18vmin"}}>
                            <div style={{paddingBottom: "2vmin", fontSize: "2vmin"}} className="left">
                                <i class="fab fa-java fa-2x" ></i><span className="resp-p-size" style={{paddingBottom: 0, color: "beige", paddingLeft: "1vmin"}}>Java</span>
                            </div>
                            <div style={{paddingBottom: "2vmin", fontSize: "2vmin"}} className="left">
                                <i class="fab fa-python fa-2x"></i><span className="resp-p-size" style={{paddingBottom: 0, color: "beige", paddingLeft: "1vmin"}}>Python</span>
                            </div>

                            <div style={{paddingBottom: "2vmin", fontSize: "2vmin"}} className="left">
                            <i class="fab fa-microsoft fa-2x"></i><span className="resp-p-size" style={{paddingBottom: 0, color: "beige", paddingLeft: "1vmin"}}>C#</span>
                            </div>

                            <div style={{paddingBottom: "2vmin", fontSize: "2vmin"}} className="left">
                                <i class="fab fa-js fa-2x"></i><span className="resp-p-size" style={{paddingBottom: 0, color: "beige", paddingLeft: "1vmin"}}>JavaScript</span>
                            </div>
                            
                            <div style={{paddingBottom: "2vmin", fontSize: "2vmin"}} className="left">
                            <i class="fas fa-database fa-2x"></i><span className="resp-p-size" style={{paddingBottom: 0, color: "beige", paddingLeft: "1vmin"}}>SQL</span>
                            </div>
                        </div>
                        
                        
                        
                        
                        
                        
                 
                
            </div>
        );
    }
}

export default Skills;