import React, { Component } from "react"
import Modalz from "./Modalz"

import mern from "../images/mern-udemy.jpg"
import nw from "../images/nwcert.jpg"
import fccrwd from "../images/fccrwd.png"
import zenvacb from "../images/zenvacb.png";
import zenvabs from "../images/zenvabs.png";
import vue from "../images/vue.png";

import Dropdown from "react-bootstrap/Dropdown"
export class About extends Component {
  render() {
    return (
      <section className="content-section" id="about">
        <div className="container text-center">
          <h1
            style={{
              bottom: "11vh",
              position: "relative",
              fontSize: 93,
              color: "rgba(224, 135, 33, 0.9)",
              fontWeight: "bolder",
              textShadow: "2px 2px navy",
              textDecoration: "black underline",
            }}
          >
            Education and Credentials
          </h1>
          <br />
          <div id="row" className="row">
            <div className="col-sm-3 mx-auto">
              <div
                className="card mb-3"
                style={{
                  backgroundColor: "mediumslateblue",
                  height: "13rem",
                  width: "100%",
                }}
              >
                <div className="card-header">
                  <h3>Northwestern University</h3>
                  {/* <h6>Coding Bootcamp</h6> */}
                </div>
                <div className="card-body">
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      View Certificate
                    </Dropdown.Toggle>

                    <Dropdown.Menu align={{ sm: "left" }}>
                      <Dropdown.Item href="#/action-1">
                        <Modalz title="Northwestern Coding Bootcamp" img={nw} />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            {/* FCCCFCCFCCFCC */}
            <div className="col-sm-3 mx-auto">
              <div
                className="card mb-3"
                style={{ backgroundColor: "forestgreen", height: "13rem" }}
              >
                <div className="card-header">
                  <h3>
                    Free Code
                    <br />
                    Camp
                  </h3>
                </div>
                <div className="card-body">
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      View Certificates
                    </Dropdown.Toggle>

                    <Dropdown.Menu align={{ sm: "left" }}>
                      <Dropdown.Item href="#/action-1">
                        <Modalz title="Responsive Web Design" img={fccrwd} />
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <Modalz
                          title="JavaScript Algorithms and Data Structures"
                          img={fccrwd}
                        />
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <Modalz title="Front End Libraries" img={fccrwd} />
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">
                        <Modalz title="Data Visualization" img={fccrwd} />
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-5">
                        <Modalz title="APIs and Microservice" img={fccrwd} />
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-6">
                        <Modalz
                          title="Information Security and Quality Assurance"
                          img={fccrwd}
                        />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mx-auto">
              <div
                className="card mb-3"
                style={{ backgroundColor: "firebrick", height: "13rem" }}
              >
                <div className="card-header udemy">
                  <h3>Udemy</h3>
                </div>
                <div className="card-body">
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      View Certificates
                    </Dropdown.Toggle>

                    <Dropdown.Menu align={{ sm: "left" }}>
                      <Dropdown.Item href="#/action-1">
                        <Modalz
                          title="M.E.R.N. Stack Web Development"
                          img={mern}
                        />
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <Modalz title="Python Bootcamp" img={mern} />
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <Modalz title="PHP Full Stack Bootcamp" img={mern} />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mx-auto">
              <div
                className="card mb-3"
                style={{ backgroundColor: "aquamarine", height: "13rem" }}
              >
                <div className="card-header">
                  <h3 style={{ marginBottom: "2.7rem" }}>Zenva</h3>
                </div>
                <div className="card-body">
                
          
                 
                      <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                      View Certificates
                    </Dropdown.Toggle>

                    <Dropdown.Menu align={{ sm: "left" }}>
                      <Dropdown.Item href="#/action-1">
                        <Modalz
                          title="Intro to Coding Bundle"
                          img={zenvacb}
                        />
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <Modalz title="Bootstrap" img={zenvabs} />
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <Modalz title="Vue.js" img={vue} />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                       </div>
                  
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
