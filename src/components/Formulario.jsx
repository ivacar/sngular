import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { SerieService } from '../services/SerieService';
import serie from '../assets/images/serie.png';

const MySwal = withReactContent(Swal);

function FormularioNumero({ onResultado }) {
  const [numero, setNumero] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();

   const numEntero = Number(numero);

    if (isNaN(numEntero) || numero.trim() === '') {
    MySwal.fire({
      icon: 'error',
      title: 'Número inválido',
      text: 'Ingresa un número válido.',
    });
    return;
  }

  if (!Number.isInteger(numEntero)) {
    MySwal.fire({
      icon: 'warning',
      title: 'Solo números enteros',
      text: 'Por favor, ingresa un número entero (sin decimales).',
    });
    return;
  }

    try {
      const primo = SerieService.obtenerPrimo(numEntero - 2);
      const triangular = SerieService.triangular(numEntero - 2);
      const fibonacci = SerieService.fibonacci(numEntero - 1);

      const numerador = 2 * primo * 3 * triangular;
      const denominador = 7 * fibonacci;
      const resultado = numerador / denominador;

      onResultado({
        n: numEntero,
        primo,
        triangular,
        fibonacci,
        numerador,
        denominador,
        resultado: resultado.toFixed(4),
      });
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Error de cálculo',
        text: error.message,
      });
    }
  };

  return (
    <form onSubmit={manejarSubmit} className="formulario">
      <h1>Calcular la siguiente serie</h1>
      <img src={serie} alt="formula" className="serie" />
      <div>
        <label htmlFor="numero">Introduce un número entero:</label>
        <input
          id="numero"
          type="number"
          step="1"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          required
        />
      </div>
      <button type="submit">Calcular serie</button>
    </form>
  );
}

export default FormularioNumero;
