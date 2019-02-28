// react libs
import React from 'react';

// custom components
import ChatMessageList from '../chat-message-list/ChatMessageList';
import MessageInput from '../message-input/MessageInput';

// styles
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100vh',
    width: '100%',
    overflow: 'hidden'
  }
});

const Chat = ({ classes, messages }) => (
  <main className={classes.chatLayout}>
    <ChatMessageList messages={messages} />
    <MessageInput />
  </main>
);

export default withStyles(styles)(Chat);
