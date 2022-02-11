import logo from './assets/Images/logo.svg';
import './assets/css/App.css';
import MiComponente from './componentes/MiComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Mi primera Aplicación de React
        </p>   
        <MiComponente/> 
      </header>
    </div>
  );
  }

export default App;
