import { useState, useEffect } from 'react';

export default function Skills() {
  const [activeLogo, setActiveLogo] = useState('odd');
  useEffect(() => {
    const logoChangeInterval = setInterval(() => {
      activeLogo === 'even' ? setActiveLogo('odd') : setActiveLogo('even');
    }, 1000);
    return () => {
      clearInterval(logoChangeInterval);
    };
  }, [activeLogo]);
  return (
    <div className='padding-3rem background-primary'>
    <div className="container">
      <h2>Familiar Technologies</h2>
      <ul className="flex logo-section">
        <li className="logo-container">
          <img
            src="./logos/html5.png"
            alt="html-logo"
            className="logo"
            style={activeLogo === 'odd' ? { filter: 'grayscale(0%)' } : {}}
          />
        </li>
        <li className="logo-container">
          <img
            src="./logos/css.png"
            alt="css-logo"
            className="logo"
            style={activeLogo === 'even' ? { filter: 'grayscale(0%)' } : {}}
          />
        </li>
        <li className="logo-container">
          <img
            src="./logos/javascript.png"
            alt="javascript-logo"
            className="logo"
            style={activeLogo === 'odd' ? { filter: 'grayscale(0%)' } : {}}
          />
        </li>
        <li className="logo-container">
          <img
            src="./logos/react.png"
            alt="react-logo"
            className="logo"
            style={activeLogo === 'even' ? { filter: 'grayscale(0%)' } : {}}
          />
        </li>
        <li className="logo-container">
          <img
            src="./logos/node-js.png"
            alt="node-logo"
            className="logo"
            style={activeLogo === 'odd' ? { filter: 'grayscale(0%)' } : {}}
          />
        </li>
        <li className="logo-container" style={{ alignSelf: 'center' }}>
          <img
            src="./logos/express.png"
            alt="express-logo"
            className="logo"
            style={activeLogo === 'even' ? { filter: 'grayscale(0%)' } : {}}
          />
        </li>
        <li className="logo-container">
          <img
            src="./logos/mongodb.png"
            alt="mongodb-logo"
            className="logo"
            style={activeLogo === 'odd' ? { filter: 'grayscale(0%)' } : {}}
          />
        </li>
        <li className="logo-container">
          <img
            src="./logos/mongoose.png"
            alt="mongoose-logo"
            className="logo"
            style={activeLogo === 'even' ? { filter: 'grayscale(0%)' } : {}}
          />
        </li>
      </ul>
    </div>
    </div>
  );
}
