import React from 'react'
import projects from '../data/projects'
import Update from './Update'

export default function Projects() {
  
  let react_projects = projects.filter(project => project.type === 'react');
  let node_projects = projects.filter(project => project.type === 'node');
  let javascript_projects = projects.filter(project => project.type === 'javascript');
  let html_projects = projects.filter(project => project.type === 'html');
  let hobby_projects = projects.filter(project => project.type === 'hobby');
  console.log(react_projects);
  return (
    <div className='padding-3rem'>
    <div className="container">
    <h2>Projects</h2>  
    <h3 className="project-type">
      React Projects
    </h3>    
    <ProjectsDisplay projects={react_projects} />
    <h3 className="project-type">
      Node Projects
    </h3>    
    <ProjectsDisplay projects={node_projects} />
    <h3 className="project-type">
      Javascript Projects
    </h3>    
    <ProjectsDisplay projects={javascript_projects} />
    <h3 className="project-type">
      Html Projects
    </h3>    
    <ProjectsDisplay projects={html_projects} />
    <h3 className="project-type">
      Hobby Projects
    </h3>    
    <ProjectsDisplay projects={hobby_projects} />
    <Update section="Project" />
     </div>
     </div>
     
  )
}


function ProjectsDisplay(props) {
  let projects = props.projects;
  return (
    <ul className='flex flex-start'>   
    {projects.map(project => (
      <li key={project.id}>
      <h3 className="project-title">{project.title}</h3>
      <div className='card'>
      <img src={project.image} alt={project.title} className='thumbnail'/>
      <a href={project.link} target='_blank' rel='noreferrer' className='card-button'>Visit Site</a>
      <a href={project.github_link} target='_blank' rel='noreferrer' className='github-link'>Github Link</a>
      </div>
      </li>
     
    ))}
    </ul>
  )
}

