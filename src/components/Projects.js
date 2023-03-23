import React from 'react'
import projects from '../data/projects'

export default function Projects() {
  return (
    <div className='padding-3rem'>
    <div className="container">
    <h2>Projects</h2>
     <ul className='flex'>     
        {projects.map(project => (
          <li key={project.id}>
          <h3 className="project-title">{project.title}</h3>
          <div className='card'>
          <img src={project.image} alt={project.title} className='thumbnail'/>
          <a href={project.link} target='_blank' rel='noreferrer' className='card-button'>Visit Site</a>
          <a href={project.github_link} target='_blank' rel='noreferrer' className='github-link'>GithubLink</a>
          </div>
          </li>
        ))}
       
                
     </ul>
     </div>
     </div>
  )
}
