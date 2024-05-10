
import React from 'react';
import IconLife from '../IconLife/IconLife';
import './HealthBar.css'; // Archivo CSS para estilos

const HealthBar = ({ playerHealth, invertHealthBar=false }) => {
  const maxHealth = 6; // Valor máximo de la barra de vida
  const healthBars = [];

  let progressBarColor = '#67fe67'; // Por defecto, el color es verde
  if (playerHealth === 1) {
    progressBarColor = 'red'; // Cuando la salud sea 1, el color es rojo
  } else if (playerHealth === 2) {
    progressBarColor = 'yellow'; // Cuando la salud sea 2, el color es amarillo
  }

  // Crear las barras de vida individuales basadas en la salud actual del jugador
  for (let i = 0; i < maxHealth; i++) {
    const isVisible = i < playerHealth; // Determinar si la barra actual debe ser visible
    const barStyle = {
      visibility: isVisible ? 'visible' : 'hidden', // Establecer la visibilidad de la barra
  
      transition: 'opacity 0.5s ease', // Transición suave de 0.5 segundos
      Color: progressBarColor
    };
    healthBars.push(<div key={i} className="health-bar-segment" style={barStyle}><IconLife flipX={invertHealthBar} colorstyle={progressBarColor}></IconLife></div>);
  }

  return (
    <div className={"health-bars-container"}>
      {healthBars}
    </div>
  );
};

export default HealthBar;
