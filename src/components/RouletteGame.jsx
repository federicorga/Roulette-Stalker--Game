import './RouletteGame.css'
import React, {useState,useEffect} from 'react';
import ButtonShoot from './ButtonShoot/ButtonShoot';
import Inventory from './Inventory/Inventory';
import UserBoxInfo from './UserBoxInfo/UserBoxInfo';
import { useRouletteFunctionsContext } from './providers/RouletteFunctionsProvider';
import { Link } from 'react-router-dom';
import TooltipBullets from './ToolsTips/TooltipBullets';
import ButtonGeneric from './ButtonGeneric/ButtonGeneric';



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
    Lifekit,
    SaltarBala,
    ReloadInventory,
    CuatroConsecutivosIguales,
    HandleButtonsFire,
    ContarRepeticiones,
    Shoot,
    ReloadButton,
    ActionAndAudio,
    NuevoArrayDeInventario,
    tolltipBulletsVis,
    shootAnimation,
    damageAnimationPlayer1,
    damageAnimationPlayer2,
  
  
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

  const [rotateWeapon, setRotateWeapon] = useState(false); //rota el arma del jugador 1
  const [rotateWeapon2, setRotateWeapon2] = useState(false); //rota el arma del jugador 2
  const [weaponActive, setWeaponActive] =useState(false); //el arma esta lista para disparar.
  const [rotateFire,setRotateFire]=useState(false); //rota el fuego del disparo


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

function Aplyshoot(shooter, target){

  Shoot(shooter, target); 
  setTimeout(function() {
    setRotateWeapon(false);
  setRotateWeapon2(false);
setWeaponActive(false);
  }, 300);
  
}

