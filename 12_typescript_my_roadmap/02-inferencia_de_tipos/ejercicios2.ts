// Ejercicio 1
const nombre = "Emi";
let contador = 5;

// aprovecho inferencia
function sumaUno() {
    contador += 1;
    return contador;
};

console.log(sumaUno());

// Ejercicio 2
const arr: (string | number)[] = [];
arr.push("Hola");
arr.push(1);
console.log(arr);
