// react libs
import React from 'react';

// material ui lib
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// styles
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`
  }
});

const ChatHeader = ({ classes }) => (
  <AppBar color="primary" className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        DogeCodes React Chat
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(ChatHeader);
