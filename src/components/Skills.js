import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                
                        <h6 className="" style={{paddingTop:"5vmin", paddingBottom: "8vh", color: "#66FCF1", fontSize: "4vmin", fontFamily: "League Spartan"}}>
                            Skills
                        </h6>
                        <div style={{width: "100%", height: "10vh"}} >
                            <div style={{margin: "0 auto", width: "80%"}}>
                            <div style={{paddingRight: "8vmin", fontSize: "2vmin", color:"white"}} className="left">
                                <i class="fab fa-java fa-2x" ></i><span className="resp-p-size league-spartan" style={{paddingBottom: 0, color: "beige", paddingLeft: "1vmin"}}>Java</span>
                            </div>
                            <div style={{paddingRight: "8vmin", fontSize: "2vmin", color:"white"}} className="left">
                                <i class="fab fa-python fa-2x"></i><span className="resp-p-size league-spartan" style={{paddingBottom: 0, color: "beige", paddingLeft: "1vmin"}}>Python</span>
                            </div>

                            <div style={{paddingRight: "8vmin", fontSize: "2vmin", color:"white"}} className="left">
                            <i class="fab fa-microsoft fa-2x"></i><span className="resp-p-size league-spartan" style={{paddingBottom: 0, color: "beige", paddingLeft: "1vmin"}}>C#</span>
                            </div>

                            <div style={{paddingRight: "8vmin", fontSize: "2vmin", color:"white"}} className="left">
                                <i class="fab fa-js fa-2x"></i><span className="resp-p-size league-spartan" style={{paddingBottom: 0, color: "beige", paddingLeft: "1vmin"}}>JavaScript</span>
                            </div>
                            
                            <div style={{paddingRight: 0, fontSize: "2vmin", color:"white"}} className="left">
                            <i class="fas fa-database fa-2x"></i><span className="resp-p-size league-spartan" style={{paddingBottom: 0, color: "beige", paddingLeft: "1vmin"}}>SQL</span>
                            </div>
                            </div>
                            
                        </div>
                        
                        
                        
                        
                        
                        
                 
                
            </div>
        );
    }
}

export default Skills;