import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div>
                
                        <h5 className="bold-style resp-h-size" style={{"color": "#E4ED20", paddingLeft: 0, paddingBottom: "5vh"}}>&lt;Education&gt;</h5>
                        <div style={{paddingLeft: "1vw", paddingRight:"1vw", textAlign: "justify"}}>
                            <p className="resp-p-size bold-style" style={{color: "black"}}>
                                University College of Northern Denmark - Bachelor`s degree in Software Development (2020 February -, Aalborg)
                            </p>
                            <p className="resp-p-size bold-style" style={{color: "black"}}>
                                University College of Northern Denmark - Academy Profession Degree in Computer Science (2017 August – 2020 February, Aalborg)
                            </p>
                        </div>
                        
            </div>
        );
    }
}

export default Education;