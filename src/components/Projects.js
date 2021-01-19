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

    return (
        <div className="orange">
            <BsTrash className="trash" onClick={deleteTheEvent} />
            <Link to={`/projects/${props.name.id}`}>
                <div className='return'>
                    <p className='return'>{props.name.name}</p>
                    <p className='return'>{props.name.time}</p>
                </div>
            </Link>
        </div >
    )
}
export default Projects