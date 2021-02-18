import React, { Component } from 'react';

class Description extends Component {
    render() {
        return (
            <div>  
                <h5 className="bold-style resp-h-size" style={{"color": "#E4ED20", paddingLeft: 0, paddingBottom: "5vh"}}>&lt;Profile&gt;</h5>
                <div style={{paddingLeft: "1vw", paddingRight:"1vw", textAlign: "justify"}}>
                    <p className="resp-p-size" style={{ color: "black"}}>
                    I have experience with the core elements of software development: working with agile and SCRUM,
                    design principles, code quality, testing, therefore I can use these skills, my motivation,
                    the drive to always improve/solve problems, to become a crucial member of any software development team.
                    In my free time I am studying and implementing data structures and algorithms and working on projects.
                        I am always working towards producing the best results I can, and I will bring the same mindset to any team I work with.
                    </p>
                </div>       
            </div>
        );
    }
}

export default Description;