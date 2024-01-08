import React from 'react';
import Header from './components/Header'
import Button from './components/Button';
import BotonIcono from './components/BotonIcono';
import './App.css';

const App = () => {
  const handleClick = () => {
    console.log('Button was clicked!');
  };
  

  return (
    <div>
     <Button onClick= {() => console.log('Button was clicked!')} style={{ backgroundColor: 'blue', color: 'white' }}> algo prueba </Button>

      <Header/>
      <BotonIcono/>
    </div>
  );
};

export default App
