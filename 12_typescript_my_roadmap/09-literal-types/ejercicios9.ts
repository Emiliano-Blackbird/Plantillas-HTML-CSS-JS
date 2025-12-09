type Direccion = "NORTE" | "SUR" | "ESTE" | "OESTE";

function girar(d: Direccion): Direccion {
  // usaremos un objeto para mapear direcciones a sus opuestas
  const opuestas: Record<Direccion, Direccion> = {
    NORTE: "SUR",
    SUR: "NORTE",
    ESTE: "OESTE",
    OESTE: "ESTE"
  };

  return opuestas[d];
}

// Pruebas
console.log(girar("NORTE")); // "SUR"
console.log(girar("ESTE"));  // "OESTE"

// Colores
// 1) Objeto literal
const Colores = {
  ROJO: "rojo",
  VERDE: "verde",
  AZUL: "azul"
} as const;

// 2) Extraemos el tipo union: "rojo" | "verde" | "azul"
type Color = (typeof Colores)[keyof typeof Colores];

function mezclar(a: Color, b: Color): Color | "marron" {
  // Si los colores son iguales → devolvés ese mismo color
  if (a === b) return a;

  // Combinaciones básicas que dan marrón
  const combinacionesMarron: [Color, Color][] = [
    ["rojo", "verde"],
    ["verde", "rojo"],
    ["rojo", "azul"],
    ["azul", "rojo"],
    ["verde", "azul"],
    ["azul", "verde"]
  ];

  for (const [x, y] of combinacionesMarron) {
    if (a === x && b === y) {
      return "marron";
    }
  }

  // Si no encontramos combinación (no debería pasar)
  return "marron";
}

// Pruebas
console.log(mezclar("rojo", "verde")); // "marron"
console.log(mezclar("azul", "azul"));  // "azul"
