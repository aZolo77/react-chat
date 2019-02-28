// react libs
import React from 'react';

// material ui lib
import List from '@material-ui/core/List';

// custom components
import ChatListItem from '../chat-list-item/ChatListItem';

// styles
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll'
  }
});

const ChatList = ({ classes, chats }) => (
  <List className={classes.chatsList}>
    {chats.map((chat, index) => (
      <ChatListItem key={index} {...chat} />
    ))}
  </List>
);

export default withStyles(styles)(ChatList);
