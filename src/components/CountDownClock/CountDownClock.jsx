import React from "react";
import "./CountDownClock.css";
const currentTime =
  new Date("5/20/2021, 9:00:00 AM").getTime() - new Date().getTime();
class CountDownClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restTime: 8640000000,
      days: parseInt(currentTime / (1000 * 60 * 60 * 24)),
      hours: parseInt((currentTime / (1000 * 60 * 60 * 24)) % 60),
      minutes: parseInt((currentTime / 1000 / 60) % 60),
      seconds: parseInt((currentTime / 1000) % 60),
    };
  }
  componentDidMount() {
    this.setTime = setInterval(() => this.loadInfoByHours(), 0.01);
  }
  componentWillUnmount() {
    clearInterval(this.setTime);
  }
  loadInfoByHours() {
    this.setState((preState) => {
      if (this.state.restTime < currentTime + 12345678) {
        this.setState(() => {
          return {
            restTime: currentTime,
          };
        });
        clearInterval(this.setTime);
        this.setTime = setInterval(() => this.loadInfoBySeconds(), 1);
      }
      return {
        restTime: preState.restTime - 12345678,
        days: parseInt(preState.restTime / (1000 * 60 * 60 * 24)),
        hours: parseInt((preState.restTime / (1000 * 60 * 60 )) % 24),
        minutes: parseInt((preState.restTime / 1000 / 60) % 60),
        seconds: parseInt((preState.restTime / 1000) % 60),
      };
    });
  }
  loadInfoBySeconds(){
    this.setState((preState) => {
      if (this.state.restTime < currentTime + 12345678) {
        this.setState(() => {
          return {
            restTime: currentTime,
          };
        });
        clearInterval(this.setTime);
        this.setTime = setInterval(() => this.countDown(), 1000);
      }
      return {
        restTime: preState.restTime - 12345678,
        days: parseInt(preState.restTime / (1000 * 60 * 60 * 24)),
        hours: parseInt((preState.restTime / (1000 * 60 * 60 )) % 24),
        minutes: parseInt((preState.restTime / 1000 / 60) % 60),
        seconds: parseInt((preState.restTime / 1000) % 60),
      };
    });
}
  countDown() {
    this.setState((preState) => {
      return {
        restTime: preState.restTime - 1000,
        days: parseInt(preState.restTime / (1000 * 60 * 60 * 24)),
        hours: parseInt((preState.restTime / (1000 * 60 * 60 )) % 24),
        minutes: parseInt((preState.restTime / 1000 / 60) % 60),
        seconds: parseInt((preState.restTime / 1000) % 60),
      };
    });
  }

  render() {
    return (
      <div className="clock-container">
        <div className="title">Countdown to HEAT</div>
        <div className="clock-by-unit">
          <ul>
            <li>
              <span>{this.state.days}</span>Day
            </li>
            <li>
              <span>{this.state.hours}</span>
              Hour
            </li>
            <li>
              <span>{this.state.minutes}</span>
              Minute
            </li>
            <li>
              <span>{this.state.seconds}</span>
              Second
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default CountDownClock;
