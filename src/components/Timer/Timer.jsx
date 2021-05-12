import React from 'react';
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentDate: new Date('5/15/2021, 9:00:00 AM').getTime() - new Date().getTime()
        }
        this.startTimer();
      }
        startTimer()
        {
          this.timerID = setInterval(() => this.countDown(),1000)
        }
        turnOffTimer()
        {
          clearInterval(this.timerID);
        }
        countDown()
        {
          if(this.state.currentDate === 0)
          {
            this.turnOffTimer();
            return;
          }
          this.setState((preState) =>{return {currentDate: preState.currentDate -1 };});
        }
        render()
        {
          
          return (
            <h1>{this.state.currentDate}</h1>
          );
        }
}
export default Timer