import React, { Component } from 'react';

class Countdown extends Component {
  constructor() {
    super();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.decrementSeconds = this.decrementSeconds.bind(this);
    this.decrementMinutes = this.decrementMinutes.bind(this);
    this.state = {
      minutes: 60,
      seconds: 0
    };
  }
  decrementSeconds() {
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;
    seconds--;
    if (seconds < 0){
      if (minutes > 0){
        seconds = 59;
      }
      this.decrementMinutes();
    }
    this.setState({ seconds });
  }
  decrementMinutes() {
    let minutes = this.state.minutes;
    if (minutes < 1){
      this.stop();
      this.reset();
    } else {
      minutes--;
      this.setState({ minutes });
    }
  }
  start(e) {
    this.timer = window.setInterval(() => {
      this.decrementSeconds();
    }, 1000);
  }
  stop(e) {
    clearInterval(this.timer);
  }
  reset() {
    this.stop();
    this.setState({ minutes: 60, seconds: 0 });
  }
  formatSeconds(seconds) {
    return (seconds < 10) ? seconds = `0${seconds}` : seconds;
  }
  render() {
    return (
      <div className="countdown">
        <h1>
          <span className="minutes">{this.state.minutes}</span>: 
          <span className="seconds">{this.formatSeconds(this.state.seconds)}</span>
        </h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Countdown;