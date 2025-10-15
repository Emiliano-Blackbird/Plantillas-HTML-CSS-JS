// Declaramos 3 promesas diferentes.
let promise1 = Promise.resolve("Promesa 1 resuelta al instante");

let promise2 = new Promise((resolve) => {
  resolve(42);  // Devuelve un número.
});

let promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa 3 resuelta después de 1 segundo");
  }, 1000);
});

// Usamos Promise.all() para esperar a que TODAS se resuelvan.
// Si alguna falla → salta directamente al catch.
Promise.all([promise1, promise2, promise3])
  .then((valoresRetornados) => {
    console.log("Todas las promesas se resolvieron:", valoresRetornados);
  })
  .catch((error) => {
    console.error("❌ Alguna promesa ha sido rechazada:", error);
  });
