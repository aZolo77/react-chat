// react libs
import React, { Component } from 'react';

// material ui libs
import { TextField, Button } from '@material-ui/core';

// styles
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  signUpButton: {
    marginTop: theme.spacing.unit * 2
  }
});

class LoginForm extends Component {
  state = {
    username: {
      value: '',
      isValid: true
    },
    password: {
      value: '',
      isValid: true
    }
  };

  render() {
    const { classes } = this.props;
    const { username, password } = this.state;

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
          autoComplete="current-password"
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
        <Button
          fullWidth
          variant="contained"
          type="submit"
          color="primary"
          className={classes.signUpButton}
        >
          Login
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

  handleSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    console.log('Login: ', username.value);
    console.log('Password: ', password.value);

    // TODO: validate values
  };
}

export default withStyles(styles)(LoginForm);
