import { useState, useEffect } from 'react';


export default function Skills() {
  const [activeLogo, setActiveLogo] = useState(1);
  useEffect(() => {
    const logoChangeInterval = setInterval(() => {activeLogo === 8 ? setActiveLogo(1) : setActiveLogo(activeLogo + 1)}, 1000);
    return () => {clearInterval(logoChangeInterval)};
  }, [activeLogo]);
  return (
    <>
      <h2>Skills</h2>
      <ul className='flex logo-section'>
        <li className="logo-container"><img src="./logos/html5.png" alt="html-logo" className='logo'style= {activeLogo===1 ? {filter: "grayscale(0%)"} : {}}/></li>
        <li className="logo-container"><img src="./logos/css.png" alt="css-logo" className='logo'style= {activeLogo===2 ? {filter: "grayscale(0%)"} : {}}/></li>
        <li className="logo-container"><img src="./logos/javascript.png" alt="javascript-logo" className='logo' style= {activeLogo===3 ? {filter: "grayscale(0%)"} : {}}/></li>
        <li className="logo-container"><img src="./logos/react.png" alt="react-logo" className='logo' style= {activeLogo===4 ? {filter: "grayscale(0%)"} : {}}/></li>
        <li className="logo-container"><img src="./logos/node-js.png" alt="node-logo" className='logo' style= {activeLogo===5 ? {filter: "grayscale(0%)"} : {}}/></li>
        <li className="logo-container" style={{alignSelf: "center"}}><img src="./logos/express.png" alt="express-logo" className='logo' style= {activeLogo===6 ? {filter: "grayscale(0%)"} : {}}/></li>
        <li className="logo-container"><img src="./logos/mongodb.png" alt="mongodb-logo" className='logo' style= {activeLogo===7 ? {filter: "grayscale(0%)"} : {}}/></li>
        <li className="logo-container"><img src="./logos/mongoose.png" alt="mongoose-logo" className='logo' style= {activeLogo===8 ? {filter: "grayscale(0%)"} : {}}/></li>
      </ul>
    </>
  );
}
