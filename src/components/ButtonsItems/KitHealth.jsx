import './ButtonItem.css'

import { useRouletteFunctionsContext } from '../providers/RouletteFunctionsProvider';


function KitHealth() {
    const {
  
        ActionAndAudio,
        Lifekit,
        turn,
        jugador1,
        jugador2
}=useRouletteFunctionsContext();

  return (
    <div  key="boton2"
    data-tooltip="Vendas: restaura +1 de vida al jugador"
    className='button-item ocult_item_inventory'
    onClick={() => { ActionAndAudio(Lifekit(turn === 'player1' ? jugador1 : jugador2), 'itemsAudio/bandage_use') }}
  >
    <img src='/img/stalkeritems/Healt.png' width={37} alt="Healt Icon" />
      
    </div>
  );
}

export default KitHealth;
