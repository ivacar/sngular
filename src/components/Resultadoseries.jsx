function Resultado({ datos }) {
      const {
            n,
            primo,
            triangular,
            fibonacci,
            numerador,
            denominador,
            resultado,
      } = datos;

      return (
            <div className="resultado">
                  <h2>Resultado de la serie para n = {n}</h2>
                  <h4>Valores utilizados:</h4>
                  <ul>
                        <li>primo(n - 2) = primo({n - 2}) = <strong>{primo}</strong></li>
                        <li>triangular(n - 2) = triangular({n - 2}) = <strong>{triangular}</strong></li>
                        <li>fibonacci(n - 1) = fibonacci({n - 1}) = <strong>{fibonacci}</strong></li>
                  </ul>
                  <h4>Fórmula evaluada:</h4>
                  <p>serie({n}) = (2 × {primo} × 3 × {triangular}) / (7 × {fibonacci})</p>
                   <h4>Simplificacion:</h4>
                  <p>serie({n}) = {numerador} / {denominador} = <strong>{resultado}</strong></p>
                  <h4 className="resultado_serie">Resultado: <span>{resultado}</span></h4>
            </div>
      );
}

export default Resultado;
