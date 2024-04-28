import Formulario from '../Formulario/Formulario';
import Formulario2 from '../Formulario/Formulario2';
import './Menu.css'
import { Link } from 'react-router-dom';
function Menu() {
  return (
    <section className='menu-game'>
      
        <section className='background-opac'>
          
      <section className='section-titulo-ruleta'>
      <h1>R.U.L.E.T.A ~ <img className='img-ruleta-titulo' src="/img/cargando.webp" alt="" /> ~ S.T.A.L.K.E.R</h1>

      </section>
        <div className='content-menu-game'>
      <Formulario></Formulario>
      <div className='content-buton-playgame-menu'>
            <button className='pushable'>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front-other">
            <Link to="/game">Jugar</Link>
            </span>
            </button>
       </div>
      <Formulario2></Formulario2>
      </div>
      </section>
    </section>
  );
}

export default Menu;
