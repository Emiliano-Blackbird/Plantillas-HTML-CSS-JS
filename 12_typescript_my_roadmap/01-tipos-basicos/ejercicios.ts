// Ejercicio 1
const miNombre: string = "Emiliano";
let miEdad: number = 30;
let estaActivo: boolean = true;

console.log(miNombre, miEdad, estaActivo);

// Ejercicio 2
// Puede ser string o null
let nombre: string | null = "Emiliano";

/**
 * Función que saluda.
 * El parámetro es opcional → puede ser string o undefined.
 * La función devuelve siempre un string.
 */
function saludar(nombre?: string): string {
  if (nombre === undefined) {
    return "Hola, invitado";
  }
  return `Hola, ${nombre}`;
}

// Pruebo ambos casos
console.log(saludar());          // "Hola, invitado"
console.log(saludar("Emiliano")); // "Hola, Emiliano"

// Ejercicio 3
function despedida(nombre?: string): string {
    if (nombre === undefined) {
        return "Adiós, invitado";
    }
    return `Adiós, ${nombre}`;
}
