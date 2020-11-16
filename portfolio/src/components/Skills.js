import React, { Component } from "react"

import Heading from "./Heading"

import Grid from "@material-ui/core/Grid"

export class Skills extends Component {
  render() {
    return (
      // <section class="content-section text-white text-center" id="skills">
      <div className="container  text-center" id="skills">
        <div
          style={{
            textAlign: "center",
          }}
          className="content-section-heading"
        >
          <Heading text="Tech Skills" />
        </div>
        <div className="row">
          <div className="col">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img
                id="ex-icon"
                src="https://cms-assets.tutsplus.com/uploads/users/1116/posts/24835/preview_image/mongodb-logo.png"
              />
            </span>
            <h4
              style={{
                textAlign: "center",
              }}
            >
              <strong>MongoDB</strong>
            </h4>
          </div>
          <div className="col">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img
                span
                id="ex-icon"
                src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png"
              />
            </span>
            <h4
              style={{
                textAlign: "center",
              }}
            >
              <strong>Express</strong>
            </h4>
          </div>
          <div className="col">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img
                id="ex-icon"
                src="https://s3-us-west-2.amazonaws.com/wecp-static/www/prod/images/AssessmentForLearning/icon-reactjs.svg"
              />
            </span>
            <h4
              style={{
                textAlign: "center",
              }}
            >
              <strong>React</strong>
            </h4>
          </div>
          <div className="col">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img
                id="ex-icon"
                src="https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png"
              />
            </span>
            <h4
              style={{
                textAlign: "center",
              }}
            >
              <strong>Node</strong>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img
                id="ex-icon"
                src="https://cdn4.iconfinder.com/data/icons/logos-3/504/Swift-2-512.png"
              />
            </span>
            <h4
              style={{
                textAlign: "center",
              }}
            >
              <strong>iOS</strong>
            </h4>
          </div>
          <div className="col">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img
                id="ex-icon"
                src="https://i.pinimg.com/originals/f1/ea/a7/f1eaa7278f64e27128e062a3de918265.png"
              />
            </span>
            <h4
              style={{
                textAlign: "center",
              }}
            >
              <strong>Java</strong>
            </h4>
          </div>

          <div className="col">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img
                id="ex-icon"
                src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
              />
            </span>
            <h4
              style={{
                textAlign: "center",
              }}
            >
              <strong>MySQL</strong>
            </h4>
            <p className="text-faded mb-0" />
          </div>
          <div className="col">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img
                id="ex-icon"
                src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
                alt=""
              />
            </span>
            <h4
              style={{
                textAlign: "center",
              }}
            >
              <strong>HTML5</strong>
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img
                id="ex-icon"
                src="http://www.anujgakhar.com/wp-content/uploads/2013/05/logo-javascript.png"
              />
            </span>
            <h4
              style={{
                textAlign: "center",
              }}
            >
              <strong>JavaScript</strong>
            </h4>
          </div>
          <div className="col">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img
                id="ex-icon"
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png"
              />
            </span>
            <h4
              style={{
                textAlign: "center",
              }}
            >
              <strong>CSS</strong>
            </h4>
          </div>
          <div className="col">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img
                id="ex-icon"
                src="https://www.php.net/images/logos/new-php-logo.svg"
              />
            </span>
            <h4
              style={{
                textAlign: "center",
              }}
            >
              <strong>PHP</strong>
            </h4>
          </div>
          <div className="col">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <img
                id="ex-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png"
              />
            </span>
            <h4
              style={{
                textAlign: "center",
              }}
            >
              <strong>Python</strong>
            </h4>
          </div>
        </div>
      </div>
      // </section>
    )
  }
}

export default Skills
