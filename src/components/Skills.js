import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title  grey-text text-darken-4">
                            Skills
                        </span>
                        <br/>
                        <span>Java</span>
                        <div class="progress">
                            <div class="determinate" style={{width: "60%"}}></div>
                        </div>
                        <span>Python</span>
                        <div class="progress">
                            <div class="determinate" style={{width: "50%"}}></div>
                        </div>
                        <span>C#</span>
                        <div class="progress">
                            <div class="determinate" style={{width: "40%"}}></div>
                        </div>
                        <span>JavaScript</span>
                        <div class="progress">
                            <div class="determinate" style={{width: "50%"}}></div>
                        </div>
                        <span>SQL</span>
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