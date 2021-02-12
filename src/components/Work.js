import React, { Component } from 'react';

class Work extends Component {
    render() {
        return (
            <div>
                <div class="row no-margin">
                    <div class="col s12 m12 profile-pad">
                    <div class="card" style={{"background-color": "#d9b382"}}>
                        <div class="card-content white-text">
                            <h5 className="bold-style no-padding italic-style resp-h-size" style={{"color": "white"}}>Work Experience</h5>
                                <h5 className="resp-h-size" style={{paddingLeft: 0}}>
                                    University College of Northern Denmark
                                </h5>
                                <h6 className="resp-h-size" style={{paddingLeft: 0}}>
                                    September 2020 - Part-time student programmer
                                </h6>
                                <br/>
                                <p className="resp-p-size" style={{"color": "black"}}>
                                    Tool for processing and transforming data efficiently, designing for a scalable architecture. Predictions based on historic and live data as well as machine learning models.
                                </p>
                                <br/>
                                <h5 className="resp-h-size" style={{paddingLeft: 0}}>
                                    Dolle A/S
                                </h5>
                                <h6 className="resp-h-size" style={{paddingLeft: 0}}>
                                    October 2019 – December 2019 | Data analyst

                                </h6>
                                <h6 className="resp-h-size" style={{paddingLeft: 0}}>
                                    August 2019 – October 2019 | Data analyst Intern
                                </h6>
                                <br/>
                                <p className="resp-p-size" style={{"color": "black"}}>
                                    Data analysis and data transformation for data visualization. API for retrieving data. Working with data from production with a physical overview of machine sensors. Combining sensor data and ERP data for display as dashboards. Power BI and Plotly-Dash for live data. Windows and Linux services for hosting python app. Setting up data structure for future machine learning models.
                                </p>
                                <br/>
                                <h6 className="resp-h-size" style={{paddingLeft: 0}}>
                                    Research paper:
                                </h6>
                                <br/>
                                <a href="https://www.scitepress.org/PublicationsDetail.aspx?ID=n0qtGGKt5S4%3D&t=1&fbclid=IwAR0fxltFsLpdHYi3Mk2yzlKEke0ynLlgZ-I1USYuO5Ezt32T6VbKG7MBREQ" style={{"color": "black"}}>
                                    <p className="resp-p-size">
                                        Data 2020 article
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