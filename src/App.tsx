import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    hasClock: true,
  };

  today = new Date();

  clockName = 'Clock-0';

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.clockName = getRandomName();
    }, 3300);
  }

  componentDidUpdate(): void {}

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  // This code starts a timer
  timerId = window.setInterval(() => {
    this.clockName = getRandomName();
  }, 3300);

  // this code stops the timer

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">{this.clockName}</strong>

          {' time is '}

          <span className="Clock__time">
            {this.today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </div>
    );
  }
}
