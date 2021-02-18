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
                    <section className="scroll padding-profile" style={{backgroundColor: "beige", paddingTop: "10vmin", paddingBottom: "auto"}}>
                    <Description/>
                    </section>
                    <section className="scroll padding-profile" id="sec2" style={{backgroundColor: "grey", paddingTop: "10vmin"}}>
                        <Work/>
                    </section>
                    <section className="scroll padding-profile" style={{backgroundColor: "beige",  paddingTop: "10vh"}}>
                        <Education/>
                    </section>
                    
                    <section className="scroll padding-profile" style={{backgroundColor: "grey",  paddingTop: "10vh"}}>
                        <Skills/>
                    </section>
                    <section className="scroll padding-profile" style={{backgroundColor: "beige",  paddingTop: "10vh"}}>
                        
                        <h5 className="bold-style resp-h-size" style={{"color": "black", paddingLeft: 0, paddingBottom: "5vh"}}>Contributions</h5>
                        <h6 className="resp-h6" style={{paddingLeft: 0, color: "black"}}>
                                    Research paper:
                                </h6>
                                <a href="https://www.scitepress.org/PublicationsDetail.aspx?ID=n0qtGGKt5S4%3D&t=1&fbclid=IwAR0fxltFsLpdHYi3Mk2yzlKEke0ynLlgZ-I1USYuO5Ezt32T6VbKG7MBREQ">
                                    <p style={{textDecoration: "underline", color: "#165896", fontSize:"2vmin"}}>
                                        Real-time Visualization of Sensor Data in Smart Manufacturing using Lambda Architecture
                                    </p>
                                </a>
                    </section>
                    <section className="scroll padding-profile" style={{backgroundColor: "grey",  paddingTop: "10vh"}}>
                        <h5 className="bold-style resp-h-size" style={{"color": "beige", paddingLeft: 0, paddingBottom: "5vh"}}>More about me</h5>
                        <Picture/>
                    </section>
                    
                </div>
            </div>
            
            
        );
    }
}

export default Profile;