import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{"background-color": "#7B878C"}}>
                    <div className="card-content">
                        <h5 className="grey-text bold-style text-darken-4 resp-h-size" style={{paddingBottom: "1vh"}}>
                            Skills
                        </h5>
                        <p className="resp-p-size" style={{paddingBottom: 0}}>Java</p>
                        <p className="resp-p-size" style={{paddingBottom: 0}}>Python</p>
                        <p className="resp-p-size" style={{paddingBottom: 0}}>C#</p>
                        <p className="resp-p-size" style={{paddingBottom: 0}}>JavaScript</p>
                        <p className="resp-p-size" style={{paddingBottom: 0}}>SQL</p>
                        
                        
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default Skills;