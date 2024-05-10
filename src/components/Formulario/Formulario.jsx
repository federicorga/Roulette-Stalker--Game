import React, { useState } from 'react';

import { useRouletteFunctionsContext } from '../providers/RouletteFunctionsProvider';
import UserBoxInfo from '../UserBoxInfo/UserBoxInfo';

import'./Formulario.css'

const Galeria = ({ imagenes, onSelect }) => {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  
    const handleClick = (imagen) => {
      onSelect( imagen); // Aquí seleccionamos el nombre de la imagen
      setImagenSeleccionada(imagen);
    };
  
    return (
      <div className="galeria">
        {imagenes.map((imagen, index) => (
          <img
            className={`imagenforselect ${imagen === imagenSeleccionada ? 'seleccionada' : ''}`}
            key={index}
            src={imagen.url} // Utilizamos la URL de la imagen
            alt={imagen.nombre} // Utilizamos el nombre de la imagen como texto alternativo
            onClick={() => handleClick(imagen)}
            value={imagen.nombre} // Utilizamos el nombre de la imagen como valor
            width={'80x'}
          />
        ))}
      </div>
    );
};

const Formulario = () => {

    const{
             //EXPORT FORMULARIO

      nombre,
      setJugador1Name,
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
      setPlayer1Faction,
      player1Faction,
      jugador1,
      player1Health


    }=useRouletteFunctionsContext();
  // Estados para almacenar los datos del formulario
  
  // Lista de imágenes de ejemplo para cada género

  const imagenesFacciones = [
    { nombre: 'Clear Sky', url: '/img/factions/ClearSky.webp' },
    { nombre: 'Deber', url: '/img/factions/Duty.webp' },
    { nombre: 'Ecologistas', url: '/img/factions/Ecologists.webp' },
    { nombre: 'Libertad', url: '/img/factions/Freedom.webp' },
    { nombre: 'ISG', url: '/img/factions/ISG.png' },
    { nombre: 'Solitario', url: '/img/factions/Loners.webp' },
    { nombre: 'Mercenarios', url: '/img/factions/Mercenary.webp' },
    { nombre: 'Militares', url: '/img/factions/Military.webp' },
    { nombre: 'Monolito', url: '/img/factions/Monolith.webp' },
    { nombre: 'Renegado', url: '/img/factions/Renegade.webp' },
    { nombre: 'Pecado', url: '/img/factions/Sin.webp' }
  ];

  const imagenesMasculino = [
    { nombre: 'Profile 1', url: '/img/portraits/male/profile1.png' },
    { nombre: 'Profile 2', url: '/img/portraits/male/profile2.png' },
    { nombre: 'Profile 3', url: '/img/portraits/male/profile3.png' },
    { nombre: 'Profile 4', url: '/img/portraits/male/profile4.png' },
    { nombre: 'Profile 5', url: '/img/portraits/male/profile5.png' },
    { nombre: 'Profile 6', url: '/img/portraits/male/profile6.png' },
    { nombre: 'Profile 7', url: '/img/portraits/male/profile7.png' },
    { nombre: 'Profile 8', url: '/img/portraits/male/profile8.png' },
    { nombre: 'Profile 9', url: '/img/portraits/male/profile9.png' },
    { nombre: 'Profile 10', url: '/img/portraits/male/profile10.png' },
    { nombre: 'Profile 11', url: '/img/portraits/male/profile11.png' },
    { nombre: 'Profile 12', url: '/img/portraits/male/profile12.png' },
    { nombre: 'Profile 13', url: '/img/portraits/male/profile13.png' },
    { nombre: 'Profile 14', url: '/img/portraits/male/profile14.png' },
  ];
  
  const imagenesFemenino = [
    { nombre: 'Mujer 1', url: '/img/portraits/female/mprofile1.png' },
    { nombre: 'Mujer 2', url: '/img/portraits/female/mprofile2.png' },
    { nombre: 'Mujer 3', url: '/img/portraits/female/mprofile3.png' },
    { nombre: 'Mujer 4', url: '/img/portraits/female/mprofile4.png' },
    { nombre: 'Mujer 5', url: '/img/portraits/female/mprofile5.png' },
    { nombre: 'Mujer 6', url: '/img/portraits/female/mprofile6.png' },
    { nombre: 'Mujer 7', url: '/img/portraits/female/mprofile7.png' },
  ];

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor
    console.log('Nombre:', nombre);
    setJugador1Name(nombre);
    console.log('Facción:', faccion);
    console.log('Género:', genero);
    console.log('Foto de perfil:', fotoPerfil);
    console.log('Foto seleccionada Perfil:', fotoSeleccionadaProfile);
    console.log('Foto seleccionada Faccion:', fotoSeleccionadaFaction);
  };

  // Función para manejar el cambio en la selección de facción
  const handleFaccionChange = (e) => {
    const selectedFaccion = e.target.value;
    setFaccion(selectedFaccion);
    // Si la opción seleccionada tiene un atributo "data-image", actualiza la imagen de la facción
    const image = e.target.selectedOptions[0].getAttribute('data-image');
    if (image) {
      setImagenFaccion(image);
    }
  };

  // Función para manejar el cambio en la selección de género
  const handleGeneroChange = (e) => {
    const value = e.target.value;
    setGenero(value);
    // Cambiar la lista de imágenes de acuerdo al género seleccionado
    if (value === 'masculino') {
      setFotoPerfil(imagenesMasculino[0]); // Establecer la primera imagen masculina por defecto
    } else if (value === 'femenino') {
      setFotoPerfil(imagenesFemenino[0]); // Establecer la primera imagen femenina por defecto
    }
  };

  // Función para manejar la selección de una foto de perfil
  const handleSelectFotoProfile = (foto) => {
    setFotoSeleccionadaProfile(foto.url);
  };

  const handleSelectFotoFaction = (foto) => {
    setFotoSeleccionadaFaction(foto.url);
  
    setPlayer1Faction(foto.nombre);
  };

  return (

    <div className='content-formulario'>
    <UserBoxInfo factionUser={player1Faction} NameUser={jugador1} LifeUser={player1Health} imgUser={fotoSeleccionadaProfile} backgroundImage={fotoSeleccionadaFaction} />
    <form onSubmit={handleSubmit}>
    <button className='btn-saveform' type="submit">Guardar cambios</button>
      <div>
        <label>Nombre:</label>
        <input className='input-form'
          type="text"
          value={nombre}
          maxLength={8}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        
      </div>
      <div>
        <label>Facción:</label>
        <select className='select-form'
          value={faccion}
          onChange={handleFaccionChange}
          required
        >
          <option value="">Selecciona una facción</option>
          <option value="faccion1" data-image="img" >Lista de Facciones</option>
          
          {/* Agrega más opciones según sea necesario */}
        </select>
        {faccion && imagenFaccion && (
         <Galeria imagenes={imagenesFacciones} onSelect={handleSelectFotoFaction} />
        )}
      </div>
      <div>
        <label>Género:</label>
        <select className='select-form'
          value={genero}
          onChange={handleGeneroChange}
          required
        >
          <option value="">Selecciona un género</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
      </div>
      <div>
     
        {/* Aquí mostramos la galería de imágenes según el género */}
        {genero === 'masculino' && (
          <Galeria imagenes={imagenesMasculino} onSelect={handleSelectFotoProfile} />
        )}
        {genero === 'femenino' && (
          <Galeria imagenes={imagenesFemenino} onSelect={handleSelectFotoProfile} />
        )}
      </div>
     
      
    </form>
    
    </div>
    
    
  );
};

export default Formulario;
