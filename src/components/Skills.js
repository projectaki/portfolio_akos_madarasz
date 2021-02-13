import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{"background-color": "#7A71AA"}}>
                    <div className="card-content">
                        <h5 className="grey-text text-darken-4 resp-h-size" style={{paddingBottom: "1vh"}}>
                            Skills
                        </h5>
                        <p className="resp-p-size white-text">Java</p>
                        <p className="resp-p-size white-text">Python</p>
                        <p className="resp-p-size white-text">C#</p>
                        <p className="resp-p-size white-text">JavaScript</p>
                        <p className="resp-p-size white-text">SQL</p>
                        
                        
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default Skills;