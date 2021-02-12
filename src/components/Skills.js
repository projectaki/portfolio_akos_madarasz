import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{"background-color": "#d9b382"}}>
                    <div className="card-content">
                        <h5 className="grey-text text-darken-4 resp-h-size">
                            Skills
                        </h5>
                        <br/>
                        <p className="resp-p-size">Java</p>
                        <div class="progress">
                            <div class="determinate" style={{width: "60%"}}></div>
                        </div>
                        <p className="resp-p-size">Python</p>
                        <div class="progress">
                            <div class="determinate" style={{width: "50%"}}></div>
                        </div>
                        <p className="resp-p-size">C#</p>
                        <div class="progress">
                            <div class="determinate" style={{width: "40%"}}></div>
                        </div>
                        <p className="resp-p-size">JavaScript</p>
                        <div class="progress">
                            <div class="determinate" style={{width: "50%"}}></div>
                        </div>
                        <p className="resp-p-size">SQL</p>
                        <div class="progress">
                            <div class="determinate" style={{width: "60%"}}></div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default Skills;