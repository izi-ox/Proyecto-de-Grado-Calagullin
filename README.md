# Proyecto-de-Grado-Calagullin
<!DOCTYPE html>  
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Aprende sobre Tipos de Datos y Estructuras de Control</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background: #d7f2ff;
      position: relative;
    }
    h1 {
      color: #1d69b5;
    }
    .section {
      margin-top: 20px;
      padding: 15px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    button {
      margin: 5px;
      padding: 10px 15px;
      border: none;
      background-color: #55adff;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #8557fb;
    }
    pre {
      background: #eef;
      padding: 10px;
      border-radius: 5px;
      white-space: pre-wrap;
    }

    .corner-image {
      position: fixed;
      top: 10px;
      right: 10px;
      width: 160px;
      height: auto;
      z-index: 999;
    }

    .img-hover {
      width: 400px;
      height: auto;
      transition: transform 0.3s ease;
      margin: 10px;
    }

    .img-hover:hover {
      transform: scale(1.5);
    }

    .img-container {
      text-align: center;
      margin-top: 30px;
    }

    .hidden {
      display: none;
    }
  </style>
</head>
<body>

  <img src="logo.png" alt="Logo" class="corner-image">

  <h1><center>Tipos de Datos y Estructuras de Control</center></h1>

  <div>
    <button onclick="mostrar('datos')">Tipos de Datos</button>
    <button onclick="mostrar('estructuras')">Estructuras de Control</button>
    <button onclick="mostrar('ejemplo')">Ejemplo de Código</button>
    <button onclick="iniciarQuiz()">Iniciar Quiz</button>
    <button onclick="mostrarMejores()">Ver Mejores Puntajes</button>
    <button onclick="limpiar()">Limpiar</button>
  </div>

  <div id="contenido" class="section"></div>

  <div class="img-container">
    <img id="img1" src="img1.jpg" alt="Imagen 1" class="img-hover">
    <img id="img2" src="img2.jpg" alt="Imagen 2" class="img-hover">
  </div>


  <script>
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
      <p>En programación, los tipos de datos definen qué tipo de información se puede almacenar en una variable, cómo se manipula y qué operaciones se pueden realizar. Los más comunes son: numéricos (enteros y de punto flotante), de texto (cadenas), booleanos (verdadero/falso) y otros como caracteres, arreglos y objetos</p>
      <ul>
        <li><strong>String:</strong> Cadena de texto como <code>"Hola mundo"</code></li>
        <li><strong>Number:</strong> Números enteros o decimales como <code>10</code> o <code>3.14</code></li>
        <li><strong>Boolean:</strong> Solo puede ser <code>true</code> (verdadero) o <code>false</code> (falso)</li>
        <li><strong>Array:</strong> Lista de datos como <code>[1, 2, 3]</code></li>
        <li><strong>Object:</strong> Agrupación de propiedades como <code>{ nombre: "Ana", edad: 20 }</code></li>
      </ul>
      <p>Los tipos de datos son esenciales en la programación porque: Permiten al lenguaje de programación saber qué tipo de información se está manipulando, controlan la cantidad de memoria que se utiliza para almacenar un valor, definen las operaciones que se pueden realizar con un valor y ayudan a evitar errores al trabajar con diferentes tipos de datos.</p>

      <center>
        <h3>Explicación</h3>
        <div id="videoDatos" style="display: none; margin-top: 15px;">
          <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/R-b9q7E6Hys" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
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
      <p>Son bloques de código que determinan el flujo de ejecución de un programa. Permiten tomar decisiones, repetir acciones y organizar el código de manera eficiente. En esencia, son la base de la lógica y la organización de cualquier algoritmo.</p>
      <ul>
        <li><strong>if / else:</strong> Ejecuta un bloque de código si se cumple una condición. Si no, ejecuta otro.</li>
        <li><strong>for:</strong> Bucle que se repite una cantidad definida de veces.</li>
        <li><strong>while:</strong> Bucle que se repite mientras se cumpla una condición.</li>
      </ul>

      <center> 
        <h3>Explicación</h3>
        <div id="videoEstructuras" style="display: none; margin-top: 15px;">
          <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/rDynuZstCwU" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <button id="btnEstructuras" onclick="toggleVideo('videoEstructuras', 'btnEstructuras')">Presioname</button>
        <button onclick="window.open('https://www.liveworksheets.com/es/node/6440899')">Presioname</button>
        <button onclick="window.open('https://keepcoding.io/blog/que-son-estructuras-de-control-en-programacion/', '_blank')">Presioname</button>
      </center>
    `;

 } else if (seccion === "ejemplo") {
        img1.classList.remove("hidden");
        img2.classList.remove("hidden");

        contenido.innerHTML = `
      <h2><center>Ejemplo de Código</center></h2>
      <p>El código nos pide la edad de la persona que esté probando dicho código y muestra un mensaje dependiendo si la persona es mayor o menor de edad: (Recuerda que puedes probar este ejemplo en visual studio code o python)</p>
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
  </script>
</body>
</html>
