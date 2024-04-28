import './ButtonItem.css'

import { useRouletteFunctionsContext } from '../providers/RouletteFunctionsProvider';



function DodgeBullet() {
    const {SaltarBala,
        ActionAndAudio}=useRouletteFunctionsContext();
  return (
    <div
    key="boton3"
    data-tooltip="Cerveza STALKER: Quita la bala que está en la recámara"
    className='button-item ocult_item_inventory'
    onClick={() => { ActionAndAudio(SaltarBala(), 'itemsAudio/bebidastalker', 1, 'Escopeta/saltabala_masrecarga') }}
  >
    <img src='/img/stalkeritems/bebida.webp' width={40} alt="Beer Icon" />
    </div>

  );
}

export default DodgeBullet;
