import React from 'react';
import './TooltipBullets.css'

const TooltipBullets = ({ bulletBlue, bulletRed }) => {

  let textred = '';
  let textblue = '';

  if (bulletRed === 1) {
    textred = 'bala real'
  } else {
    textred = 'balas reales'
  }

  if (bulletBlue === 1) {
    textblue = 'bala de salva'
  } else {
    textblue = 'balas de salva'
  }

  return (
    <>
      <span className="tooltip">

        <div className='content-text-tooltip'>

          <p fill="white">{`${bulletBlue} ${textblue} | ${bulletRed} ${textred}`}</p>

        </div>

      </span>
    </>
  );
};

export default TooltipBullets;
