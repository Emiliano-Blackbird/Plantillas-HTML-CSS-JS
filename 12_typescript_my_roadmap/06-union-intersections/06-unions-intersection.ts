// Ejercicio 1
type On = { estado: "Encendida" };
type Off = { estado: "Apagada" };

type EstadoLuz = On | Off;

function presionarBoton(e: EstadoLuz) {
  if (e.estado === "Encendida") {  // Narrowing
    console.log(`Encendiendo...`)
  } else {
    console.log(`La luz está apagada`)
  }
}
presionarBoton({ estado: "Encendida" });
presionarBoton({ estado: "Apagada" });

// Ejercicio 2
type Persona = { nombre: string };
type Empleado = { salario: number };

type Trabajador = Persona & Empleado;

function info(t: Trabajador) {  // Narrowing
  console.log(`Nombre del empleado ${t.nombre} Salario ${t.salario}`);
}
// Creo un ejemplo de Trabajador
const dev1: Trabajador = {
  nombre: "Emiliano",
  salario: 2500,
};

info(dev1);

// Ejercicio 3
type Resultado = number | string;

function procesar(r: Resultado) {
  if (typeof r === "string") {  // Narrowing
    console.log("Texto procesado")
  } else {
    console.log("Número procesado")
  }
};

procesar("Hoola");
procesar(5);