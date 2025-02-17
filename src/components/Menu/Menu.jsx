import Formulario from '../Formulario/Formulario';
import Formulario2 from '../Formulario/Formulario2';
import './Menu.css'

import ButtonGeneric from '../ButtonGeneric/ButtonGeneric';
function Menu() {
  return (
    <section className='menu-game'>
      
        <section>    
      <section className='section-titulo-ruleta'>
      <h1>R.U.L.E.T.A ~ <img className='img-ruleta-titulo' src="/img/cargando.webp" alt="" /> ~ S.T.A.L.K.E.R</h1>

      </section>
        <div className='content-menu-game'>
      <Formulario></Formulario>
      <div className='content-buton-playgame-menu'>
      <ButtonGeneric titleButton='Jugar' ClassBtnGeneric={'front-other'} linkDirection='/game'></ButtonGeneric>
       </div>
      
      <Formulario2></Formulario2>
      </div>
      </section>
    </section>
  );
}

export default Menu;
