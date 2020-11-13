import React, { Component } from 'react';
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import FacebookIcon from "@material-ui/icons/Facebook"
export class Footer extends Component {
  render() {
    return (
        <footer className="footer text-center">
        <div className="container">
          <ul className="list-inline mb-5">
            <li className="list-inline-item">
              <a className="social-link rounded-circle text-white mr-3" href="https://www.linkedin.com/in/mark-langhamer-983516127/">
              <LinkedInIcon />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="social-link rounded-circle text-white mr-3" href="https://www.facebook.com/markey.mark.773">
              <FacebookIcon />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="social-link rounded-circle text-white" href="https://github.com/langhamerm">
              <GitHubIcon />
              </a>
            </li>
          </ul>
          <p className="text-muted small mb-0">
            Copyright © Mark Langhamer 2020
          </p>
     
        </div>
      </footer>
      
    );
  }
}

export default Footer;
