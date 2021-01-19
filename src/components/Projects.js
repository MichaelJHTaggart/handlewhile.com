import React from 'react'
import { BsTrash } from "react-icons/bs";
import axios from 'axios'
import '../scss/Projects.scss';

const Projects = (props) => {
    console.log(props.name)

    function deleteTheEvent() {
        axios.delete(`/api/user/timed_events/${props.name.id}`)
            .then(() => {
                props.getTimedEvents()
            })
    }


    function pullUpTimer() {
        // axios.get(`/api/user/timed_events/${props.name.id}`)
        //     .then(() => {
        //         props.
        // })
    }

    return (
        <div className="orange">
            <div className="text">
                {props.name.name}
            </div>
            <BsTrash className="trash" onClick={deleteTheEvent} />
            <div className="text">
                {props.name.time}
            </div>
        </div>
    )
}
export default Projects