import React from "react";
import "./CountDownClock.css";
const 
  minuteToSecond =  60,
  hourToMinute = 60,
  hourToSecond = minuteToSecond * 60,
  dayToSecond = hourToSecond * 24,
  dayToMili = dayToSecond * 1000;
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
                {Math.floor((this.state.restTime % dayToSecond) / hourToSecond)}
              </span>
              Hour
            </li>
            <li>
              <span>
                {Math.floor(this.state.restTime % dayToSecond / hourToMinute % minuteToSecond)}
              </span>
              Minute
            </li> 
            <li>
              <span>
                {(this.state.restTime % minuteToSecond)}
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
