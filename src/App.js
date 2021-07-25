import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import PrimeReact from 'primereact/api';
PrimeReact.ripple = true;
PrimeReact.zIndex = {
  modal: 1100,    // dialog, sidebar
  overlay: 1000,  // dropdown, overlaypanel
  menu: 1000,     // overlay menus
  tooltip: 1100,   // tooltip
  toast: 1200     // toast
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
