// Declaración tradicional
function sumar(a: number, b: number): number {
  return a + b; // retorno tipado number
}

// Arrow function con tipos
const multiplicar = (x: number, y: number): number => {
  return x * y;
};

 // void y never
 function log(msg: string): void {
  console.log(msg);
  // no return (implícitamente undefined), tipo void
}

function lanzarError(msg: string): never {
  throw new Error(msg); // nunca retorna
}

function bucleInfinito(): never {
  while (true) {}
}

// param opcionales y por defecto
// Parámetro opcional -> nombre?: string  (equivalente a string | undefined)
function saludar(nombre?: string): string {
  return nombre ? `Hola, ${nombre}` : "Hola, invitado";
}

// Parámetro con valor por defecto
function saludar2(nombre: string = "invitado"): string {
  return `Hola, ${nombre}`;
}
// Parámetros REST
function sumaTodos(...nums: number[]): number {
  return nums.reduce((s, n) => s + n, 0);
}

sumaTodos(1, 2, 3); // 6

// Sobrecarga de funciones
// Sobrecargas (firmas)
function buscar(x: number): { id: number; name: string } | null;
function buscar(x: string): { id: number; name: string }[];

// Implementación
function buscar(x: number | string): any {
  // simulación
  if (typeof x === "number") {
    return { id: x, name: "User" + x }; // devuelve un objeto o null
  } else {
    return [{ id: 1, name: x }, { id: 2, name: x + "2" }]; // devuelve array
  }
}

// Uso:
const a = buscar(3);    // TS infiere: { id:number; name:string } | null
const b = buscar("mi"); // TS infiere: { id:number; name:string }[]

// Exhaustividad con never
type Estado = "pending" | "done" | "error";

function manejar(e: Estado) {
  switch (e) {
    case "pending": return "pendiente";
    case "done": return "listo";
    case "error": return "error";
  }
  // Si se agrega un nuevo estado, esto falla
  const _exhaustivo: never = e;
  return _exhaustivo;
}

// genericos en funciones
function identidad<T>(x: T): T {
  return x;
}

const n = identidad<number>(5); // n: number
const s = identidad("hola");    // s: string (inferencia)
