// react libs
import React from 'react';

// material ui lib
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// third party libs
import classnames from 'classnames';

// custom components
import Avatar from '../avatar/Avatar';

// styles
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
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

const ChatMessage = ({ classes, sender, content }) => {
  const isMessageFromMe = sender === 'me';
  const userAvatar = <Avatar colorFrom={sender}>{sender}</Avatar>;

  return (
    <div
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
        <Typography variant="caption">{sender}</Typography>
        <Typography variant="body1">{content}</Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  );
};

export default withStyles(styles)(ChatMessage);
