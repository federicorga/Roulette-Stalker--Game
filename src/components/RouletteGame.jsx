import './RouletteGame.css'
import React, {useState,useEffect} from 'react';
import ButtonShoot from './ButtonShoot/ButtonShoot';
import Inventory from './Inventory/Inventory';
import UserBoxInfo from './UserBoxInfo/UserBoxInfo';
import { useRouletteFunctionsContext } from './providers/RouletteFunctionsProvider';
import { Link } from 'react-router-dom';



const RouletteGame = () => {


  const {
     //IMPORT FORMULARIO

     nombre,
     setNombre,
     faccion,
     setFaccion,
     genero,
     setGenero,
     fotoPerfil,
     setFotoPerfil,
     imagenFaccion,
     setImagenFaccion,
     fotoSeleccionadaProfile,
     setFotoSeleccionadaProfile,
     fotoSeleccionadaFaction,
     setFotoSeleccionadaFaction,
     imagenSeleccionada,
     setImagenSeleccionada,


     nombre2,
     setNombre2,
     faccion2,
     setFaccion2,
     genero2,
     setGenero2,
     fotoPerfil2,
     setFotoPerfil2,
     imagenFaccion2,
     setImagenFaccion2,
     fotoSeleccionadaProfile2,
     setFotoSeleccionadaProfile2,
     fotoSeleccionadaFaction2,
     setFotoSeleccionadaFaction2,
     imagenSeleccionada2,
     setImagenSeleccionada2,


    //IMPORT JUEGO
    jugador1,
    setJugador1Name,
    jugador2,
    setJugador2Name,
    bullets,
    setBullets,
    player1Health,
    setPlayer1Health,
    player2Health,
    setPlayer2Health,
    player1Faction,
    setPlayer1Faction,
    player2Faction,
    setPlayer2Faction,
    totalBullets,
    setTotalBullets,
    turn,
    setTurn,
    gameOver,
    setGameOver,
    winner,
    setWinner,
    dangerousBullets,
    setDangerousBullets,
    safebullets,
    setSafeBullets,
    balaActual,
    setBalaActual,
    showButtonsFire,
    setShowButtonsFire,
    bulletsArrayRender,
    setBulletsArrayRender,
    showBoxBulletsClass,
    setShowBoxBulletsClass,
    showBulletsClass,
    setShowBulletsClass,
    inventoryArrayPlayer1,
    setInventoryArrayPlayer1,
    inventoryArrayPlayer2,
    setInventoryArrayPlayer2,
    ToggleBulletsVisibility,
    Renderbullets,
    MezclarArray,
    ShowToastMessage,
    ShowToastMessage2,
    GenerarNumeroRandom,
    Loadchamber,
    VerBala,
    CigarrilloDeVida,
    SaltarBala,
    ReloadInventory,
    CuatroConsecutivosIguales,
    HandleButtonsFire,
    ContarRepeticiones,
    Shoot,
    ReloadButton,
    ActionAndAudio,
    NuevoArrayDeInventario,
  
  
  } = useRouletteFunctionsContext();
  




  useEffect(() => {
    if (player1Health === 0 || player2Health === 0) {
      setGameOver(true);
      if (player1Health === 0) {
        setWinner(jugador2);
      } else {
        setWinner(jugador1);
      }
    }
  }, [player1Health, player2Health]);

  useEffect(() => {
    // Este efecto se ejecutará cada vez que cambie el estado de las balas
    // Actualiza el estado de la bala actual si quedan balas en el array
    if (bullets.length > 0) {
      setBalaActual(bullets[0]);
    } else {
      setBalaActual(null); // Si no quedan balas, actualiza balaActual a null
    }
  }, [bullets]); // Este efecto se ejecutará cuando el estado de las balas cambie
  
  // También puedes utilizar otro efecto para realizar acciones adicionales después de cambiar la bala actual
  useEffect(() => {
    // Lógica adicional después de cambiar la bala actual

  }, [balaActual]); // Este efecto se ejecutará cuando el estado de la bala actual cambie

  

  function ReloadGame(){ 

    setPlayer1Health(6);
    setPlayer2Health(6);
    setGameOver(false);
    setTotalBullets(0);
    setDangerousBullets(0);
    setSafeBullets(0)
    setBullets([]);

  }


function playGame(){


  ReloadInventory();
  
}


  return (
    
    <div className='conent-rouletteGame'>
           <section className='section-titulo-ruleta'>
      <h1>R.U.L.E.T.A ~ <img className='img-ruleta-titulo' src="/img/cargando.webp" alt="" /> ~ S.T.A.L.K.E.R</h1>

      </section>
           <div className='content-menu-Roullete'>
            <button className='pushable'>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front-other">
            <Link to="/">Menu</Link>
            </span>
            </button>
       </div>
      {gameOver ? (
        
        <div className='content-winer-game-rulet'>
          <h1>Fin del Juego!</h1>
          <div>
          <h2>El ganador es:</h2>
          {winner===jugador1? <UserBoxInfo factionUser={player1Faction} NameUser={jugador1} LifeUser={player1Health} imgUser={fotoSeleccionadaProfile} backgroundImage={fotoSeleccionadaFaction} />:<UserBoxInfo invert={true} NameUser={jugador2} LifeUser={player2Health} factionUser={player2Faction} imgUser={fotoSeleccionadaProfile2}  backgroundImage={fotoSeleccionadaFaction2} />}
          </div>
         
          <div className='content-menu-Roullete'>
            <button className='pushable' >
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">
            <Link to="/game" onClick={ReloadGame}>volver a jugar</Link>
            </span>
            </button>
       </div>
     
        </div>
        
      ) : (
        <div>
         
          <div className='content-staditst-button-reaload'>
          <button disabled={bullets.length !== 0} style={{ opacity: bullets.length !== 0 ? 0.5 : 1 }} title='recargar escopeta' className='button-initial-game-reload' onClick={()=>playGame()}><img src='/img/reloadop1.png'></img></button>
            
          
          <div className='stadistic-info'>
          <p className='turnoplayer'>Turno de {turn === 'player1' ? jugador1 : jugador2}</p>
              <p>Balas totales: {totalBullets}</p>{/*Balas totales en el arma*/}
              <p>Balas restantes: {bullets.length}</p>{/*Balas en la recamara de la escopeta restantes*/ }
             <p>Balas peligrosas: {dangerousBullets}</p> {/* Muestra el total de balas peligrosas */}
              <p>Balas no peligrosas: {safebullets}</p> {/* Calcula el total de balas no peligrosas */}
            </div> 
           
            </div>
            <div>
            
              <section className='content-boxUserInfo-RouletteGame'>
              <div className='backgorund-content-box-bullets'> 
              <div className={`Arraybullets-img-container ${showBoxBulletsClass}`}>
              <div className={`contentall-arrabullets-img `}>
              {bulletsArrayRender && bulletsArrayRender.map((rutaImagen, index) => (
          <div key={index} className={`content-onebullet-img ${showBulletsClass}`}>
              <img src={rutaImagen} alt={`Bala ${index}`} width={'19px'} />
          </div>
))}
{/* Llenar el resto de los espacios hasta 9 con divs vacíos */}
{Array.from({ length: 9 - (bulletsArrayRender ? bulletsArrayRender.length : 0) }).map((_, index) => (
    <div key={index + (bulletsArrayRender ? bulletsArrayRender.length : 0)} className={`content-onebullet-img ${showBulletsClass}`}>
        {/* Este div estará vacío */}
    </div>
))}
        </div>
      </div>
      
              </div>
              </section>
            </div>
           
          <section className='content-info-rulet'>
      
          <section className='content-UserBoxInfo-Inventori'>
            <div>
              <UserBoxInfo factionUser={player1Faction} NameUser={jugador1} LifeUser={player1Health} imgUser={fotoSeleccionadaProfile} backgroundImage={fotoSeleccionadaFaction} />
              </div>
              <div>
              {bullets.length===0?(""):(   
           <Inventory
           visible={turn === 'player1'}
       
        
        
         />
              )}
             </div>
            </section>

          <div className='content-weapon'> 
                   
            {bullets.length===0?(""):(
             <>
      
             {turn === 'player1' ? (
             
                <div className='content-weapon-buttons-shoot'>  
                  {showButtonsFire &&(<ButtonShoot  text={`Disparar a ${jugador2}`}  className='button-item' onClick={() => Shoot('player1', 'player2')}></ButtonShoot>)}
                  <div className='content-weapon-RouletteGame' >
                  <img   className='img-weapon-static' src="/img/weapon/1.png" alt="weapon"  onClick={HandleButtonsFire} /> {/* Agrega el manejador de clics en la imagen */}
                  </div>
                  {showButtonsFire &&(<ButtonShoot text={`Dispararme`} className='button-item' onClick={() => Shoot('player1', 'player1')}></ButtonShoot>)}
                </div>
                ) : (
                <div className='content-weapon-buttons-shoot'>
                {showButtonsFire &&(<ButtonShoot  text={`Disparar a ${jugador1}`} className='button-item' onClick={() => Shoot('player2', 'player1')}></ButtonShoot>)}
                <div className='content-weapon-RouletteGame'>
                <img className='img-weapon-static-invert' src="/img/weapon/1.png" alt="weapon" onClick={HandleButtonsFire} />
                </div>
                {showButtonsFire &&(<ButtonShoot text={`Dispararme`} className='button-item' onClick={() => Shoot('player2', 'player2')}></ButtonShoot>)}
                </div>           
              )} 
            </>
            )}
         </div>

         <section className='content-UserBoxInfo-Inventori'>
              <div>
              <UserBoxInfo invert={true} NameUser={jugador2} LifeUser={player2Health} factionUser={player2Faction} imgUser={fotoSeleccionadaProfile2}  backgroundImage={fotoSeleccionadaFaction2} />
              </div>
            <div>
            {bullets.length===0?(""):(   
             <Inventory
             visible={turn === 'player2'}
          
         
           
           />
            )}
             </div>
            </section>

   </section>
 </div>
)}



</div>

      
  );
  
};

export default RouletteGame;
