import React, {useEffect, useState} from 'react'
import './css/Projects.css'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProjects(data))
  }, [])
  


  return (
    <div className='project-container'>
      <h2 className='product-header'>My Projects</h2>
      <div className="projects">
        {projects.map(project => (
          <div key={projects.id} className="project">
            <img src={project.image} alt={project.title} />
            <div className='project-details'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.url} target='_blank' rel="noopener noreferrer">Wishlist</a>
              <a href={project.url} target='_blank' rel="noopener noreferrer">Buy</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects