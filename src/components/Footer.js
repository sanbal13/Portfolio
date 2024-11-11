import React from 'react';
import MyConnect from './MyConnect';
import attributions from '../data/attributions';
import useMediaQuery from '@mui/material/useMediaQuery'

export default function Footer() {
  const isBigScreen = useMediaQuery('(min-width: 882px)');
  return (
    <div className="footer padding-3rem">
      <div className="container">
        <div className="primary-footer">
          <span className="developer">
            Developed by Santosh Balchandran
          </span>
          { isBigScreen ?
          (<span className="separator">
           {' '} | {' '}
          </span>) : <hr className="developer-designation-hr"/>
          }
          <span className="designation">
            Full Stack Web Developer
          </span>
        </div>
        <div className="connect-footer">
          <MyConnect />
        </div>
        <div className="attribution-footer">
          <div className="attribution">
            <h4>Attribution to the contributors</h4>
            <ul>
              {attributions.map(attribution =>
                <li key={attribution.icon}>
                  <a
                    href={attribution.iconLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {attribution.icon}
                  </a>{' '}
                  by{' '}
                  <a
                    href={attribution.contributorLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {attribution.contributor}
                  </a>
                  on{' '}
                  <a href={attribution.siteLink} target="_blank"
                    rel="noreferrer">
                    {attribution.site}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
