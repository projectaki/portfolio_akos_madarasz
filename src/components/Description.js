import React, { Component } from 'react';
import CV from "../pdfs/CV_Akos_Madarasz.pdf";


class Description extends Component {
    componentDidMount() {
        const M = window.M;
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, []);
        let cvlink = document.getElementById("modal1");
        var instance = M.Modal.getInstance(cvlink);
        instance.open();
        
    }

    
    
    render() {
        return (
            <div >  
                <h5 className=" resp-h-size text-border" style={{"color": "#fa5597", paddingLeft: 0, paddingBottom: "5vh", paddingTop: "10vmin"}}>Profile</h5>
                <div style={{paddingLeft: "1vw", paddingRight:"1vw", textAlign: "justify"}}>
                    <p className="resp-p-size text-border-text" style={{ color: "white"}}>
                    I have experience with the core elements of software development: working with agile and SCRUM,
                    design principles, code quality, testing, therefore I can use these skills, my motivation,
                    the drive to always improve/solve problems, to become a crucial member of any software development team.
                    In my free time I am studying and implementing data structures and algorithms and working on projects.
                        I am always working towards producing the best results I can, and I will bring the same mindset to any team I work with.
                    </p>
                    
                </div>
                <div id="modal1" class="modal nav-back" style={{border: "0.1vmin solid white"}} >
                    <div class="modal-content">
                    <h4 style={{fontFamily: "League Spartan", fontSize: "4vmin",color: "white"}}>View my CV</h4>
                    <p style={{fontSize: "3vmin",color: "white"}}>If you want to view the raw CV you can open it through the following link! It is also available for viewing in the last
                    section</p>
                    <a href={CV} target="_blank" style={{fontSize: "5vmin", textDecoration: "underline",color: "white"}}>Raw CV</a>
                    </div>
                    
                </div>      
            </div>
        );
    }
}

export default Description;