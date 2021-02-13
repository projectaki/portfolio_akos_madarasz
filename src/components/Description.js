import React, { Component } from 'react';

class Description extends Component {
    render() {
        return (
            <div>
                <div class="row no-margin">
                    <div class="col s12 m12 profile-pad">
                    <div class="card" style={{"background-color": "#7A71AA", marginBottom: 0}}>
                        <div class="card-content">
                        <h5 className="bold-style italic-style resp-h-size" style={{"color": "Black", paddingLeft: 0, paddingBottom: "1vh"}}>Profile</h5>
                        
                        <p className="resp-p-size white-text" >
                        I have experience with the core elements of software development: working with agile and SCRUM,
                         design principles, code quality, testing, therefore I can use these skills, my motivation,
                          the drive to always improve/solve problems, to become a crucial member of any software development team.
                           In my free time I am studying and implementing data structures and algorithms and working on projects.
                            I am always working towards producing the best results I can, and I will bring the same mindset to any team I work with.
                        </p>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Description;