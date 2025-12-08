// Ejercicio 1
interface ClientePorsche {
  id: number;
  nombre: string;
  email?: string;
}

interface ClienteFerrari {
  id: number;
  nombre: string;
  email?: string;
}

function mostrarCliente(c: ClienteFerrari): string {
  const email = c.email ?? "Sin email";
  return `Cliente ${c.id} - Email: ${email}`;
}

const ferrariContact: ClienteFerrari = { 
  id: 209340,
  nombre: "Enzo",
  email: "f40@gmail.com"
};

console.log(mostrarCliente(ferrariContact));


// Ejercicio 2
interface Direcciones extends ClientePorsche {
  direccion: string
};
function mostrarClienteCompleto(cliente: ClientePorsche | Direcciones): string {
  const id = cliente.id;
  const nombre = cliente.nombre;

  // verifico si tiene direccion
  const direccion = "direccion" in cliente 
    ? cliente.direccion  // si existe, acceder
    : "Dirección no disponible"; // si no, texto alternativo

  return `${id} - ${nombre} - ${direccion}`;
};
const porscheContact: Direcciones = { id: 209345, nombre: "Emi", direccion: "Valencia City"}
console.log(mostrarClienteCompleto(porscheContact));
