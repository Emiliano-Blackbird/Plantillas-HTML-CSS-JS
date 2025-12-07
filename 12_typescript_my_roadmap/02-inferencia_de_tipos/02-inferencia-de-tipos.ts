// ejemploA.ts inferencia clara
const minutos = 5;         // number
const saludo = "hola";     // string
const activo = true;       // boolean

function doble(n: number) {
  return n * 2;            // retorno inferido: number
}

console.log(typeof minutos, saludo.toUpperCase(), doble(4));

// ejemploB.ts pitfall con arrays vacíos
const vacio = [];          // any[]
// mejor:
const nums: number[] = [];
nums.push(1);

// ejemploC.ts const assertion para literal
const metodo = "GET" as const; // tipo "GET"
type Metodo = typeof metodo;   // "GET"
