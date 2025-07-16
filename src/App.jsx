import { useState } from 'react';
import FormularioNumero from './components/Formulario';
import Resultado from './components/Resultadoseries';

function App() {
  const [resultadoData, setResultadoData] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  const manejarResultado = (data) => {
    setResultadoData(data);
    setMostrarFormulario(false); 
  };

  const nuevaSerie = () => {
    setResultadoData(null);
    setMostrarFormulario(true); 
  };

  return (
    <div className="contenedor">
      
      {mostrarFormulario && <FormularioNumero onResultado={manejarResultado} />}

      {!mostrarFormulario && (
        <>
          <Resultado datos={resultadoData} />
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button onClick={nuevaSerie}>Calcular nueva serie</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
