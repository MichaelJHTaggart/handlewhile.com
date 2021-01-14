import React, { Component } from "react";
import '../scss/Stopwatch.scss';
// import axios from 'axios'

class Stopwatch extends Component {
    constructor() {
        super();
        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 0,
            name: ""
        };
        // this.addTimestamp = this.addTimestamp.bind(this)
    }

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };

    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    };

    // addTimestamp() {
    //     const { timerTime, name } = this.state
    //     const body = {
    //         project: name,
    //         data: timerTime
    //     }

    //     axios.post('/api/user/timed_events', body).then(() => {
    //         this.props.getAllTimestamps()
    //     })
    // }
    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        console.log(this.state.name)
        const { timerTime } = this.state;

        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        return (
            <div className="stopwatch-body">
                <div className="timer-name">
                    <form>
                        <input
                            value={this.state.name}
                            onChange={e => this.handleName(e)}
                            type="text"
                            placeholder="Your Project Name Here!"
                            name="name"
                            required>
                        </input>
                    </form>
                </div>

                <div className="stopwatch-display">
                    {hours} : {minutes} : {seconds}
                </div>

                {this.state.timerOn === false && this.state.timerTime === 0 && (
                    <button className="orange-button" onClick={this.startTimer}>start</button>
                )}
                {this.state.timerOn === true && (
                    <button className="blue-button" onClick={this.stopTimer}>stop</button>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                    <button className="orange-button" onClick={this.startTimer}>resume</button>
                )}
                <div id="grey-buttons">
                    {this.state.timerOn === false && this.state.timerTime > 0 && (
                        <button className="reset-button" onClick={this.resetTimer}>reset</button>
                    )}

                    <button className="save-button" onClick={this.addTimestamp}>save</button>
                </div>

            </div>
        );
    }
}

export default Stopwatch;