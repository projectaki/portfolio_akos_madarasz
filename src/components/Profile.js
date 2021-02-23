import React, { Component } from 'react';
import Description from './Description';
import Work from './Work';
import Skills from './Skills';
import CV from "../pdfs/CV_Akos_Madarasz.pdf";
import Education from './Education';
import Navbar from "./Navbar";
import BackgroundImg from "../images/nightsky.jpg";


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
            <div className="nav-back" /*style={{backgroundImage: `url(${BackgroundImg})`}}*/>
                <div /*style={{display: "flex", flexFlow: "column", height: "100vh"}}*/>
                <div /*style={{flex: "0 1 auto"}}*/ style={{position: "absolute", width: "90vw", zIndex: "1", marginRight: "5vw", marginLeft: "5vw"}} className="nav-back">
                <Navbar/>
                </div>
                <div /*style={{flex: "1 1 auto"}}*/>
                <div className="scrollcont" >
                
                <section className="scroll padding-profile" >
                    
                    <Description/>
                    <Skills/>
                </section>
                <section className="scroll padding-profile" id="sec2" style={{ paddingBottom: "15vmin"}}>
                    <Work/>
                </section>
                <section className="scroll padding-profile" >
                    <Education/>
                </section>

                <section className="scroll padding-profile " >
                <h5 className="bold-style resp-h-size league-spartan" style={{"color": "#fa5597", paddingLeft: 0, paddingBottom: "5vh"}}>More about me</h5>
                    <p className="resp-p-size" style={{textAlign: "justify"}}>
                    Hi, I am Akos!
                    I am a software developer. I like to create programming projects in my free time and I find it very fun. I am mostly interested in algorithms,
                    and I have always loved mathematics and problem solving. I prefer backend
                        development, but I have recently got into frontend to create visualisations for some of my projects and to my suprise I enjoyed the process! I plan on
                        continously extending my portfolio with new projects as time goes, as I very much enjoy combining backend algorithms with frontend visualisation.
                    </p>
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
                
                
                </div>
                
            </div>
            
            
        );
    }
}

export default Profile;