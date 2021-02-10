import React, { Component } from 'react';

import {HashLink as Link} from 'react-router-hash-link';
import Parallax from './Parallax';
class Home extends Component {
    
    render() {
        return (
            <div>
                <Parallax/>
                
                    <div className="row grey darken-3 no-padding ">
                        <div className="col s12 m12 no-padding">
                        <div className="card grey darken-3 no-padding">
                            <div className="card-content white-text">
                                <div className="container pad-left-right">
                                <span className="card-title">Hi, I am Akos Madarasz!</span>
                            <p>This is my portfolio. You can find my CV under my profile section. I like to create programming projects in my free time
                                and my projects can be found under the projects tab. I am mostly interested in algorithms, data structures and mostly backend
                                development, and I have recently, slightly got into frontend to create visualisations for some of my projects! I plan on
                                continously extending my portfolio with new projects and technologies as time goes. Below you can find my GitHub, Linkedin and 
                                my email.
                            </p>
                                </div>
                            
                            <br/>
                            <center>
                            
                            <div class="row">

      <div className="col s1 offset-s9 floatingdown">
        <a href="https://github.com/projectaki">
            <i className="fab fa-github small"  ></i>
        </a>
      </div>
      <div className="col s1 floatingup">
        <a href="https://www.linkedin.com/in/akos-madarasz-b430441a1/" >
            <i className="fab fa-linkedin small" ></i>
        </a>
      </div>
      <div className="col s1 floatingdown">
        <a href="mailto:akosegypro@gmail.com" >
            <i className="fab fa-google small "></i>
        </a>
      </div>
     

    </div>
                            </center>
                            
                            
                            </div>
                        </div>
                        </div>
                    </div>
                
                
                <Parallax/>
            </div>
        );
    }
}

export default Home;