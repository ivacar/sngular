import { describe, it, expect } from 'vitest';
import { SerieService } from './SerieService';

describe('SerieService - 10 números naturales (n = 1 a 10)', () => {
  const resultadosEsperados = {
    3: 1.7143,
    4: 3.8571,
    5: 8.5714,
    6: 12.0000,
    7: 17.6786,
    8: 18.0000,
    9: 19.4286,
    10: 17.2437,
  };

  const tablaResultados = [];

  for (let n = 1; n <= 10; n++) {
    if (n < 3) {
      it(`No se puede procesar n = ${n}`, () => {
        expect(() => SerieService.calcularSerie(n)).toThrow();
      });
    } else {
      it(`Proceso exitoso para n = ${n}`, () => {
        const resultado = SerieService.calcularSerie(n);
        const redondeado = +resultado.toFixed(4);
        tablaResultados.push({
          n,
          resultado: redondeado,
          esperado: resultadosEsperados[n],
          diferencia: +(Math.abs(redondeado - resultadosEsperados[n])).toFixed(4)
        });
        expect(redondeado).toBeCloseTo(resultadosEsperados[n], 4);
      });
    }
  }

  // Mostrar tabla de resultados al final de los tests
  afterAll(() => {
    console.log('\n Tabla de comparación (resultado vs esperado):');
    console.table(tablaResultados);
  });
});
