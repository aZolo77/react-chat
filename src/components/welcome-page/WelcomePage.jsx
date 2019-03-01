// react libs
import React, { Component, Fragment } from 'react';

// material ui libs
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab
} from '@material-ui/core';

// custom components
import LoginForm from '../login-form/LoginForm';
import SignupForm from '../signup-form/SignupForm';

// styles
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    marginTop: 64 + theme.spacing.unit * 3,
    width: 500
  },
  tabContent: {
    padding: theme.spacing.unit * 3
  }
});

class WelcomePage extends Component {
  state = {
    activeTab: 0
  };

  render() {
    const { classes } = this.props;
    const { activeTab } = this.state;

    return (
      <Fragment>
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ flex: 1 }}>
              DogeCodes React Chat
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center">
          <Grid item>
            <Paper className={classes.paper}>
              <AppBar position="static" color="default">
                <Tabs
                  value={activeTab}
                  onChange={this.handleTabChange}
                  variant="fullWidth"
                >
                  <Tab label="Login" />
                  <Tab label="Sign Up" />
                </Tabs>
              </AppBar>
              <div className={classes.tabContent}>
                {activeTab === 0 && <LoginForm />}
                {activeTab === 1 && <SignupForm />}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }

  handleTabChange = (e, value) => {
    this.setState({ activeTab: value });
  };
}

export default withStyles(styles)(WelcomePage);
