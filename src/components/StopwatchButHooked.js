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