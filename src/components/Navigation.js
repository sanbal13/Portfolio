import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
  return (
    <header className="flex">
      <div className="main-logo">Santosh Balchandran</div>
      <nav>
        <ul className="flex">
          <li>
          <a href = "https://drive.google.com/file/d/1DRLzBRpOVjZcXuNCMF0pyqtMwLbVbFjw/view?usp=sharing" target="_blank" rel="noreferrer">
            <img
              src="./logos/resume.png"
              alt="resume"
              style={{ width: '4rem' }}
            />
            </a>
          </li>

          <li>
          <a href = "https://github.com/sanbal13" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="4x" className="black" />
            </a>
          </li>
          <li>
          <a href = "https://www.codewars.com/users/sanbal13" target="_blank" rel="noreferrer">
            <img
              src="./logos/codewars.png"
              alt="codewars"
              style={{ width: '4rem' }}
            />
            </a>
          </li>
          <li>
          <a href = "https://twitter.com/sanbal2016" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="4x" className="blue" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
