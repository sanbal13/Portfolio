import React from 'react'

export default function Projects() {
  return (
    <div className='padding-3rem'>
    <div className="container">
    <h2>Projects</h2>
     <ul className='flex'>     
        <li className='project-card'><a href="https://activity-tracker-tau.vercel.app/" target="_blank" rel="noreferrer"><img src="./images/activity_tracker.png" alt="activity_tracker" className="thumbnail"/></a>
        <h3>Project Name: Activity Tracker</h3>        
        <h3>Github Link: <a href="https://github.com/sanbal13/activity-tracker">https://github.com/sanbal13/activity-tracker</a></h3>
        <a href="https://activity-tracker-tau.vercel.app/" target="_blank" rel="noreferrer" className="site-button">Visit Site</a>
        </li>   
        <li className='project-card'><a href="https://calculator-swart-seven.vercel.app/" target="_blank" rel="noreferrer"><img src="./images/calculator.png" alt="calculator" className="thumbnail"/></a>
        <h3>Project Name: Calculator</h3>        
        <h3>Github Link: <a href="https://github.com/sanbal13/Calculator">https://github.com/sanbal13/Calculator</a></h3>
        <a href="https://calculator-swart-seven.vercel.app/" target="_blank" rel="noreferrer" className="site-button">Visit Site</a>
        </li>   
        <li className='project-card'><a href="https://logic-games.vercel.app/" target="_blank" rel="noreferrer"><img src="./images/logic_games.png" alt="logic games" className="thumbnail"/></a>
        <h3>Project Name: Logic Games</h3>        
        <h3>Github Link: <a href="https://github.com/sanbal13/Logic-Games">https://github.com/sanbal13/Logic-Games</a></h3>
        <a href="https://logic-games.vercel.app/" target="_blank" rel="noreferrer" className="site-button">Visit Site</a>
        </li>            
     </ul>
     </div>
     </div>
  )
}
