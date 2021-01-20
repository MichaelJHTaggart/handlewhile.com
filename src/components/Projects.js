import React from 'react'
import { Link } from 'react-router-dom';
import { BsTrash } from "react-icons/bs";
import axios from 'axios'
import '../scss/Projects.scss';

const Projects = (props) => {

    function deleteTheEvent() {
        axios.delete(`/api/user/timed_events/${props.name.id}`)
            .then(() => {
                props.getTimedEvents()
            })
    }

    const timerTime = props.name.time;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
        <div className="orange">
            <BsTrash className="trash" onClick={deleteTheEvent} />
            <Link to={`/projects/${props.name.id}`}>
                <div className='info-container'>
                    <p className='info'>{props.name.name}</p>
                    <p className='info'>{hours} : {minutes} : {seconds}</p>
                </div>
            </Link>
        </div >
    )
}
export default Projects