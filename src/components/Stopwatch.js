import React, { Component } from "react";
import axios from 'axios'
import { connect } from 'react-redux'
import '../scss/Stopwatch.scss';


class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 0,
            name: ""
        };
        this.addTimestamp = this.addTimestamp.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        // this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.getOneEvent = this.getOneEvent.bind(this)
    }

    componentDidMount() {
        if (this.props.match.params.id) { this.getOneEvent() }
    }

    getOneEvent = () => {
        const { id } = this.props.match.params
        axios
            .get(`/api/user/timed_events/${id}`)
            .then((res) => {
                this.setState({
                    timerTime: res.data[0].time,
                    name: res.data[0].name
                })
                console.log(res.data)
            })
            .catch((err) => {
                this.props.history.push('/404')
            })
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
    addTimestamp() {
        const { id } = this.props.match.params
        const body = {
            name: this.state.name,
            time: this.state.timerTime
        }
        if (this.props.match.params.id) {
            axios.put(`/api/user/timed_events/${id}`, body)
                .then((res) => {
                    return res.data
                })
        } else {

            axios.post('/api/user/timed_events', body)
                .then((res) => {
                    return res.data
                })
        }
    }
    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        const { timerTime } = this.state;
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        return (
            <div className="stopwatch-body">
                <div className="timer-name">
                    <form>
                        <input
                            id="stopwatch-name"
                            maxLength="30"
                            value={this.state.name}
                            onChange={e => this.handleName(e)}
                            type="text"
                            placeholder="Project Name Here!"
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
                    {this.state.timerOn === false && this.state.timerTime > 0 && (
                        <button className="save-button" onClick={this.addTimestamp}>save</button>
                    )}

                </div>

            </div>
        );
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps)(Stopwatch)