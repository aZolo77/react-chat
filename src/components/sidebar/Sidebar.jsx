// react libs
import React from 'react';

// material ui lib
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Fab from '@material-ui/core/Fab';

// material icons
import Restore from '@material-ui/icons/Restore';
import Explore from '@material-ui/icons/Explore';
import AddCircle from '@material-ui/icons/AddCircle';

// custom Components
import ChatList from '../chat-list/ChatList';

// styles
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100vh',
    width: 320
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 3
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48
  }
});

const Sidebar = ({ classes, chats }) => (
  <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
    <div className={classes.drawerHeader}>
      <TextField fullWidth margin="normal" placeholder="Search chats..." />
    </div>
    <Divider />
    <ChatList chats={chats} />
    <Fab color="primary" className={classes.newChatButton}>
      <AddCircle />
    </Fab>
    <BottomNavigation showLabels>
      <BottomNavigationAction label="My chats" icon={<Restore />} />
      <BottomNavigationAction label="Explore" icon={<Explore />} />
    </BottomNavigation>
  </Drawer>
);

export default withStyles(styles)(Sidebar);
