import React, { Component } from 'react';

class Work extends Component {
    render() {
        return (
            <div>
                
                        
                            <h5 className=" resp-h-size " style={{"color": "#fa5597", paddingLeft: 0, paddingBottom: "5vh"}}>Work Experience</h5>
                            <div style={{paddingLeft: "1vw", paddingRight:"1vw", textAlign: "justify"}}>
                            <h6 className="resp-h6 bold-style" style={{paddingLeft: 0, color: "#66FCF1"}}>
                                    &lt;University College of Northern Denmark&gt;
                                </h6>
                                <h6 className="resp-h6 italic-style " style={{paddingLeft: 0,color: "#66FCF1"}}>
                                    September 2020 - Part-time student programmer
                                </h6>
                                <p className="resp-p-size " >
                                    Tool for processing and transforming data efficiently, designing for a scalable architecture. Predictions based on historic and live data as well as machine learning models.
                                </p>
                                
                                <h6 className="resp-h6 bold-style " style={{paddingLeft: 0, color: "#66FCF1"}}>
                                    &lt;Dolle A/S&gt;
                                </h6>
                                <h6 className="resp-h6 italic-style " style={{paddingLeft: 0, color: "#66FCF1"}}>
                                    October 2019 – December 2019 | Data analyst

                                </h6>
                                <h6 className="resp-h6 italic-style " style={{paddingLeft: 0, color: "#66FCF1"}}>
                                    August 2019 – October 2019 | Data analyst Intern
                                </h6>
                                <p className="resp-p-size " >
                                    Data analysis and data transformation for data visualization. API for retrieving data. Working with data from production with a physical overview of machine sensors. Combining sensor data and ERP data for display as dashboards. Power BI and Plotly-Dash for live data. Windows and Linux services for hosting python app. Setting up data structure for future machine learning models.
                                </p>
                                
                                
                            </div>
                                
                       
            </div>
        );
    }
}

export default Work;