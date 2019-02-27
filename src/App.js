// react libs
import React, { Component } from 'react';

// material ui lib
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Fab from '@material-ui/core/Fab';

// third party libs
import classnames from 'classnames';

// custom components

// custom utils
import titleInitials from './utils/title-initial';

// fake data
import { messages, chats } from './fake-data/mock-data';

// material icons
import Restore from '@material-ui/icons/Restore';
import Explore from '@material-ui/icons/Explore';
import AddCircle from '@material-ui/icons/AddCircle';

// styles
import { withStyles } from '@material-ui/core/styles'; // ? components decorator

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default
  },
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`
  },
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
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll'
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48
  },
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100vh',
    width: '100%',
    overflow: 'hidden'
  },
  messagesWrapper: {
    overflowY: 'scroll',
    height: '80%',
    width: '100%',
    paddingTop: '70px'
  },
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
  },
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`
  },
  messageWrapperFromMe: {
    justifyContent: 'flex-end'
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff'
  }
});

class App extends Component {
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              DogeCodes React Chat
            </Typography>
          </Toolbar>
        </AppBar>
        {/* ===== */}
        <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
          <div className={classes.drawerHeader}>
            <TextField
              fullWidth
              margin="normal"
              placeholder="Search chats..."
            />
          </div>
          <Divider />
          <List className={classes.chatsList}>
            {chats.map((chat, index) => (
              <ListItem key={index} button>
                <Avatar>{chat.title && titleInitials(chat.title)}</Avatar>
                <ListItemText primary={chat.title} />
              </ListItem>
            ))}
          </List>
          <Fab color="primary" className={classes.newChatButton}>
            <AddCircle />
          </Fab>
          <BottomNavigation showLabels>
            <BottomNavigationAction label="My chats" icon={<Restore />} />
            <BottomNavigationAction label="Explore" icon={<Explore />} />
          </BottomNavigation>
        </Drawer>
        {/* ===== */}
        <main className={classes.chatLayout}>
          <div className={classes.messagesWrapper} ref="messagesWrapper">
            {messages &&
              messages.map((message, index) => {
                const isMessageFromMe = message.sender === 'me';

                const userAvatar = (
                  <Avatar>{titleInitials(message.sender)}</Avatar>
                );

                return (
                  <div
                    key={index}
                    className={classnames(
                      classes.messageWrapper,
                      isMessageFromMe && classes.messageWrapperFromMe
                    )}
                  >
                    {!isMessageFromMe && userAvatar}
                    <Paper
                      className={classnames(
                        classes.message,
                        isMessageFromMe && classes.messageFromMe
                      )}
                    >
                      <Typography variant="caption">
                        {message.sender}
                      </Typography>
                      <Typography variant="body1">{message.content}</Typography>
                    </Paper>
                    {isMessageFromMe && userAvatar}
                  </div>
                );
              })}
          </div>
          {/* ===== */}
          <div className={classes.messageInputWrapper}>
            <Paper className={classes.messageInput} elevation={6}>
              <Input fullWidth placeholder="Type your message" />
            </Paper>
          </div>
        </main>
      </div>
    );
  }

  scrollDownHistory() {
    const messagesWrapper = this.refs.messagesWrapper;

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }
}

export default withStyles(styles)(App);
