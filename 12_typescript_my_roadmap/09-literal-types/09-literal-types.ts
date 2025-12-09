// Definición de un tipo literal para métodos HTTP
type Metodo = "GET" | "POST" | "PUT" | "DELETE";

function enviarPeticion(m: Metodo, url: string) {
  // TS solo acepta los cuatro valores permitidos
  console.log(`Enviando ${m} a ${url}`);
}

enviarPeticion("GET", "/api");    // OK
// enviarPeticion("PATCH", "/");  // ❌ Error en compilación

// tipos numéricos literales
type Nivel = 1 | 2 | 3;

function setNivel(n: Nivel) {
  console.log("Nivel:", n);
}

setNivel(2);   // OK
// setNivel(4); // ❌ Error