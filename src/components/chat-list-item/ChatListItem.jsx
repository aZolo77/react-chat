// react libs
import React from 'react';

// material ui lib
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// custom components
import Avatar from '../avatar/Avatar';

const ChatListItem = ({ title }) => (
  <ListItem button>
    <Avatar colorFrom={title}>{title}</Avatar>
    <ListItemText primary={title} />
  </ListItem>
);

export default ChatListItem;
