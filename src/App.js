import React from 'react';
import Login from './loginComponents/Login'; // Importe o componente de login
import './loginComponents/Login.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Login /> {/* Chame o componente de login aqui */}
      </header>
    </div>
  );
}

export default App;
