import React, { Component } from 'react';

class Work2 extends Component {
    render() {
        return (
            <div>
                
                        
                            <h5 className=" resp-h-size " style={{"color": "#fa5597", paddingLeft: 0, paddingBottom: "5vh"}}>Work Experience</h5>
                            <div style={{paddingLeft: "1vw", paddingRight:"1vw", textAlign: "justify"}}>
                            <h6 className="resp-h6 bold-style" style={{paddingLeft: 0, color: "#66FCF1"}}>
                                    &lt;DTU Coppenhagen&gt;
                                </h6>
                                <h6 className="resp-h6 italic-style " style={{paddingLeft: 0,color: "#66FCF1"}}>
                                    January 2021 - March 2021 Data Science internship
                                </h6>
                                <p className="resp-p-size " >
                                    Analyse, clean and transform big data. Energy consumption data for different households. The project is to try different
                                    Machine learning algorithms for similarity search in consumptions patterns. Algorithms: KNN with inverted index using
                                    cosine similarity, using kd-tree with different distance metrics.
                                </p>

                                
                                
                            </div>
                                
                       
            </div>
        );
    }
}

export default Work2;