import React, { PureComponent } from 'react';

export default class Clock extends PureComponent {
  state = {
    time: new Date()
  };

  // * render every second
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <p>{this.state.time.toLocaleTimeString()}</p>;
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }
}
