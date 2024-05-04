import React from 'react';
import './Tooltip.css'

const Tooltip = ({ balablue,balared}) => {

    let textred='';
    let textblue='';
    
    if(balared===1){
         textred='bala real'
    }else{
         textred='balas reales'
    }

    if(balablue===1){
        textblue='bala de salva'
    }else{
        textblue= 'balas de salva'
    }

  return (
    <>
      <span className="tooltip">

        <div className='content-text-tooltip'>
       
            <p fill="white">{`${balablue} ${textblue} | ${balared} ${textred}`}</p>
          
            </div>
       
      </span>
    </>
  );
};

export default Tooltip;
