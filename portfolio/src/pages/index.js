import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid"

import ResponsiveDrawer from "../components/ResponsiveDrawer"
import ImageAvatars from "../components/ImageAvatars"
import Skills from "../components/Skills"
import About from "../components/About"
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
})

function Home(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
   
        <Grid item xs={12}>
          <ResponsiveDrawer />
        </Grid>
        <Grid item xs={12} sm={12}>
          {/* <ImageAvatars /> */}
          <Header />
        </Grid>
            
        {/* <Grid item xs={12} sm={3}></Grid> */}
        <Grid item xs={12} sm={12}>
          <About />
        </Grid>
           {/* <Grid item xs={12} sm={3}></Grid> */}
        <Grid item xs={12} sm={12}>
          <Skills />
        </Grid>

    
        <Grid item xs={12} sm={12}>
          <Portfolio />
        </Grid>
        
        <Grid item xs={12} sm={12}>
          <Contact />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Footer />
        </Grid>
    
      </Grid>
    </div>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)
