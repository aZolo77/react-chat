// react libs
import React from 'react';
// import { Link } from 'react-router-dom';

// custom components
import Sidebar from '../sidebar/Sidebar';
import ChatHeader from '../chat-header/ChatHeader';
import Chat from '../chat/Chat';

// fake data
import { messages, chats } from '../../fake-data/mock-data';

// styles
import { withStyles } from '@material-ui/core/styles'; // ? components decorator

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default
  }
});

const ChatPage = ({ classes }) => (
  <div className={classes.root}>
    <ChatHeader />
    <Sidebar chats={chats} />
    <Chat messages={messages} />
  </div>
);

export default withStyles(styles)(ChatPage);
