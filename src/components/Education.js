import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div>
                <div class="row no-margin">
                    <div class="col s12 m12 profile-pad">
                    <div class="card darken-2" style={{"background-color": "#7A71AA"}}>
                        <div class="card-content white-text">
                        <h5 className="bold-style italic-style resp-h-size" style={{"color": "black", paddingLeft: 0, paddingBottom: "1vh"}}>Education</h5>
                        <p className="resp-p-size" style={{"color": "white"}}>
                            University College of Northern Denmark - Bachelor`s degree in Software Development (2020 February -, Aalborg)
                        </p>
                        <br/>
                        <p className="resp-p-size" style={{"color": "white"}}>
                            University College of Northern Denmark - Academy Profession Degree in Computer Science (2017 August – 2020 February, Aalborg)
                        </p>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;