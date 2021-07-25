import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import '../node_modules/jquery/dist/jquery.js'
import '../node_modules/popper.js/dist/popper.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import Home from './componentes/home/Home';
import Servicios from './componentes/servicios/Servicios';
import Contacto from './componentes/contacto/Contacto';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/servicios' component={Servicios} />
        <Route path='/contacto' component={Contacto} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
