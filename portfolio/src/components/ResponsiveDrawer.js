import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import HomeIcon from "@material-ui/icons/Home"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MailIcon from "@material-ui/icons/Mail"
import MenuIcon from "@material-ui/icons/Menu"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import AppsIcon from "@material-ui/icons/Apps"
import CodeIcon from "@material-ui/icons/Code"
import Link from "@material-ui/core/Link"

const drawerWidth = 240

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    color: "#1d809f",
    marginTop: 20,
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "inline",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#1d809f",
    color: "#FFF",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
})

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }))
  }

  render() {
    const { classes, theme } = this.props

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <h3
          style={{
            color: "#FFF",
          }}
        >
          LanghamerDev
        </h3>
        <Divider />
        <List>
          {["About", "Skills", "Portfolio", "Contact"].map((text, index) => (
            <a
              style={{ color: "#FFF", textDecoration: "none" }}
              href={`#${text.toLowerCase()}`}
            >
              <ListItem button key={text}>
                <ListItemIcon>
                  {text === "About" ? (
                    <HomeIcon
                      style={{
                        color: "#FFF",
                      }}
                    />
                  ) : text === "Skills" ? (
                    <CodeIcon
                      style={{
                        color: "#FFF",
                      }}
                    />
                  ) : text === "Portfolio" ? (
                    <AppsIcon
                      style={{
                        color: "#FFF",
                      }}
                    />
                  ) : (
                    <MailIcon
                      style={{
                        color: "#FFF",
                      }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </a>
          ))}
        </List>
      </div>
    )

    return (
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={"right"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={this.handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon
            style={{
              width: "2em",
              height: "2em",
              position: "fixed",
            }}
          />
        </IconButton>
      </div>
    )
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer)
