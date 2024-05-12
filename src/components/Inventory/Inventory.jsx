import React, {useEffect, useState} from 'react';
import './Inventory.css';

import KitHealth from '../ButtonsItems/KitHealth';
import DodgeBullet from '../ButtonsItems/DodgeBullet';
import ShowBullet from '../ButtonsItems/ShowBullet';
import { useRouletteFunctionsContext } from '../providers/RouletteFunctionsProvider';

function GenerarNumeroRandom(min, max) {
  // Genera un número aleatorio entre min y max (incluyendo ambos)
  min = Math.ceil(min);
max = Math.floor(max);
const num= Math.floor(Math.random() * (max - min + 1)) + min;
return num;
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

function ReducirArray(array, numItems){ // reduce el tamaño del array a la cantidad solicitada

  const arrayReducido=array.slice(0,numItems);

  return arrayReducido;
}


function Inventory({  visible }) {

const{
  numRandom
}=useRouletteFunctionsContext();

const newBotone= [
<KitHealth></KitHealth>,
<KitHealth></KitHealth>,
<DodgeBullet></DodgeBullet>,
<ShowBullet></ShowBullet>,
<DodgeBullet></DodgeBullet>,
<ShowBullet></ShowBullet>,
<DodgeBullet></DodgeBullet>,
<ShowBullet></ShowBullet>,
<DodgeBullet></DodgeBullet>,
<ShowBullet></ShowBullet>,
<DodgeBullet></DodgeBullet>,
<ShowBullet></ShowBullet>,
<DodgeBullet></DodgeBullet>,
<ShowBullet></ShowBullet>,
<DodgeBullet></DodgeBullet>,
<ShowBullet></ShowBullet>,
<DodgeBullet></DodgeBullet>,
<ShowBullet></ShowBullet>,
<DodgeBullet></DodgeBullet>,
<ShowBullet></ShowBullet>,
];



const [botone, SetBotone]=useState([]);






useEffect(() => {



  SetBotone(ReducirArray(MezclarArray(newBotone),numRandom));


},[]);

const handleButtonClickdel = (index) => {
  const updatedBotone = [...botone];
  updatedBotone.splice(index, 1); // Elimina el elemento en la posición index
  SetBotone(updatedBotone);
};


if (botone.length < 9) {
    // Si hay menos de 9 componentes, agrega contenedores vacíos para completar 9
    while (botone.length < 9) {
      botone.push(<div key={botone.length}></div>);
    }
  }

  // Renderiza el inventario
  return (
    visible &&
    <div className="main_inventory">
      {botone.map((component, index) => (
        // Renderiza el componente o el botón dentro del contenedor
        <div className="box_inventory" key={index} onClick={() => handleButtonClickdel(index)}>
          {component}
        </div>
      ))}
      <div className="main_back_inventory"></div>
    </div>
  );

}
export default Inventory;
