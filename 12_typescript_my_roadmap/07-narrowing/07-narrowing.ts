// Ejercicio 1 typeof
function formato(x: string | number): string {
  if (typeof x === "string") {
    return `Texto: ${x}`;
  } else {
    return `Número: ${x}`;
  }
}

// Ejercicio 2 in
type ConTel = { nombre: string; telefono: string };
type SinTel = { nombre: string };

function contacto(c: ConTel | SinTel): string {
  if ("telefono" in c) {
    return `Tel: ${c.telefono}`;
  } else {
    return `Sin teléfono: ${c.nombre}`;
  }
}

// Ejercicio 3 instanceof
class A { 
  a() { return 1; } 
}

class B { 
  b() { return 2; } 
}

function llamar(x: A | B) {
  if (x instanceof A) {
    return x.a();
  } else {
    return x.b();
  }
}
