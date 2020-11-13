import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class Contact extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
  <section id="contact" className="callout">

  <div className="container">

    <div className="wrapper animated bounceInLeft">
      <div className="company-info">
        <h3>Langhamer Dev</h3>
        <ul>
          {/* <li><i class="fa fa-road"></i> 44 Something st</li> */}
          <li><i className="fa fa-phone" /> (331) 645-9495</li>
          <li><i className="fa fa-envelope" /> mark@langhamer.dev</li>
        </ul>
      </div>
      <div className="contact">
        <h3>Email</h3>
        <form method="POST" action="send">
          <p>
            <label>Name</label>
            <input type="text" name="name" />
          </p>
          <p>
            <label>Company</label>
            <input type="text" name="company" />
          </p>
          <p>
            <label>Email Address</label>
            <input type="email" name="email" />
          </p>
          <p>
            <label>Phone Number</label>
            <input type="text" name="phone" />
          </p>
          <p className="full">
            <label>Message</label>
            <textarea name="message" rows={5} defaultValue={""} />
          </p>
          <p className="full">
            <button id="submit" type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);