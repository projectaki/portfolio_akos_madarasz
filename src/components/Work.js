import React, { Component } from 'react';

class Work extends Component {
    render() {
        return (
            <div>
                <div class="row no-margin">
                    <div class="col s12 m12 profile-pad">
                    <div class="card" style={{"background-color": "#7A71AA", marginBottom: 0}}>
                        <div class="card-content white-text">
                            <h5 className="bold-style italic-style resp-h-size" style={{"color": "black", paddingLeft: 0, paddingBottom: "1vh"}}>Work Experience</h5>
                                <h6 className="resp-h6" style={{paddingLeft: 0}}>
                                    -University College of Northern Denmark
                                </h6>
                                <h6 className="resp-h6" style={{paddingLeft: 0, "color": "black"}}>
                                    (September 2020 - Part-time student programmer)
                                </h6>
                                <p className="resp-p-size" style={{"color": "white"}}>
                                    Tool for processing and transforming data efficiently, designing for a scalable architecture. Predictions based on historic and live data as well as machine learning models.
                                </p>
                                <br/>
                                <h6 className="resp-h6" style={{paddingLeft: 0}}>
                                    -Dolle A/S
                                </h6>
                                <h6 className="resp-h6" style={{paddingLeft: 0, "color": "black"}}>
                                    (October 2019 – December 2019 | Data analyst)

                                </h6>
                                <h6 className="resp-h6" style={{paddingLeft: 0, "color": "black"}}>
                                    (August 2019 – October 2019 | Data analyst Intern)
                                </h6>
                                <p className="resp-p-size" style={{"color": "white"}}>
                                    Data analysis and data transformation for data visualization. API for retrieving data. Working with data from production with a physical overview of machine sensors. Combining sensor data and ERP data for display as dashboards. Power BI and Plotly-Dash for live data. Windows and Linux services for hosting python app. Setting up data structure for future machine learning models.
                                </p>
                                <br/>
                                <h6 className="resp-h6" style={{paddingLeft: 0}}>
                                    Research paper:
                                </h6>
                                <a href="https://www.scitepress.org/PublicationsDetail.aspx?ID=n0qtGGKt5S4%3D&t=1&fbclid=IwAR0fxltFsLpdHYi3Mk2yzlKEke0ynLlgZ-I1USYuO5Ezt32T6VbKG7MBREQ" style={{"color": "black"}}>
                                    <p className="resp-p-size white-text">
                                        Real-time Visualization of Sensor Data in Smart Manufacturing using Lambda Architecture
                                    </p>
                                </a>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;