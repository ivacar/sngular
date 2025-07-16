![Banner Sngular](http://cloudzon.com/images/react-banner.png)

# Serie Numérica con REACT + VITE

Este proyecto es una aplicación web desarrollada con **React** y **Vite** que permite calcular una **serie matemática personalizada** en función del número natural `n` introducido por el usuario.



## Fórmula de la Serie

El término general de la serie está definido como:
## serie(n)= (2 * primo(n−2) * 3 * triangular(n−2)) / (7 * fibonacci(n−1))


Donde:

- `primo(n)` = n-ésimo número primo
- `triangular(n)` = n-ésimo número triangular
- `fibonacci(n)` = n-ésimo número de Fibonacci



##  Tecnologías utilizadas

- ⚛️ React + Vite
- 🎨 SCSS (estilos personalizados)
- 💬 SweetAlert2 + sweetalert2-react-content (alertas visuales)
- ✅ Vitest (pruebas unitarias)
- 🧠 Lógica contenida en `SerieService.js`




##  Cómo usar la app

```bash
Clona el repositorio:
git clone https://github.com/tu-usuario/serie-numerica-react.git
cd serie-numerica-react

---

##  Instala dependencias
npm install

---

##   Inicia el servidor local
npm run dev

---

##  Corre las pruebas unitarias (Vitest)
npm run test
