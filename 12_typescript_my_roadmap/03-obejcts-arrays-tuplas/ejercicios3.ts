type Producto = {
  id: number;
  nombre?: string;
  stock: boolean;
  precio?: number;
}

const bananas: Producto = {
  id: 1000,
  nombre: "Platano de Canarias",
  stock: true,
  precio: 1.5,
}

const sandias: Producto = {
  nombre: "Sandias",
  id: 1001,
  stock: false,
}

function mostrarProducto(p: Producto): string {
  const nombre = p.nombre ?? "Producto sin nombre";  // Uso de nullish coalescing para nombre opcional si es nul o undefined
  if (p.stock === true) {
    return `Producto disponible: ${nombre}`
  } else {
    return `No tenemos los siguientes productos: ${nombre}`
  }
}

console.log(mostrarProducto(bananas))
console.log(mostrarProducto(sandias))

// Versión con operador ternario
function mostrarProductoTernario(p: Producto): string {
  return p.stock
    ? `Producto disponible: ${p.nombre}`
    : `No tenemos los siguientes productos: ${p.nombre}`;
}
