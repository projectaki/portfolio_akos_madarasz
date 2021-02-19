import React, { Component } from 'react';
import Description from './Description';
import Work from './Work';
import Skills from './Skills';
import Picture from './Picture';
import Education from './Education';


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
            <div>
                <div className="scrollcont">
                    <section className="scroll padding-profile" style={{backgroundColor: "#26867c", paddingTop: "5vmin", paddingBottom: "auto"}}>
                        <Description/>
                        <Skills/>
                    </section>
                    <section className="scroll padding-profile grey darken-2" id="sec2" style={{backgroundColor: "grey", paddingTop: "5vmin", paddingBottom: "15vmin"}}>
                        <Work/>
                    </section>
                    <section className="scroll padding-profile" style={{backgroundColor: "#26867c",  paddingTop: "5vmin"}}>
                        <Education/>
                    </section>

                    <section className="scroll padding-profile grey darken-2" style={{backgroundColor: "beige",  paddingTop: "5vmin"}}>
                    <h5 className="bold-style resp-h-size league-spartan" style={{"color": "#E4ED20", paddingLeft: 0, paddingBottom: "5vh"}}>&lt;More about me&gt;</h5>
                        
                        <h5 className="bold-style resp-h-size league-spartan" style={{color: "#40a0e0", paddingLeft: 0, paddingBottom: "5vh"}}>&lt;Contributions&gt;</h5>
                        <h6 className="resp-h6 league-spartan" style={{paddingLeft: 0, color: "black"}}>
                                    Research paper:
                                </h6>
                                <a href="https://www.scitepress.org/PublicationsDetail.aspx?ID=n0qtGGKt5S4%3D&t=1&fbclid=IwAR0fxltFsLpdHYi3Mk2yzlKEke0ynLlgZ-I1USYuO5Ezt32T6VbKG7MBREQ">
                                    <p style={{textDecoration: "underline", color: "white", fontSize:"2vmin"}}>
                                        Real-time Visualization of Sensor Data in Smart Manufacturing using Lambda Architecture
                                    </p>
                                </a>
                    </section>

                    
                </div>
            </div>
            
            
        );
    }
}

export default Profile;