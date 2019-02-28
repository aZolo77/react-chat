// react libs
import React, { Component } from 'react';

// material ui lib
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';

// styles
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 350px)`,
    padding: theme.spacing.unit * 3
  },
  messageInput: {
    padding: theme.spacing.unit * 2
  }
});

class MessageInput extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.messageInput} elevation={5}>
          <Input fullWidth placeholder="Type your message" />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(MessageInput);
