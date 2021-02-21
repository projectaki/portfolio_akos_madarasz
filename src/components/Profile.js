import React, { Component } from 'react';
import Description from './Description';
import Work from './Work';
import Skills from './Skills';
import CV from "../pdfs/CV_Akos_Madarasz.pdf";
import Education from './Education';
import Navbar from "./Navbar";


class Profile extends Component {
    componentDidMount() {
        // Observer for fading
        const sections = [...document.querySelectorAll('section')];

        const options = {
        rootMargin: '0px',
        threshold: 0.40
        };

        const callback = (entries, observer) => {
        entries.forEach((entry) => {
            const {target} = entry;
            if (entry.intersectionRatio >= 0.40) {
            target.classList.add("is-visible");
            } else {
            target.classList.remove("is-visible");
            }
        });
        };

        const observer = new IntersectionObserver(callback, options)

        sections.forEach((section, index) => {
        observer.observe(section)
        });
    }
    
    render() {
        return (
            <div className="nav-back">
                <div >
                <Navbar/>
                </div>
                
                <div className="scrollcont">
                
                    <section className="scroll padding-profile" >
                        
                        <Description/>
                        <Skills/>
                    </section>
                    <section className="scroll padding-profile" id="sec2" style={{ paddingTop: "5vmin", paddingBottom: "15vmin"}}>
                        <Work/>
                    </section>
                    <section className="scroll padding-profile" style={{  paddingTop: "5vmin"}}>
                        <Education/>
                    </section>

                    <section className="scroll padding-profile " style={{ paddingTop: "5vmin"}}>
                    <h5 className="bold-style resp-h-size league-spartan" style={{"color": "#fa5597", paddingLeft: 0, paddingBottom: "5vh"}}>More about me</h5>
                        
                        <h5 className="" style={{color: "#66FCF1", paddingLeft: 0, paddingBottom: "5vh", fontFamily: "League Spartan", fontSize: "4vmin"}}>&lt;Contributions&gt;</h5>
                        <h6 className="resp-h6 " style={{paddingLeft: 0, color: "#66FCF1"}}>
                                    Research paper:
                        </h6>
                        <a href="https://www.scitepress.org/PublicationsDetail.aspx?ID=n0qtGGKt5S4%3D&t=1&fbclid=IwAR0fxltFsLpdHYi3Mk2yzlKEke0ynLlgZ-I1USYuO5Ezt32T6VbKG7MBREQ">
                            <p style={{textDecoration: "underline", color: "white", fontSize:"2vmin"}}>
                                Real-time Visualization of Sensor Data in Smart Manufacturing using Lambda Architecture
                            </p>
                        </a>
                        
                        <a href={CV} target="_blank" style={{fontSize: "2vmin"}}>Download raw CV</a>
                    </section>

                    
                </div>
            </div>
            
            
        );
    }
}

export default Profile;