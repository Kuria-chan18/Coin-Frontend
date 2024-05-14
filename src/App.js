import React from 'react';
import Login from './loginComponents/Login'; // Importe o componente de login com o caminho correto
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="coin-title">COIN</div> {/* Adiciona a palavra "COIN" acima do container de login */}
      <Login /> {/* Chame o componente de login aqui */}
    </div>
  );
}

export default App;
