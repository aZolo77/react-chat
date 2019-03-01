// react libs
import React, { Component } from 'react';

// material ui libs
import { TextField, Button } from '@material-ui/core';

// third party libs
import fetch from 'isomorphic-fetch';

// styles
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  signUpButton: {
    marginTop: theme.spacing.unit * 2
  }
});

class SignupForm extends Component {
  state = {
    username: {
      value: '',
      isValid: true
    },
    password: {
      value: '',
      isValid: true
    },
    repeatedPassword: {
      value: '',
      isValid: true
    }
  };

  render() {
    const { classes } = this.props;
    const { username, password, repeatedPassword } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Username"
          name="username"
          placeholder="Type your username..."
          type="text"
          margin="normal"
          autoComplete="username"
          value={username.value}
          onChange={this.handleInputChange}
          error={!username.isValid}
        />
        <TextField
          required
          fullWidth
          label="Password"
          name="password"
          placeholder="Type your password..."
          type="password"
          margin="normal"
          autoComplete="new-password"
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
        <TextField
          required
          fullWidth
          label="Repeat password"
          name="repeatedPassword"
          placeholder="Repeat your password..."
          type="password"
          margin="normal"
          autoComplete="new-password"
          value={repeatedPassword.value}
          onChange={this.handleInputChange}
          error={!repeatedPassword.isValid}
        />
        <Button
          fullWidth
          variant="contained"
          type="submit"
          color="primary"
          className={classes.signUpButton}
        >
          Signup
        </Button>
      </form>
    );
  }

  handleInputChange = e => {
    e.persist();

    const { name, value } = e.target;

    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value
      }
    }));
  };

  validate = () => {
    const { password, repeatedPassword } = this.state;
    const isValid = password.value === repeatedPassword.value;

    this.setState({
      password: { ...password, isValid },
      repeatedPassword: { ...repeatedPassword, isValid }
    });

    return isValid;
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.validate()) {
      return;
    }

    const { username, password } = this.state;

    console.log('Login: ', username.value);
    console.log('Password: ', password.value);

    // * sending request
    fetch('http://localhost:8000/v1/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(e => console.error(e));
  };
}

export default withStyles(styles)(SignupForm);
