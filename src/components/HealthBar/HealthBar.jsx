import React from 'react';
import './HealthBar.css'; // Archivo CSS para estilos

const HealthBar = ({ playerHealth }) => {
  const maxHealth = 6; // Valor máximo de la barra de vida
  const healthPercentage = (playerHealth / maxHealth) * 100; // Calcular el porcentaje de vida

  let progressBarColor = 'green'; // Por defecto, el color es verde
  if (playerHealth === 1) {
    progressBarColor = 'red'; // Cuando la salud sea 1, el color es rojo
  } else if (playerHealth === 2) {
    progressBarColor = 'yellow'; // Cuando la salud sea 2, el color es amarillo
  }
  return (
    <div className="health-bar">
      <div className="health-progress" style={{ width: `${healthPercentage}%`, backgroundColor: progressBarColor }} ></div>
    </div>
  );
};

export default HealthBar;
