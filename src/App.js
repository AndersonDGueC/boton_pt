import React from 'react';
import logo from './image/logo.gif'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';

function App() {
  return (
    
    <section className="row">
    <div className="bottom-right">
    
    <button id="btn">
    <span>¿Necesitas ayuda?</span>
      <img id="im" src={logo} alt=""></img>
    
    </button>
    </div>
    </section>
   
  );
}

export default App;
