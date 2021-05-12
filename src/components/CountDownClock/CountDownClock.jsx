import React from "react";
import "./CountDownClock.css";
const secondToMili = 1000,
  minuteToMili = secondToMili * 60,
  hourToMili = minuteToMili * 60,
  dayToMili = hourToMili * 24;
class CountDownClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restTime:
        new Date("5/15/2021, 9:00:00 AM").getTime() - new Date().getTime(),
    };
    this.startTimer();
  }
  startTimer() {
    this.timerID = setInterval(() => this.countDown(), 1000);
  }
  turnOffTimer() {
    clearInterval(this.timerID);
  }
  countDown() {
    if (this.state.restTime === 0) {
      this.turnOffTimer();
      return;
    }
    this.setState((preState) => {
      return { restTime: preState.restTime - 1 };
    });
  }
  render() {
    return (
      <div className="clock-container">
        <div className="title">Countdown to HEAT</div>
        <div className="clock-by-unit">
          <ul>
            <li>
              <span>{Math.floor(this.state.restTime / dayToMili)}</span>Day
            </li>
            <li>
              <span>
                {Math.floor((this.state.restTime % dayToMili) / hourToMili)}
              </span>
              Hour
            </li>
            <li>
              <span>
                {Math.floor((this.state.restTime % hourToMili) / minuteToMili)}
              </span>
              Minute
            </li>
            <li>
              <span>
                {Math.floor((this.state.restTime % hourToMili) / minuteToMili)}
              </span>
              Second
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default CountDownClock;
