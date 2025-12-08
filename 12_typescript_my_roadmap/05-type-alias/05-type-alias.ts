// Ejercicio 1
// Alias simple para email
type Email = string;

// Type Usuario con id, email y nombre opcional
type Usuario = {
  id: number;
  email: Email;
  nombre?: string;
};

// Función que recibe un Usuario y devuelve un string con el email
function mostrarEmail(u: Usuario): string {
  return `Email: ${u.email}`;
}

// Probamos con un usuario
const user1: Usuario = {
  id: 1,
  email: "emi@blackbird.dev",
  nombre: "Emi",
};

console.log(mostrarEmail(user1)); // Email: emi@blackbird.dev

// Ejercicio 2// Métodos HTTP permitidos
type Metodo = "GET" | "POST" | "PUT" | "DELETE";

// Devuelve true solo si el método es GET o POST
function esSeguro(m: Metodo): boolean {
  return m === "GET" || m === "POST";
}

console.log(esSeguro("GET"));    // true
console.log(esSeguro("POST"));   // true
console.log(esSeguro("PUT"));    // false
console.log(esSeguro("DELETE")); // false

// Ejercicio 3
// Tupla con coordenadas: [x, y]
type Punto = [number, number];

// Fórmula de distancia entre dos puntos
function distancia(a: Punto, b: Punto): number {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  return Math.sqrt(dx * dx + dy * dy);
}

// Pruebas
const p1: Punto = [0, 0];
const p2: Punto = [3, 4];

console.log(distancia(p1, p2)); // 5

// Ejercicio 4 Avanzado
// Figuras
type Circulo = { kind: "circulo"; radio: number };
type Rect = { kind: "rect"; ancho: number; alto: number };

// Unión de las figuras
type Figura = Circulo | Rect;

/*
  T extiende Figura → asegura que la función solo recibe figuras válidas.
  Retornamos T → si entra Circulo, sale Circulo. Si entra Rect, sale Rect.
*/
function transformar<T extends Figura>(f: T, scale: number): T {
  if (f.kind === "circulo") {
    // spread y override, manteniendo el tipo inferido
    return {
      ...f,
      radio: f.radio * scale,
    } as T;
  }

  // Si NO es círculo, entonces por descarte es rectángulo
  return {
    ...f,
    ancho: f.ancho * scale,
    alto: f.alto * scale,
  } as T;
}

// Pruebas
const c: Circulo = { kind: "circulo", radio: 10 };
const r: Rect = { kind: "rect", ancho: 5, alto: 8 };

console.log(transformar(c, 2)); // radio: 20
console.log(transformar(r, 3)); // ancho: 15, alto: 24
