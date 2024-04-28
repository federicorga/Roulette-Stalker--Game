import './ButtonItem.css'

import { useRouletteFunctionsContext } from '../providers/RouletteFunctionsProvider';


function CigaretLife() {
    const {
  
        ActionAndAudio,
        CigarrilloDeVida,
        turn,
        jugador1,
        jugador2
}=useRouletteFunctionsContext();

  return (
    <div  key="boton2"
    data-tooltip="Cigarrillo: Da +1 de vida al jugador"
    className='button-item ocult_item_inventory'
    onClick={() => { ActionAndAudio(CigarrilloDeVida(turn === 'player1' ? jugador1 : jugador2), 'itemsAudio/Cigarrette') }}
  >
    <img src='/img/stalkeritems/cigarette.png' width={37} alt="Cigarette Icon" />
      
    </div>
  );
}

export default CigaretLife;
