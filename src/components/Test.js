import React, { Component } from 'react';
import Navbar from "./Navbar";
import Description from "./Description";
import Work from "./Work";
import Education from "./Education";
import Skills from "./Skills";
class Test extends Component {
    render() {
        return (
            <div>
                
                <div className="scrollcont">
                    <section className="scroll padding-profile" style={{backgroundColor: "beige", paddingTop: "15vh", paddingBottom: "auto"}}>
                    <Description/>
                    </section>
                    <section className="scroll padding-profile" id="sec2" style={{backgroundColor: "grey", paddingTop: "15vh"}}>
                        <Work/>
                    </section>
                    <section className="scroll padding-profile" style={{backgroundColor: "beige",  paddingTop: "15vh"}}>
                        <Education/>
                    </section>
                    
                    <section className="scroll padding-profile" style={{backgroundColor: "grey",  paddingTop: "15vh"}}>
                        <Skills/>
                    </section>
                    <section className="scroll padding-profile" style={{backgroundColor: "beige",  paddingTop: "15vh"}}>
                        
                        <h5 className="bold-style resp-h-size" style={{"color": "black", paddingLeft: 0, paddingBottom: "5vh"}}>Contributions</h5>
                        <h6 className="resp-h6" style={{paddingLeft: 0, color: "black"}}>
                                    Research paper:
                                </h6>
                                <a href="https://www.scitepress.org/PublicationsDetail.aspx?ID=n0qtGGKt5S4%3D&t=1&fbclid=IwAR0fxltFsLpdHYi3Mk2yzlKEke0ynLlgZ-I1USYuO5Ezt32T6VbKG7MBREQ">
                                    <p style={{textDecoration: "underline", color: "#165896", fontSize:"1.1vw"}}>
                                        Real-time Visualization of Sensor Data in Smart Manufacturing using Lambda Architecture
                                    </p>
                                </a>
                    </section>
                    
                </div>
                


            </div>
        );
    }
}

export default Test;