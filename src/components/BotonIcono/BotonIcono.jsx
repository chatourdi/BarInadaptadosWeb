import React, { useState } from 'react';

const BotonIcono = () => {
   // Definimos un estado para el texto del botón
  const [buttonText, setButtonText] = useState('Haz clic en mí');

  // Función para cambiar el texto del botón cuando se hace clic
  const handleClick = () => {
    setButtonText('¡Clickeado!');
  };

  return (
    <button onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default BotonIcono;

