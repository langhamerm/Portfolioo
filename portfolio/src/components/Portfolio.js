import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid"
import Project from "./Project";
import pers from "../images/pers.png";
import am from "../images/amerimark.png";

export class Portfolio extends Component {
  render() {
    return (
        <section id="portfolio">
      <div className='container'>
        <Grid container spacing={10}>
            <Grid item xs={6} sm={4}>
            <Project 
                title='Persevere Online'
                image={pers}
                text='Fullstack Classroom organizer made with Firebase, React, Redux, Express, and Material-UI.'
                url='https://fcc-social.web.app/'
                github='https://github.com/langhamerm/FCC-Fullstack-Firebase-React'
            />
            </Grid>
            <Grid item xs={6} sm={4}>
            <Project 
                title='Ameri-Mark'
                image={am}
                text='Real Estate Business Website made with React'
                url='https://tranquil-springs-64583.herokuapp.com/'
                github='https://github.com/langhamerm/AmeriMark2.0'
            />
            </Grid>
            <Grid item xs={6} sm={4}>
            <Project 
                title='Persevere Online'
                image={pers}
                text='Fullstack Classroom organizer made with Firebase, React, Redux, Express, and Material-UI.'
            />
            </Grid>
            <Grid item xs={6} sm={4}>
            <Project 
                title='Persevere Online'
                image={pers}
                text='Fullstack Classroom organizer made with Firebase, React, Redux, Express, and Material-UI.'
            />
            </Grid>
        </Grid>
      </div>
      </section>
    );
  }
}

export default Portfolio;
