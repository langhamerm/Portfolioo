import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import classnames from "classnames"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Collapse from "@material-ui/core/Collapse"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import red from "@material-ui/core/colors/red"
import GitHubIcon from "@material-ui/icons/GitHub"
import OpenInNew from "@material-ui/icons/OpenInNew"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Link from "@material-ui/core/Link"
const styles = theme => ({
  card: {
    maxWidth: 400,
    textAlign: 'center',
    height: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    display: "flex",
    justifyContent: 'center'
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
})

class Project extends React.Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  render() {
    const { classes, title, image, text, url, github } = this.props

    return (
      <Card className={classes.card}>
        <CardHeader title={title} />
        <CardMedia
          style={{
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
          className={classes.media}
          image={image}
          title={title}
        />
          <CardActions className={classes.actions} disableActionSpacing>
        <a target='__blank' href={github}>
          <IconButton aria-label="View Github Repo">
            <GitHubIcon />
          </IconButton>
          </a>
          <a target='__blank' href={url}>
          <IconButton aria-label="Visit Site">
            <OpenInNew />
          </IconButton>
          </a>
        </CardActions>
        <CardContent>
          <Typography component="p">{text}</Typography>
        </CardContent>
      
      </Card>
    )
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Project)
