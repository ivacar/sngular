export class SerieService {
  static esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  static obtenerPrimo(pos) {
    if (pos < 1) throw new Error("El número debe ser mayor o igual a 3");
    let count = 1; //para que arranque en 1 en lugar de 0
    let num = 2;
    while (true) {
      if (this.esPrimo(num)) {
        if (count === pos) return num;
        count++;
      }
      num++;
    }
  }

  static triangular(n) {
    return (n * (n + 1)) / 2;
  }

  static fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  static calcularSerie(n) {
    if (n < 3) throw new Error("n debe ser mayor o igual a 3");

    const primo = this.obtenerPrimo(n - 2);
    const triangular = this.triangular(n - 2);
    const fibonacci = this.fibonacci(n - 1);

    const numerador = 2 * primo * 3 * triangular;
    const denominador = 7 * fibonacci;

    return numerador / denominador;
  }
}
