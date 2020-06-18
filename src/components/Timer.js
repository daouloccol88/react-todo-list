import React, { Component } from 'react';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerStarted: false,
            timerStopped: true,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    handleTimerStart (e) {
        e.preventDefault();

        if(this.state.timerStopped) {
            this.timer = setInterval(() => {
                this.setState({timerStarted: true, timerStopped: false});
                if(this.state.timerStarted) {
                    if(this.state.seconds >= 60) {
                        this.setState((prevState) => ({minutes: prevState.minutes +1, seconds: 0}))
                    }
                    if(this.state.minutes >= 60) {
                        this.setState((prevState) => ({hours: prevState.hours+1, minutes: 0,seconds: 0}))
                    }
                    this.setState((prevState) => ({ seconds: prevState.seconds +1 }))
                }
            }, 1000)
        }

    }

    handleTimerStop (e) {
        e.preventDefault();

        this.setState({timerStarted:false, timerStopped: true});
        clearInterval(this.timer);
    }

    handleTimerReset (e) {
        e.preventDefault();
        this.setState({timerStarted: false, timerStopped: true, seconds: 0, minutes: 0, hours: 0});
        clearInterval(this.timer)
    }

    render() {
        return(
            <div className="container">
                <div className="text-center"><h3>{this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds}</h3></div>
                <div className=" row">
                <div className="col-4"><span><button type="submit" className="btn btn-block btn-success btn-primary mt-3" onClick={this.handleTimerStart.bind(this)}>Démarrer le Timer</button></span></div>
                <div className="col-4"><span><button type="submit" className="btn btn-block btn-danger btn-primary mt-3" onClick={this.handleTimerStop.bind(this)}>Arrêter le Timer</button></span></div>
                <div className="col-4"><span><button type="submit" className="btn btn-block btn-warning btn-primary mt-3" onClick={this.handleTimerReset.bind(this)}>Reset le Timer</button></span></div>
            </div> 
            </div>
        )
    }
}