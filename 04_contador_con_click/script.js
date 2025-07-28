// Elementos del DOM
const valor = document.getElementById("valor");
const botonIncrementar = document.getElementById("incrementar");
const botonDisminuir = document.getElementById("disminuir");
const botonReiniciar = document.getElementById("reiniciar");

// Variable contador
let contador = Number(localStorage.getItem("contador")) || 0;

// Actualiza número, guarda en localStorage y aplica color
let ultimoContador = contador;
function actualizarVista() {
  const cambio = contador - ultimoContador;
  valor.textContent = contador.toLocaleString("es-ES");
  localStorage.setItem("contador", contador);
  actualizarColor();

  // Animación visual al cambiar
  valor.classList.remove("subiendo", "bajando");
  if (cambio > 0) {
    valor.classList.add("subiendo");
  } else if (cambio < 0) {
    valor.classList.add("bajando");
  }
  setTimeout(() => valor.classList.remove("subiendo", "bajando"), 200);

  ultimoContador = contador;
}

// Cambia color según valor
function actualizarColor() {
  if (contador > 0) {
    valor.style.color = "green";
  } else if (contador < 0) {
    valor.style.color = "red";
  } else {
    valor.style.color = "black";
  }
}

// Eventos
botonIncrementar.addEventListener("click", () => {
  contador++;
  actualizarVista();
});

botonDisminuir.addEventListener("click", () => {
  contador--;
  actualizarVista();
});

botonReiniciar.addEventListener("click", () => {
  contador = 0;
  actualizarVista();
});

// Al iniciar, actualizamos vista
actualizarVista();
