// Declaramos tres promesas para usar en la cadena.
let p1 = new Promise((resolve, reject) => {
	console.log("Ejecutando p1...");
	resolve("Valor inicial de p1 ✅");
});  // p1 se resuelve inmediatamente.

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Ejecutando p2 (con retraso de 3 seg)...");
    resolve("Valor de p2 después de 3 segundos ⏳");
  }, 3000);
});  // p2 se resuelve después de 3 segundos.

let p3 = new Promise((resolve, reject) => {
  console.log("Ejecutando p3...");
  reject("Error en p3 ❌");
});  // p3 se rechaza directamente (simulamos un error).

// Encadenamos promesas para ver cómo fluyen los valores y errores.
p1
  .then((valor1) => {
    console.log("Primer then → p1 me devolvió:", valor1);
    return p2;  // Devuelve la promesa p2.
  })  // Primer then: recibe el valor de p1 y devuelve p2 para continuar la cadena.
  .then((valor2) => {
    console.log("Segundo then → p2 me devolvió:", valor2);
    return p3; // devuelve la promesa p3 (que se va a rechazar).
  })  // Segundo then: recibe el valor resuelto de p2 y devuelve p3.
  .then((valor3) => {
    console.log("Tercer then → p3 me devolvió:", valor3);
    return valor3;
  })  // Tercer then: se ejecutaría si p3 se resolviera, pero se ha rechazado y se salta.
  .catch((error) => {
    console.log("Ha ocurrido un error en la cadena:", error);
  })  // catch: captura cualquier error que haya ocurrido en las promesas anteriores.
  .finally(() => {
    console.log("Ejecutando finally: limpieza, cierre de conexiones, etc.");
  });  // finally: se ejecuta siempre (resuelto o rechazado).
