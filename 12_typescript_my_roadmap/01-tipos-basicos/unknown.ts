// unknown.ts
let entrada: unknown = "hola";
entrada = 123;
entrada = { user: "Emi" };

// entrada.user; // Error: Object is of type 'unknown'.

if (typeof entrada === "object" && entrada !== null && "user" in entrada) {
  // ahora TypeScript infiere que entrada tiene propiedad user
  console.log((entrada as { user: string }).user);
}  // Consola: Emi

// Mejor: usar guards o validar con funciones.
