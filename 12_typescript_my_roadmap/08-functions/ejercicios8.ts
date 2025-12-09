// Ejercicio 1
function doble(n: number): number {
  return n*2;
}
console.log(doble(5));

// Ejercicio 2
function crearSaludo(nombre?: string, saludo: string = "Hola"): string {
  return nombre ? `${saludo}, ${nombre}` : `${saludo}, invitado`;
}
console.log(crearSaludo("Emi"))

// Ejercicio 3
function registrar(msg: string): void {
  console.log(msg);
}

// error con el mensaje proporcionado
function falloCritico(msg: string): never {
  throw new Error(msg);
}

registrar("Todo está bien.");  // Imprime: "Todo está bien."

try {
  falloCritico("¡Error crítico ocurrido!");  // Lanza un error
} catch (error) {
  console.log(error);  // Maneja el error y lo imprime
}
