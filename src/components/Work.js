import React, { Component } from 'react';

class Work extends Component {
    render() {
        return (
            <div>
                
                        
                            <h5 className="bold-style resp-h-size league-spartan" style={{"color": "#E4ED20", paddingLeft: 0, paddingBottom: "5vh"}}>&lt;Work Experience&gt;</h5>
                            <div style={{paddingLeft: "1vw", paddingRight:"1vw", textAlign: "justify"}}>
                            <h6 className="resp-h6 bold-style league-spartan" style={{paddingLeft: 0, color: "#40a0e0"}}>
                                    University College of Northern Denmark
                                </h6>
                                <h6 className="resp-h6 italic-style league-spartan" style={{paddingLeft: 0,color: "#e04050"}}>
                                    September 2020 - Part-time student programmer
                                </h6>
                                <p className="resp-p-size league-spartan" >
                                    Tool for processing and transforming data efficiently, designing for a scalable architecture. Predictions based on historic and live data as well as machine learning models.
                                </p>
                                
                                <h6 className="resp-h6 bold-style league-spartan" style={{paddingLeft: 0, color: "#40a0e0"}}>
                                    Dolle A/S
                                </h6>
                                <h6 className="resp-h6 italic-style league-spartan" style={{paddingLeft: 0, color: "#e04050"}}>
                                    October 2019 – December 2019 | Data analyst

                                </h6>
                                <h6 className="resp-h6 italic-style league-spartan" style={{paddingLeft: 0, color: "#e04050"}}>
                                    August 2019 – October 2019 | Data analyst Intern
                                </h6>
                                <p className="resp-p-size league-spartan" >
                                    Data analysis and data transformation for data visualization. API for retrieving data. Working with data from production with a physical overview of machine sensors. Combining sensor data and ERP data for display as dashboards. Power BI and Plotly-Dash for live data. Windows and Linux services for hosting python app. Setting up data structure for future machine learning models.
                                </p>
                                
                                
                            </div>
                                
                       
            </div>
        );
    }
}

export default Work;