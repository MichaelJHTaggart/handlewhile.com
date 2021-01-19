import React, { useState, useEffect } from 'react'
import Projects from './Projects'
import axios from 'axios'

const ProjectList = (props) => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getTimedEvents()
  }, [])

  function getTimedEvents() {
    axios.get('/api/user/timed_events')
      .then((res) => {
        setProjects(res.data)
      })
  }

  const mappedProjects = projects.map((element) => {
    return <Projects getTimedEvents={getTimedEvents} name={element} />
  })

  return (
    <div>
      {mappedProjects}
    </div>
  )
}
export default ProjectList