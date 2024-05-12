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
      <div className="galeria-invert">
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

const Formulario2 = () => {

    const{
             //EXPORT FORMULARIO

             nombre2,
             setJugador2Name,
             setNombre2,
             faccion2,
             setPlayer2Faction,
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
             player2Faction,jugador2,player2Health


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
    console.log('Nombre:', nombre2);
    setJugador2Name(nombre2);
    console.log('Facción:', faccion2);
    console.log('Género:', genero2);
    console.log('Foto de perfil:', fotoPerfil2);
    console.log('Foto seleccionada Perfil:', fotoSeleccionadaProfile2);
    console.log('Foto seleccionada Faccion:', fotoSeleccionadaFaction2);
  };

  // Función para manejar el cambio en la selección de facción
  const handleFaccionChange = (e) => {
    const selectedFaccion = e.target.value;
    setFaccion2(selectedFaccion);
    // Si la opción seleccionada tiene un atributo "data-image", actualiza la imagen de la facción
    const image = e.target.selectedOptions[0].getAttribute('data-image');
    if (image) {
      setImagenFaccion2(image);
    }
  };

  // Función para manejar el cambio en la selección de género
  const handleGeneroChange = (e) => {
    const value = e.target.value;
    setGenero2(value);
    // Cambiar la lista de imágenes de acuerdo al género seleccionado
    if (value === 'masculino') {
      setFotoPerfil2(imagenesMasculino[0]); // Establecer la primera imagen masculina por defecto
    } else if (value === 'femenino') {
      setFotoPerfil2(imagenesFemenino[0]); // Establecer la primera imagen femenina por defecto
    }
  };

  // Función para manejar la selección de una foto de perfil
  const handleSelectFotoProfile = (foto) => {
    setFotoSeleccionadaProfile2(foto.url);
  };

  const handleSelectFotoFaction = (foto) => {
    setFotoSeleccionadaFaction2(foto.url);
  
    setPlayer2Faction(foto.nombre);
  };

  return (
    <div className='content-form-invert'>
       <UserBoxInfo invert={true} factionUser={player2Faction} NameUser={jugador2} LifeUser={player2Health} imgUser={fotoSeleccionadaProfile2} backgroundImage={fotoSeleccionadaFaction2} />
    
    <form className='form-invert' onSubmit={handleSubmit}>
    <button className='btn-saveform' type="submit">Guardar cambios</button>
      <div>
        <label>Nombre:</label>
        <input className='input-form'
          type="text"
          value={nombre2}
          maxLength={8}
          onChange={(e) => setNombre2(e.target.value)}
          required
        />
         
      </div>
      <div>
        <label>Facción:</label>
        <select className='select-form'
          value={faccion2}
          onChange={handleFaccionChange}
         
        >
          <option value="">Selecciona una facción</option>
          <option value="faccion1" data-image="img" >Lista de Facciones</option>
         
          
          {/* Agrega más opciones según sea necesario */}
        </select>
        </div>
        <div>
        {faccion2 && imagenFaccion2 && (
         <Galeria imagenes={imagenesFacciones} onSelect={handleSelectFotoFaction} />
        )}
      </div>

      <div>
        <label>Género:</label>
        <select className='select-form'
          value={genero2}
          onChange={handleGeneroChange}
       
        >
          <option value="">Selecciona un género</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
      </div>
      <div>
       
        {/* Aquí mostramos la galería de imágenes según el género */}
        {genero2 === 'masculino' && (
          <Galeria imagenes={imagenesMasculino} onSelect={handleSelectFotoProfile} />
        )}
        {genero2 === 'femenino' && (
          <Galeria imagenes={imagenesFemenino} onSelect={handleSelectFotoProfile} />
        )}
      </div>
    
     
    </form>
   
    </div>

    
    
  );
};

export default Formulario2;
