import React, { Component } from 'react';
import Description from './Description';
import Work from './Work';
import Skills from './Skills';
import Picture from './Picture';
import Education from './Education';

class Profile extends Component {
    render() {
        return (
            <section>
                
                <div className="container">
                    <div className="row">
                        <div className="col s4 m4 l3">
                            <Picture/>
                            <Skills/>
                        </div>
                        <div className="col s8 m8 l9">
                            <Description/>
                            <Work/>
                            <Education/>
                        </div>
                        
                    </div>
                </div>
            </section>
            
            
        );
    }
}

export default Profile;