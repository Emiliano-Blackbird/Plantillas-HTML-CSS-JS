// Definimos la forma de un objeto Usuario
interface Usuario {
  id: number;           // obligatorio
  nombre: string;       // obligatorio
  edad?: number;        // opcional (puede ser undefined)
  activo: boolean;      // obligatorio
  metadata: Record<string, unknown> | null; // object genérico o null
}

// Creamos un usuario que cumple la interfaz
const usuario1: Usuario = {
  id: 1,
  nombre: "Emiliano",
  activo: true,
  metadata: { role: "admin" },
};

// Propiedades
console.log(usuario1.nombre); // acceso seguro -> "Emiliano"

// Intento de asignar mal provoca error en compilación
// usuario1.id = "uno"; // ❌ Error: Type 'string' is not assignable to type 'number'

// Uso de propiedad opcional
if (usuario1.edad !== undefined) {
  console.log("Edad:", usuario1.edad);
} else {
  console.log("Edad no definida");
}

// Arrays con inferencia
const nums2: number[] = [1, 2, 3];
nums2.push(4);           // OK
// nums2.push("5");     // ❌ Error: string no es assignable a number

const mezclado: (number | string)[] = [1, "dos", 3];
const otraForma: Array<string> = ["a", "b"];

// Métodos con inferencia
const dobles = nums2.map(n => n * 2); // dobles: number[]

// src/03-objects/tuplas.ts

// Tupla: [id, nombre]
type Pair = [number, string];

const p: Pair = [1, "Emiliano"];
// const p2: Pair = ["1", "Emi"]; // ❌ Error: tipo incorrecto en posición 0

// Tupla con elementos opcionales / rest
type Complex = [number, string, ...boolean[]];
const c: Complex = [10, "ok", true, false]; // OK

// Desestructuración con tipos
const [id, nombre] = p; // id inferred as number, nombre as string
console.log(id, nombre);
