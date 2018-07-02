import React, { Component } from 'react';
import Project from './Project';

import greenville from '../images/greenville.png';
import phcookbook from '../images/pcbook.png';
import kgwebdev from '../images/kg.png'

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <div className="row">
                    <div className="col-md-12" id="portfolio-header">
                        <h3>Sample Works</h3>
                    </div>
                </div>

                <div className="row" id="portfolios">
                    <Project link="http://www.gvclib.ga" image={greenville} project="Greenville College Library" alt="gvc"/>
                    <Project link="http://www.phcookbook.ga" image={phcookbook} project="Pinoy Cook Book" alt="pcbook"/>
                    <Project link="http://www.kgwebdev.ga" image={kgwebdev} project="KG Freelance Web Services" alt="kg"/>
                </div>
            </div>
        );
    }
}

export default Portfolio;