import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import './App.css';

import ListaDeTareas from './componentes/ListaDeTareas';
function App() {
  return (
    <div className="alicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
      <img src={freeCodeCampLogo} className='freecodecamp-logo' alt='FreeCodeCampLogo' />


      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
       
      </div>
    </div>
  );
}

export default App;
