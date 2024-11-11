import { useState, useEffect } from 'react';
import skills from '../data/skills';

export default function Skills() {
  const [activeLogo, setActiveLogo] = useState('odd');
  useEffect(() => {
    const logoChangeInterval = setInterval(() => {
      activeLogo === 'even' ? setActiveLogo('odd') : setActiveLogo('even');
    }, 2000);
    return () => {
      clearInterval(logoChangeInterval);
    };
  }, [activeLogo]);
  return (
    <div className='padding-3rem background-primary'>
    <div className="container">
      <h2>Technologies</h2>
      <ul className="flex justify-center">
        {
          skills.map(skill => 
            <li className='logo-container' key={skill.alt}>
               <img
            src={skill.src}
            alt={skill.alt}
            className="logo"
            style={activeLogo === skill.position ? { filter: 'grayscale(0%)' } : {}}
          />
            </li>
          )
        }
      </ul>
    </div>
    </div>
  );
}