function TakeWeapon(){
  HandleButtonsFire();
  setWeaponActive(!weaponActive);


}

  return (
    <div className='conent-rouletteGame'>
           <section className='section-titulo-ruleta'>
      <h1>R.U.L.E.T.A ~ <img className='img-ruleta-titulo' src="/img/cargando.webp" alt="" /> ~ S.T.A.L.K.E.R</h1>

      </section>
           <div className='content-menu-Roullete'>
           <ButtonGeneric titleButton='Menú' linkDirection='/'></ButtonGeneric>
       </div>
      {gameOver ? (
        <section className='Winer-section'>
        <div className='content-winer-game-rulet'>
          <h1>Fin del Juego!</h1>
          <div>
          <h2>El ganador es:</h2>
          {winner===jugador1? <UserBoxInfo factionUser={player1Faction} NameUser={jugador1} LifeUser={player1Health} imgUser={fotoSeleccionadaProfile} backgroundImage={fotoSeleccionadaFaction} />:<UserBoxInfo invert={true} NameUser={jugador2} LifeUser={player2Health} factionUser={player2Faction} imgUser={fotoSeleccionadaProfile2}  backgroundImage={fotoSeleccionadaFaction2} />}
          </div>
         
          <div className='content-menu-winer-game-rulet'>
            <button className='pushable' >
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">
            <Link to="/game" onClick={ReloadGame}>volver a jugar</Link>
            </span>
            </button>
            <ButtonGeneric titleButton='Menú princial' linkDirection='/'></ButtonGeneric>
       </div>
     
        </div>
        </section>
        
      ) : (
        <div >
         
            <div className='  content-bullets-and-button-reload'>
             <button disabled={bullets.length !== 0} style={{ opacity: bullets.length !== 0 ? 0.5 : 1 }} title='recargar escopeta' className='button-initial-game-reload' onClick={()=>playGame()}><img src='/img/reloadop1.png'></img></button>
              <section className='  content-boxUserInfo-RouletteGame'>
              <div className={`tooltip-container backgorund-content-box-bullets ${tolltipBulletsVis?'tooltip-visible':''} `}> 
              <TooltipBullets bulletBlue={safebullets} bulletRed={dangerousBullets} ></TooltipBullets>
              <div className={` Arraybullets-img-container ${showBoxBulletsClass}`}>
              
              <div className={`contentall-arrabullets-img`}>
              {bulletsArrayRender && bulletsArrayRender.map((rutaImagen, index) => (
          <div key={index} className={`content-onebullet-img ${showBulletsClass}`}>
              <img src={rutaImagen} alt={`Bala ${index}`} width={'19px'} />
          </div>
))}
{/* Llenar el resto de los espacios hasta 8 con divs vacíos */}
{Array.from({ length: 8- (bulletsArrayRender ? bulletsArrayRender.length : 0) }).map((_, index) => (
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
            <div className={ damageAnimationPlayer1===true?'player-damage':""}>
            <div className={`${turn==='player1'?"player-turn":""}` }>
              <UserBoxInfo factionUser={player1Faction} NameUser={jugador1} LifeUser={player1Health} imgUser={fotoSeleccionadaProfile} backgroundImage={fotoSeleccionadaFaction} />
              </div>
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
                  <div className='content-the-buttons-shot'>
                  <div className='content-botonshotA'
                  onMouseEnter={() => {setRotateWeapon(true)
                    setRotateFire(true)}}
                  
                  onMouseLeave={() => {
                   
                    setRotateWeapon(false); // Desactivar la rotación después de 0.5 segundo
                    setRotateFire(false)
                  }}>
                  {showButtonsFire &&(<ButtonShoot text={`Dispararme`}   className='button-item' onClick={() => Aplyshoot('player1', 'player1')}></ButtonShoot>)}
                  </div> 
                  <div className='content-botonshotB'
                  onMouseEnter={() => {setRotateWeapon2(true)
                  setRotateFire(false)}}
                  
                  
                  onMouseLeave={() => {setRotateWeapon2(false)
                  setRotateFire(true)}}>
                  {showButtonsFire &&(<ButtonShoot  text={`Disparar a ${jugador2}`}     className='button-item' onClick={() => Aplyshoot('player1', 'player2')}></ButtonShoot>)}
                  </div>
                  </div>
                  <div className='content-weapon-RouletteGame' >
                    <div className={` ${rotateWeapon ? 'shake-animation' : ''} `}>
                  <img   className={  ` ${weaponActive?'weapon-active':'img-weapon-static'} ${rotateWeapon ? 'rotateimage' : ''}${rotateWeapon2 ? 'aim-enemy':''} `} src="/img/weapon/1.png" alt="weapon"  onClick={TakeWeapon} /> {/* Agrega el manejador de clics en la imagen */}
                  {shootAnimation&& <img className={rotateFire?'fire-weapon-invert':'fire-weapon'} src="/img/weapon/fire.webp" alt="" />}
                  
                  </div>

                  </div>
                  
                </div>
                ) : (
                <div className='content-weapon-buttons-shoot'>
                   <div className='content-the-buttons-shot'>
                <div className='content-botonshotA-invert'
                onMouseEnter={() => {setRotateWeapon2(true)
                  setRotateFire(true)
                }}
                onMouseLeave={() => {setRotateWeapon2(false)
                  setRotateFire(false)
                }}>
                {showButtonsFire &&(<ButtonShoot  text={`Disparar a ${jugador1}`}  className='button-item' onClick={() => Aplyshoot('player2', 'player1')}></ButtonShoot>)}
                </div>
                <div className='content-botonshotB-invert'
                  onMouseEnter={() => {setRotateWeapon(true)
                    setRotateFire(false)}}
                  onMouseLeave={() => {setRotateWeapon(false)
                    setRotateFire(true)}}>
                {showButtonsFire &&(<ButtonShoot text={`Dispararme`} className='button-item' onClick={() => Aplyshoot('player2', 'player2')}></ButtonShoot>)}
                </div>
                </div>
                <div className='content-weapon-RouletteGame'>
                <div className={` ${rotateWeapon ? 'shake-animation' : ''} `}>
                <img className={` ${weaponActive?'weapon-active-invert':'img-weapon-static-invert'}  ${rotateWeapon ? 'rotateimage-invert ' : ''}${rotateWeapon2 ? 'aim-enemy-invert':''} ` } src="/img/weapon/1.png" alt="weapon" onClick={TakeWeapon} />
                {shootAnimation&& <img className={rotateFire?'fire-weapon-invert2':'fire-weapon2'} src="/img/weapon/fire.webp" alt="" />}
                </div>
                </div> 
                </div>           
              )} 
            </>
            )}
         </div>

         <section className='content-UserBoxInfo-Inventori'>
          <div className={ damageAnimationPlayer2===true?'player-damage':""}>
              <div className={turn==='player2'?"player-turn":""}>
              <UserBoxInfo invert={true} NameUser={jugador2} LifeUser={player2Health} factionUser={player2Faction} imgUser={fotoSeleccionadaProfile2}  backgroundImage={fotoSeleccionadaFaction2} />
              </div>
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
