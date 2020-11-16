import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid"
import Project from "./Project";
import Heading from "./Heading"

import pers from "../images/pers.png";
import am from "../images/amerimark.png";

export class Portfolio extends Component {
  render() {
    return (
       
      <div className='container text-center' id="portfolio">
 
      <Heading text="Portfolio" />

   <div className="row">
   <div className="col-sm-3">
            <Project 
                title='Persevere Online'
                image={pers}
                text='Fullstack LMS made with Firebase, React, Redux, Express, and Material-UI.'
                url='https://fcc-social.web.app/'
                github='https://github.com/langhamerm/FCC-Fullstack-Firebase-React'
            />
         </div>
          <div className="col-sm-3">
            <Project 
                title='Ameri-Mark'
                image={am}
                text='Real Estate Business Website made with React'
                url='https://tranquil-springs-64583.herokuapp.com/'
                github='https://github.com/langhamerm/AmeriMark2.0'
            />
            </div>
             <div className="col-sm-3">
            <Project 
                title='Persevere Online'
                image={pers}
                text='Fullstack LMS made with Firebase, React, Redux, Express, and Material-UI.'
            />
                 </div>
            <div className="col-sm-3">
            <Project 
                title='Persevere Online'
                image={pers}
                text='Fullstack LMS made with Firebase, React, Redux, Express, and Material-UI.'
            />
            </div>
      </div>
      </div>
    );
  }
}

export default Portfolio;
