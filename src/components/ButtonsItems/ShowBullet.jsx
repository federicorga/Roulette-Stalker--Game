import React from 'react';
import './ButtonItem.css';
import { useRouletteFunctionsContext } from '../providers/RouletteFunctionsProvider';

function ShowBullet() {
  const { VerBala, ActionAndAudio } = useRouletteFunctionsContext();

  return (
    <div
      key="btn1"
      data-tooltip={"PDA: Muestra la bala que hay en la recámara"}
      className='button-item ocult_item_inventory'
      onClick={() => { ActionAndAudio(VerBala(), 'itemsAudio/pda-object', 1) }}
    >
      <img src='/img/stalkeritems/pda-icon.png' width={40} alt="PDA Icon" />
    </div>
  );
}

export default ShowBullet;
