//! This was an attempt to hook the stopwatch component

// import React, { useState } from "react";
// // import axios from 'axios'
// import { connect } from 'react-redux'
// import '../scss/Stopwatch.scss';

// const Stopwatch = props => {
//  const [timerOn, setTimerOn] = useState(false)
//  const [timerStart, setTimerStart] = useState(0)
//  const [timerTime, setTimerTime] = useState(0)
//  const [name, setName] = useState('')

//  const timer = setInterval(() => {
//   setTimerTime(Date.now() - timerStart)
//  }, 10);

//  let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
//  let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
//  let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

//  function startTimer() {
//   setTimerOn(!timerOn)
//   setTimerTime(timerTime)
//   setTimerStart(Date.now() - timerTime)

//  };

//  function stopTimer() {
//   setTimerOn(!timerOn)
//   clearInterval(timer)
//  };

//  function resetTimer() {
//   setTimerStart(0)
//   setTimerTime(0)
//  }

//  return (
//   <div className="stopwatch-body">
//    <div className="timer-name">
//     <form>
//      <input
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//       type="text"
//       placeholder="Your Project Name Here!"
//       name="name"
//       required>
//      </input>
//     </form>
//    </div>

//    <div className="stopwatch-display">
//     {hours} : {minutes} : {seconds}
//    </div>

//    {timerOn === false && timerTime === 0 && (
//     <button className="orange-button" onClick={startTimer}>start</button>
//    )}
//    {timerOn === true && (
//     <button className="blue-button" onClick={stopTimer}>stop</button>
//    )}
//    {timerOn === false && timerTime > 0 && (
//     <button className="orange-button" onClick={startTimer}>resume</button>
//    )}
//    <div id="grey-buttons">
//     {timerOn === false && timerTime > 0 && (
//      <button className="reset-button" onClick={resetTimer}>reset</button>
//     )}

//     <button className="save-button">save</button>
//    </div>
//   </div>
//  );
// }
// function mapStateToProps(reduxState) {
//  return reduxState
// }
// export default connect(mapStateToProps)(Stopwatch)

//! The following is the Project List component but in a class component
// import React, { Component } from 'react'
// import axios from 'axios'

// class ProjectList extends Component {
//  constructor() {
//   super()
//   this.state = {
//    projectList: []
//   }
//   this.getAllProjects = this.getAllProjects.bind(this)
//  }
//  componentDidMount() {
//   this.getProjectList()
//  }

//  const mappedProjects = //get request information. .map

//   getAllProjects(e) {
//  axios.get('/api/user/timed_events',).then(res => {
//   console.log(res)
//  })

// }

// render(){

// }
// return (<div>
//  Projects.js
// </div>
// )

// }

// export default Projects


/*
   Question: My backend requires the following:
   const { id } = req.session.user

   When I make an axios request on the front end, how do I make sure that the session.user is sent with my request?

   Attempted:
   Sending the axios request without any parameter, and expecting the session.user to be sent without anything needing to be prepared.

   Saving the session.user.id on Redux => issue is that the Redux is not able to send back the value appropriately.

   Other ideas to test:
   The session is saved on the cookie (for the user), and on the server side. I am concerned that when I click Sign in OR Create account (on those 2 respective components) that I am closing the session on the server side OR on the user side.
  */
