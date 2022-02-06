import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  //t7ot scrpits houni
// StrictMode :est un outil pour mettre en évidence des problèmes potentiels dans une application. Ne rend aucune interface 
//utilisateur visible.
// ● Il active des contrôles et deavertissements supplémentaires pour ses descendants.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//Document.getElementById(“root”) Doit correspondre à l'identifiant dans index.html.


reportWebVitals();
