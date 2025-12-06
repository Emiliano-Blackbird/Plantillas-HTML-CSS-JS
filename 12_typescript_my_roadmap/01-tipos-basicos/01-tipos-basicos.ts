// string.ts
let miCadenaDeTexto: string = "Emiliano-Blackbird";
miCadenaDeTexto = "Emi";
// miCadenaDeTexto = 200  // ERROR: number no es asignable a string

// number.ts
let edadEnNumero: number = 30;
edadEnNumero = 34.5;
// edad = "34";  // Error

// boolean.ts
let verificarEdad: boolean = true;
verificarEdad = false;
// verificarEdad = "sí"; // Error

// Uso de string
const saludarUsuario: string = `Hola ${miCadenaDeTexto.toUpperCase()}`;
console.log(saludarUsuario);  // Consola: Hola Emi

// Uso de number
const sumaDeEdad = `¿Tu edad es ${edadEnNumero + 5.5}?`; // operaciones aritméticas normales
console.log(sumaDeEdad);  // Consola: ¿Tu edad es 40?

// Uso de boolean
const verificacionSeguridad: boolean = (edadEnNumero - 5.5) >= 18;
console.log("¿Puedes acceder? " , verificacionSeguridad);  // Consola: true

// null-undefined.ts
// strict true recomendado
let indef: undefined = undefined;
let nulo: null = null;

let posible: string | null | undefined = undefined;
posible = "texto";
posible = null; // OK
// posible = 5; // Error: number no es assignable a string | null | undefined
// a menos que agregue number
console.log(posible);  // Consola: null
posible = "Hola";
console.log(posible);  // Consola: Hola
posible = undefined
console.log(posible);  // Consola: undefined

// any.ts
let datoAny: any = "texto";
console.log("ANY inicial:", datoAny);

try {
    datoAny.toUppercasesss(); // Error en runtime, TS no avisa
} catch (e) {
    console.log("ANY falló en runtime:", e);
}

// unknown.ts
let seguroUnknown: unknown = "texto seguro";
console.log("UNKNOWN inicial:", seguroUnknown);
// acepta cualquier valor al asignar, pero requiere comprobación antes de usarlo
if (typeof seguroUnknown === "string") {
    console.log("UNKNOWN seguro:", seguroUnknown.toUpperCase()); // ✔ Seguro
}
