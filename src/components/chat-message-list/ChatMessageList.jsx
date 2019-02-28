// react libs
import React, { Component } from 'react';

// custom components
import ChatMessage from '../chat-message/ChatMessage';

// styles
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  messagesWrapper: {
    overflowY: 'scroll',
    height: '80%',
    width: '100%',
    paddingTop: '70px'
  }
});

class ChatMessagesList extends Component {
  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  render() {
    const { classes, messages } = this.props;

    return (
      <div className={classes.messagesWrapper} ref="messagesWrapper">
        {messages &&
          messages.map((message, index) => (
            <ChatMessage key={index} {...message} />
          ))}
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

export default withStyles(styles)(ChatMessagesList);
