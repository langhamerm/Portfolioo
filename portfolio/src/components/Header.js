import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
    <header className="masthead d-flex">
  <div className="container text-center my-auto">
    <h1 className="mb-1">Mark Langhamer Jr.</h1>
    <h3 className="mb-5">
      <em>Full Stack Developer</em>
    </h3>
    <a className="btn btn-primary js-scroll-trigger" href="#about">Find Out More</a>
  </div>
  <div className="overlay" />
</header>

    );
  }
}

export default Header;
