import React, { useContext, useState } from 'react';

import { toast} from "react-toastify";



const rouletteFunctionsContext = React.createContext();

export function useRouletteFunctionsContext() {
    return useContext(rouletteFunctionsContext);
}

export function RouletteFunctionsProvider({children}) {



  //ESTADOS DE FORMULARIO
  const [nombre, setNombre] = useState('');
  const [faccion, setFaccion] = useState('');
  const [genero, setGenero] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [imagenFaccion, setImagenFaccion] = useState('');
  const [fotoSeleccionadaProfile, setFotoSeleccionadaProfile] = useState('');
  const [fotoSeleccionadaFaction, setFotoSeleccionadaFaction] = useState('');
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  const [nombre2, setNombre2] = useState('');
  const [faccion2, setFaccion2] = useState('');
  const [genero2, setGenero2] = useState('');
  const [fotoPerfil2, setFotoPerfil2] = useState('');
  const [imagenFaccion2, setImagenFaccion2] = useState('');
  const [fotoSeleccionadaProfile2, setFotoSeleccionadaProfile2] = useState('');
  const [fotoSeleccionadaFaction2, setFotoSeleccionadaFaction2] = useState('');
  const [imagenSeleccionada2, setImagenSeleccionada2] = useState(null);


  //ESTADOS DE JUEGO

  const [jugador1, setJugador1Name]=useState('player 1'); //nombre de jugador 1
  const [jugador2, setJugador2Name]=useState('player 2'); //nombre de jugador 2
  const [bullets, setBullets] = useState([]); // Array donde se almacenarán las balas que representan la escopeta
  const [player1Health, setPlayer1Health] = useState(6); // Vida del jugador 1
  const [player2Health, setPlayer2Health] = useState(6); // Vida del jugador 2
  const [player1Faction, setPlayer1Faction]=useState('Stalker libre'); //Faccion del jugador 1
  const [player2Faction, setPlayer2Faction]=useState('Stalker libre'); //Faccion del jugador 2
  const [totalBullets, setTotalBullets] = useState(0); // Total de balas en la ronda
  const [turn, setTurn] = useState('player1'); // Cambio de turno de jugador
  const [gameOver, setGameOver] = useState(false); // Si es verdadero, se acabó la partida
  const [winner, setWinner] = useState(''); // Muestra el nombre del jugador ganador
  const [dangerousBullets, setDangerousBullets] = useState(0); // Estado para contar balas peligrosas
  const [safebullets, setSafeBullets] = useState(0); // Estado para contar balas seguras
  const [balaActual, setBalaActual] = useState(bullets[0]); // Bala en recámara actual
  const [showButtonsFire, setShowButtonsFire] = useState(false); // Oculta o muestra los botones de disparo
  const [bulletsArrayRender, setBulletsArrayRender] = useState([]); // Todas las balas renderizadas en imágenes
  const [showBoxBulletsClass, setShowBoxBulletsClass] = useState('');
  const [showBulletsClass, setShowBulletsClass] = useState('');
  const [numRandom,setNumRandom]=useState(0); // numero random que se usa par el inventario.
  const [playGame, setPlayGame]=useState(false);
  const [tolltipBulletsVis, setTolltipBulletsVis]=useState(false); //visibilidad de la cantidad de valas


    function ToggleBulletsVisibility() {
        // Establece la clase 'invertY' después de 1 segundo
     
        setShowBoxBulletsClass('invertY');
    
        setShowBulletsClass('mostrarbala');

        setTolltipBulletsVis(true);
        // Quita la clase 'invertY' después de 6 segundos (1 segundo de carga + 5 segundos de visibilidad)
        const hideTimer = setTimeout(() => {
          setShowBoxBulletsClass('invertY2');
          setShowBulletsClass('ocultarbalas');
          setTolltipBulletsVis(false);
    
        }, 4000);
    
        // Limpia los temporizadores cuando el componente se desmonta
        return () => {
          clearTimeout(showTimer);
          clearTimeout(hideTimer);
        };
      };

      function Renderbullets(arraybullets = []) {
        let bulletsRender = [];
        let redBullets = [];
        let blueBullets = [];

        // Itera sobre el array de balas y separa las rojas y azules
        arraybullets.forEach(bullet => {
          if (bullet === 'red') {
            redBullets.push('/img/weapon/bullets/Red_Bullet.png');
          } else {
            blueBullets.push('/img/weapon/bullets/Blue_Bullet.png');
          }
        });

        // Concatena primero las balas rojas y luego las azules
        bulletsRender = blueBullets.concat(redBullets);

       

        setBulletsArrayRender(bulletsRender);
      };
    
    
    
    
      function ShowToastMessage (text="null",backgroundColor="var( --clr-color2)", colorText="white", time=1200) {
        toast(`${text}`, {
          position: "bottom-center",
          background: "red",
          autoClose: time, // Tiempo de aparición en milisegundos (3 segundos en este ejemplo)
          closeButton: false, // Para quitar el botón de cierr,
          pauseOnHover: false,
          hideProgressBar: true,
          style: {
            background: backgroundColor, // Cambia el color de fondo a azul (puedes ajustar el color según tus necesidades)
            color:colorText,
            textAlign:'center'
          },
        });
      };
    
    
      function ShowToastMessage2 (text = "null", backgroundColor = "var(--clr-color2)",imageUrl = "", colorText = "white" , time = 1200,widthImg='50px' )  {
        toast(({ closeToast }) => (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
            <div style={{  textAlign: 'center' }}>
              <p>{text}</p>
            </div>
            <div style={{  textAlign: 'center', marginLeft: '10px' }}>
              {imageUrl && <img src={imageUrl} alt="Toast" style={{ maxWidth: {widthImg}, maxHeight: '50px' }} />}
            </div>
    
          </div>
        ), {
          position: "bottom-center",
          background: backgroundColor,
          autoClose: time, // Mantener el cierre automático
          closeButton: false,
          pauseOnHover: false,
          hideProgressBar: true,
          style: {
            background: backgroundColor,
            color: colorText,
            textAlign: 'center'
          },
        });
      };
    
    
      function GenerarNumeroRandom(min, max) {
        // Genera un número aleatorio entre min y max (incluyendo ambos)
        min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
      };

   
    
    function VerBala(){
     
      if(balaActual==='red'){
      ShowToastMessage2(`Bala en recamara: real`,'red','/img/weapon/bullets/Red_Bullet.png');
    }else{
      ShowToastMessage2(`Bala en recamara: de salva`,'blue','/img/weapon/bullets/Blue_Bullet.png');
    }
    }
    
    function Lifekit(player){ //da una vida al jugador seleccionado
      //player es el jugador actual activo
      if(player===jugador1 && player1Health<6){setPlayer1Health(prevHealth => prevHealth + 1)}
      
      if(player===jugador2 && player2Health <6)setPlayer2Health(prevHealth => prevHealth + 1)
    
      ShowToastMessage(`${player} se curo + 1 de vida`,'green');
    
      }
    
    function SaltarBala() { //quita la bala en la recamara para disparar la siguiente. 
      // Haz una copia del array de balas
      const newBullets = [...bullets];
    
      //alert(`quitaste una bala: ${newBullets[0]} del arma`);
      if(newBullets[0]==='blue'){
      ShowToastMessage2(`Quitaste una bala de salva del arma`,'blue','/img/weapon/bullets/Blue_Bullet.png');
    }else{
      ShowToastMessage2(`Quitaste una bala real del arma`,'red','/img/weapon/bullets/Red_Bullet.png');
    }
        // Elimina el primer elemento del array de balas
      newBullets.shift();
      // Actualiza el estado con el nuevo array de balas
      setBullets(newBullets);
      // Actualiza el estado de la bala actual
      setBalaActual(newBullets[0]);
    
 
    }
    
    function ReloadInventory() {
  
      setNumRandom(GenerarNumeroRandom(0,9));
      Loadchamber();
    };
    
    
    
    function CuatroConsecutivosIguales(array) { // Verifica que no alla 4 balas seguidas del mismo color en la recamara
     
      for (var i = 0; i < array.length - 3; i++) {
          // Comprobamos si los próximos tres elementos son iguales al actual
          if (array[i] === array[i + 1] &&
              array[i] === array[i + 2] &&
              array[i] === array[i + 3]) {
              // Si encontramos cuatro elementos iguales consecutivos, devolvemos true
              return true;
          }
      }
      // Si no encontramos cuatro elementos iguales consecutivos, devolvemos false
      return false;
    }
    
    function HandleButtonsFire()  { // Cambia el estado para mostrar u ocultar los botones de disparo al hacer click en la escopeta
      setShowButtonsFire(!showButtonsFire);
    };
    
    function ContarRepeticiones(arr, elemento) {
    
      let contador = 0;
      // Contar las ocurrencias del elemento en el array
      arr.forEach(item => {
          if (item === elemento) {
              contador++;
          }
      });
    
      return contador;
    }
    
    
    
      function Shoot (shooter, target) {
        const bullet = bullets.shift();

 
        if (shooter === target) { // El jugador se dispara a sí mismo
          if (bullet === 'red') { // Si la bala es roja, el jugador recibe daño y cambia de turno
            target === 'player1' ? ActionAndAudio(setPlayer1Health(prevHealth => prevHealth - 1),'Escopeta/shoot',1,'Escopeta/saltabala_masrecarga') : ActionAndAudio(setPlayer2Health(prevHealth => prevHealth - 1),'Escopeta/shoot',1,'Escopeta/saltabala_masrecarga');
             ShowToastMessage2(`¡Te hiciste daño!`,'red','/img/weapon/bullets/shootred.gif','white',1300,'100%');
            setTurn(turn === 'player1' ? 'player2' : 'player1'); // Cambiar turno al otro jugador
          } else { // Si la bala es azul, el jugador puede continuar disparando
            ActionAndAudio("",'Escopeta/failshoot',1,'Escopeta/saltabala_masrecarga');
             ShowToastMessage2(`¡No te hiciste daño, puedes seguir disparando!`,'blue','/img/weapon/bullets/Blue_Bullet.png');
          }
        } else { // El jugador dispara al otro jugador
          if (bullet === 'red') { // Si la bala es roja, el otro jugador recibe daño
            target === 'player1' ? ActionAndAudio(setPlayer1Health(prevHealth => prevHealth - 1),'Escopeta/shoot',1,'Escopeta/saltabala_masrecarga') : ActionAndAudio(setPlayer2Health(prevHealth => prevHealth - 1),'Escopeta/shoot',1,'Escopeta/saltabala_masrecarga');
             ShowToastMessage2(`¡Le hiciste daño a : ${target === 'player1' ? jugador1 : jugador2} !`,'red','/img/weapon/bullets/shootred.gif','white',1300,'100%');
          } else { // Si la bala es azul, no ocurre ningún daño al otro jugador
            ActionAndAudio("",'Escopeta/failshoot',1,'Escopeta/saltabala_masrecarga');
             ShowToastMessage2(`¡No hiciste daño a : ${target === 'player1' ? jugador1 : jugador2}`,'blue','/img/weapon/bullets/Blue_Bullet.png');
          }
          // Cambiar turno al otro jugador
          setTurn(turn === 'player1' ? 'player2' : 'player1');
        }
        setBalaActual(bullets[0]);
        setShowButtonsFire(false);
     
      };
    
      function ReloadButton() {
    
          window.location.reload(); // Recargar la página
        };
        
    
      function ActionAndAudio(functionAction, audiomp3, repeticionsonido = 1, audiomp3two){
        // Definir la cantidad de veces que se repetirá el audio
        const vecesRepetir = repeticionsonido;
        let contador = 0;
    
        // Función para reproducir el audio
        const reproducirAudio = () => {
            const audio = new Audio(`/audio/${audiomp3}.mp3`);
            const audio2 = audiomp3two ? new Audio(`/audio/${audiomp3two}.mp3`) : null;
    
            audio.play();
    
            audio.onended = () => {
                // Aumentar el contador después de que termine de reproducirse el audio
                contador++;
    
                // Si aún no se ha alcanzado la cantidad de repeticiones deseada, reproducir el audio nuevamente
                if (contador < vecesRepetir) {
                    reproducirAudio();
                } else if (audio2) {
                    // Si hay un segundo audio y se ha reproducido el audio la cantidad deseada de veces
                    audio2.play();
                }
            };
        };
    
        // Iniciar la reproducción del primer audio
    
          // Llamar a la función para reproducir el audio
          if(audiomp3){
            reproducirAudio();
            functionAction;}
            else{
              functionAction;
            }
    };
    function MezclarArray(array) { //esta funcion mezcla la posiciones dentro del array y devuelve uno nuevo.
      // Copiar el array para no modificar el original
      const newArray = array.slice(); 
      // Implementación del algoritmo de Fisher-Yates
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      } 
      return newArray;
    }
    
    function GenerarArrayDeKeys(array) {
      //Devuelve un array de kay con la cantidad repetida de cada key acorde a lo solicitado.
      //luego las mezcla de forma aleatoria
      const arrayDeKeys=array.map(element => element.key);
      //los const son la keys
      let nuevoArray = [];
      const cantidadBoton1 = 9; // Repetir boton2 9 veces
      for (let i = 0; i < cantidadBoton1; i++) {
        nuevoArray.push(arrayDeKeys[0]);
      }
       
      const cantidadBoton2 =4; // Repetir boton2 4 veces
      for (let i = 0; i < cantidadBoton2; i++) {
        nuevoArray.push(arrayDeKeys[1]);
      }
      
      const cantidadBoton3 = 9; // Repetir boton3 9 veces
      for (let i = 0; i < cantidadBoton3; i++) {
        nuevoArray.push(arrayDeKeys[2]);
      }
      nuevoArray = MezclarArray(nuevoArray); //mezcla las posiciones del array
      return nuevoArray;
    }


    function ReducirArray(array, numItems){ // reduce el tamaño del array a la cantidad solicitada
      const arrayReducido=array.slice(0,numItems);
      return arrayReducido;
    }



    function NuevoArrayDeInventario(array){

      let arraydeKeys=[]
      arraydeKeys= GenerarArrayDeKeys(array);
      arraydeKeys= ReducirArray(arraydeKeys,9);
      console.log(arraydeKeys);

    };




    function Loadchamber() { //carga de camara de escopeta con balas.
    
      const balasRandomTotal = GenerarNumeroRandom(2, 8); //numero de balas aleatoria
     
      let redBullets, blueBullets;
      let newBullets;
      
    
      do {
          // Genera un número aleatorio de balas rojas
          redBullets = Math.floor(Math.random() * balasRandomTotal); 
          // Calcula el número de balas azules
          blueBullets = balasRandomTotal - redBullets; 
        
          newBullets = Array(balasRandomTotal).fill('blue'); // Llena el array con balas azules inicialmente
          // Cambia el color de las balas correspondientes a rojo
          for (let i = 0; i < redBullets; i++) {
              const randomIndex = Math.floor(Math.random() * newBullets.length);
              newBullets[randomIndex] = 'red';
          }
       
          // Verifica si hay cuatro balas consecutivas del mismo color vuelve a mezclar
      } while (CuatroConsecutivosIguales(newBullets) || redBullets === 0 || blueBullets === 0);
    
      redBullets=ContarRepeticiones(newBullets,'red');
      blueBullets=ContarRepeticiones(newBullets,'blue');
      // Actualiza el estado de balas según sea necesario
      console.log(newBullets);
      Renderbullets(newBullets);
      setBullets(newBullets); //actualiza el array de balas
      setBalaActual(newBullets[0]); //actualiza el estado de la bala actual en recamara para disaprar.
      ActionAndAudio(setTotalBullets(balasRandomTotal),'Escopeta/Reload',balasRandomTotal,'Escopeta/reload_end')
      
      setDangerousBullets(redBullets); // Actualiza el estado de balas peligrosas
      setSafeBullets(blueBullets); // Actualiza el estado de balas no peligrosas

      let textred="";
      let textblue="";

      if(redBullets===1){
        textred='bala roja'
      }else{
        textred='balas rojas'
      }

      if (blueBullets===1){
        textblue='bala azul'
      }else{
        textblue='balas azules'
      }

    
      ToggleBulletsVisibility();

    
    
    };



    const contextValue = {

      //EXPORT FORMULARIO

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


      //EXPORT JUEGO

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
      numRandom,
      tolltipBulletsVis,
    


    
        

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
    }




  return (
    <rouletteFunctionsContext.Provider value={contextValue}>
    {children}
</rouletteFunctionsContext.Provider>
  );
}

export default RouletteFunctionsProvider;
