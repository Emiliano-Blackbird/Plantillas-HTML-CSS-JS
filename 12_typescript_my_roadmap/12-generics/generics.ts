// Ejercicio 1 identidad genérica (simple)
function identidad<T>(x: T): T {
  return x;
}
console.log(identidad(5));     // 5
console.log(identidad("hi"));  // "hi"

// Ejercicio 2 Stack genérico (clase)
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  size(): number {
    return this.items.length;
  }
}

// Uso
const s = new Stack<string>();
s.push("a");
s.push("b");
console.log(s.pop()); // "b"

// Ejercicio 3 getProp seguro (función con keyof)
function getProp<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Emi" };
const id = getProp(user, "id");   // number
// const bad = getProp(user, "no"); // ❌ Error

// Ejercicio 4 constraint con interfaz
interface Identificable { id: string | number }

function obtenerId<T extends Identificable>(x: T): string {
  return String(x.id);
}

console.log(obtenerId({ id: 10, name: "x" })); // "10"

// Ejercicio 5 default genérico
function crearPar<T = string>(a: T, b: T): [T, T] {
  return [a, b];
}

const p = crearPar(1, 2);      // [number, number]
const q = crearPar("a", "b");  // [string, string]
