import React, { Component } from 'react';

class Work extends Component {
    render() {
        return (
            <div>
                
                        
                            <h5 className="bold-style resp-h-size" style={{"color": "beige", paddingLeft: 0, paddingBottom: "5vh"}}>Work Experience</h5>
                            <div style={{paddingLeft: "1vw", paddingRight:"1vw", textAlign: "justify"}}>
                            <h6 className="resp-h6 bold-style" style={{paddingLeft: 0, color: "beige"}}>
                                    University College of Northern Denmark
                                </h6>
                                <h6 className="resp-h6 italic-style" style={{paddingLeft: 0, color: "beige", fontSize: "1vw"}}>
                                    September 2020 - Part-time student programmer
                                </h6>
                                <p className="resp-p-size" style={{fontSize: "2vh", color: "beige"}}>
                                    Tool for processing and transforming data efficiently, designing for a scalable architecture. Predictions based on historic and live data as well as machine learning models.
                                </p>
                                
                                <h6 className="resp-h6 bold-style" style={{paddingLeft: 0, color: "beige"}}>
                                    Dolle A/S
                                </h6>
                                <h6 className="resp-h6 italic-style" style={{paddingLeft: 0, color: "beige", fontSize: "1vw"}}>
                                    October 2019 – December 2019 | Data analyst

                                </h6>
                                <h6 className="resp-h6 italic-style" style={{paddingLeft: 0, color: "beige", fontSize: "1vw"}}>
                                    August 2019 – October 2019 | Data analyst Intern
                                </h6>
                                <p className="resp-p-size" style={{fontSize: "2vh", color: "beige"}}>
                                    Data analysis and data transformation for data visualization. API for retrieving data. Working with data from production with a physical overview of machine sensors. Combining sensor data and ERP data for display as dashboards. Power BI and Plotly-Dash for live data. Windows and Linux services for hosting python app. Setting up data structure for future machine learning models.
                                </p>
                                
                                
                            </div>
                                
                       
            </div>
        );
    }
}

export default Work;