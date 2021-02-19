import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div>
                
                        <h5 className="bold-style resp-h-size league-spartan" style={{"color": "#fa5597", paddingLeft: 0, paddingBottom: "5vh"}}>&lt;Education&gt;</h5>
                        <div style={{paddingLeft: "1vw", paddingRight:"1vw", textAlign: "justify"}}>
                            
                            <h6 className="resp-h6 bold-style league-spartan" style={{paddingLeft: 0, color: "#66FCF1", paddingBottom:"2vmin"}}>
                                University College of Northern Denmark - Bachelor`s degree in Software Development
                            </h6>
                            <h6 className="resp-h6 italic-style league-spartan" style={{paddingLeft: 0,color: "white", paddingBottom:"20vmin"}}>
                                February 2020 - June 2021, Aalborg
                            </h6>
                            <h6 className="resp-h6 bold-style league-spartan" style={{paddingLeft: 0, color: "#66FCF1", paddingBottom:"2vmin"}}>
                                University College of Northern Denmark - Academy Profession Degree in Computer Science
                            </h6>
                            <h6 className="resp-h6 italic-style league-spartan" style={{paddingLeft: 0,color: "white"}}>
                                August 2017 – February 2020, Aalborg
                            </h6>
                            
                        </div>
                        
            </div>
        );
    }
}

export default Education;