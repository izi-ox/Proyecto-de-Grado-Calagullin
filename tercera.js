const preguntasTotales = [
  { p: "¿Cuál de estos es un tipo de dato en JavaScript?", o: ["jump", "string", "loop"], r: 1 },
  { p: "¿Qué estructura repite un bloque de código un número de veces?", o: ["if", "for", "alert"], r: 1 },
  { p: "¿Qué tipo de dato representa verdadero o falso?", o: ["boolean", "number", "string"], r: 0 },
  { p: "¿Qué palabra se usa para declarar una función?", o: ["func", "function", "def"], r: 1 },
  { p: "¿Qué hace el operador '=='?", o: ["Compara", "Suma", "Asigna"], r: 0 },
  { p: "¿Qué tipo de dato es esto: [1,2,3]?", o: ["Objeto", "Array", "Booleano"], r: 1 },
  { p: "¿Qué hace 'console.log()'?", o: ["Imprime en pantalla", "Guarda datos", "Suma números"], r: 0 },
  { p: "¿Cuál de estos es un bucle?", o: ["while", "print", "number"], r: 0 },
  { p: "¿Qué tipo de dato es 'Hola'?", o: ["String", "Array", "Boolean"], r: 0 },
  { p: "¿Qué tipo de dato es 5.5?", o: ["String", "Float (Number)", "Boolean"], r: 1 },
  { p: "¿Cuál es la estructura correcta para un if?", o: ["if (condición) {}", "si (condición) {}", "condición if {}"], r: 0 },
  { p: "¿Qué se usa para crear una variable?", o: ["int", "let", "print"], r: 1 },
  { p: "¿Qué hace el bucle while?", o: ["Repite mientras sea falso", "Repite mientras sea verdadero", "No repite"], r: 1 },
  { p: "¿Cómo se concatena texto en JavaScript?", o: ["+", "-", "*"], r: 0 },
  { p: "¿Qué tipo de dato es true?", o: ["Boolean", "Number", "String"], r: 0 },
  { p: "¿Qué método convierte texto a número?", o: ["parseInt()", "toString()", "push()"], r: 0 },
  { p: "¿Qué hace push() en un array?", o: ["Elimina un dato", "Agrega un dato", "Ordena"], r: 1 },
  { p: "¿Qué es una estructura de control?", o: ["Tipo de texto", "Forma de controlar flujo del programa", "Estilo CSS"], r: 1 },
  { p: "¿Cómo termina un bucle for?", o: ["Cuando la condición es falsa", "Nunca", "Cuando se imprime"], r: 0 },
  { p: "¿Qué hace break?", o: ["Termina un bucle", "Comienza uno nuevo", "Divide un string"], r: 0 }
];

let puntaje = 0;
let preguntaActual = 0;
let preguntasSeleccionadas = [];
let temporizador;
let tiempoRestante = 300;

function mostrar(seccion) {
  const contenido = document.getElementById("contenido");
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");

  if (seccion === "datos") {
    img1.classList.remove("hidden");
    img2.classList.add("hidden");

    contenido.innerHTML = `
      <h2><center>Tipos de Datos</center></h2>
      <p>En programación...</p>
      <!-- Resto del contenido omitido por brevedad -->
      <center>
        <button id="btnDatos" onclick="toggleVideo('videoDatos', 'btnDatos')">Presioname</button>
        <button onclick="window.open('https://www.liveworksheets.com/worksheet/es/programacion/7236773#google_vignette', '_blank')">Presioname</button>
        <button onclick="window.open('https://edu.gcfglobal.org/es/conceptos-basicos-de-programacion/operadores-logicos-o-booleanos/1/', '_blank')">Presioname</button>
      </center>
    `;
  } else if (seccion === "estructuras") {
    img1.classList.add("hidden");
    img2.classList.remove("hidden");

    contenido.innerHTML = `
      <h2><center>Estructuras de Control</center></h2>
      <p>Son bloques de código...</p>
      <!-- Resto del contenido omitido por brevedad -->
    `;
  } else if (seccion === "ejemplo") {
    img1.classList.remove("hidden");
    img2.classList.remove("hidden");

    contenido.innerHTML = `
      <h2><center>Ejemplo de Código</center></h2>
      <pre>
let edad = prompt("¿Cuántos años tienes?");
if (edad >= 18) {
  alert("Eres mayor de edad");
} else {
  alert("Eres menor de edad");
}
      </pre>
    `;
  }
}

function toggleVideo(videoId, btnId) {
  const video = document.getElementById(videoId);
  const boton = document.getElementById(btnId);

  if (video.style.display === "none") {
    video.style.display = "block";
    boton.textContent = "Ocultar";
  } else {
    video.style.display = "none";
    boton.textContent = "Tócame";
  }
}

function iniciarQuiz() {
  puntaje = 0;
  preguntaActual = 0;
  preguntasSeleccionadas = preguntasTotales.sort(() => 0.5 - Math.random()).slice(0, 20);
  tiempoRestante = 200;
  mostrarPregunta();
  clearInterval(temporizador);
  temporizador = setInterval(() => {
    tiempoRestante--;
    if (tiempoRestante <= 0) {
      clearInterval(temporizador);
      finalizarQuiz();
    } else {
      actualizarTiempo();
    }
  }, 1000);
}

function mostrarPregunta() {
  const q = preguntasSeleccionadas[preguntaActual];
  const contenido = document.getElementById("contenido");
  contenido.innerHTML = `
    <h2>Pregunta ${preguntaActual + 1} de 20</h2>
    <p><strong>${q.p}</strong></p>
    ${q.o.map((opcion, i) =>
      `<button onclick="responder(${i})">${String.fromCharCode(65 + i)}. ${opcion}</button>`
    ).join("")}
    <p><em>Tiempo restante: ${tiempoRestante} segundos</em></p>
  `;
}

function actualizarTiempo() {
  const tiempo = document.querySelector("em");
  if (tiempo) {
    tiempo.textContent = `Tiempo restante: ${tiempoRestante} segundos`;
  }
}

function responder(indice) {
  const correcta = preguntasSeleccionadas[preguntaActual].r;
  if (indice === correcta) puntaje++;
  preguntaActual++;
  if (preguntaActual < 20) {
    mostrarPregunta();
  } else {
    clearInterval(temporizador);
    finalizarQuiz();
  }
}

function finalizarQuiz() {
  const nombre = prompt("¡Fin del quiz! Ingresa tu nombre:");
  guardarPuntaje(nombre, puntaje);
  document.getElementById("contenido").innerHTML = `
    <h2>¡Quiz terminado!</h2>
    <p>Tu puntaje: <strong>${puntaje} / 20</strong></p>
  `;
}

function guardarPuntaje(nombre, puntos) {
  const registro = JSON.parse(localStorage.getItem("puntajes") || "[]");
  registro.push({ nombre, puntos });
  localStorage.setItem("puntajes", JSON.stringify(registro));
}

function mostrarMejores() {
  const contenido = document.getElementById("contenido");
  const registro = JSON.parse(localStorage.getItem("puntajes") || "[]");
  registro.sort((a, b) => b.puntos - a.puntos);
  const mejores = registro.slice(0, 5);
  contenido.innerHTML = `
    <h2>Mejores Puntajes</h2>
    <ol>
      ${mejores.map(p => `<li>${p.nombre}: ${p.puntos} puntos</li>`).join("")}
    </ol>
  `;
}

function limpiar() {
  document.getElementById("contenido").innerHTML = "";
}
