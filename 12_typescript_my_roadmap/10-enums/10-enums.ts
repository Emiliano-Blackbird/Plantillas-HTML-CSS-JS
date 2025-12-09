// enum numerico + reverse mapping
enum DireccionNum {
  Norte,
  Sur,
  Este,
  Oeste
}

function nombreDireccion(n: DireccionNum): string {
  return DireccionNum[n]; // reverse mapping numérico
}

// Pruebas
console.log(nombreDireccion(DireccionNum.Norte)); // "Norte"
console.log(nombreDireccion(2)); // "Este"

// enum string + validación
enum EstadoTCP {
  Open = "OPEN",
  Closed = "CLOSED",
  Listen = "LISTEN"
}

function esTerminal(e: EstadoTCP): boolean {
  return e === EstadoTCP.Closed;
}

// Pruebas
console.log(esTerminal(EstadoTCP.Closed)); // true
console.log(esTerminal(EstadoTCP.Open));   // false

// version moderna sin enum (objeto + literal union)
const Roles = {
  ADMIN: "admin",
  USER: "user"
} as const;

type Role = typeof Roles[keyof typeof Roles];
//    "admin" | "user"

function puedeEditar(role: Role): boolean {
  return role === Roles.ADMIN;
}

// Pruebas
console.log(puedeEditar("admin")); // true
console.log(puedeEditar("user"));  // false
