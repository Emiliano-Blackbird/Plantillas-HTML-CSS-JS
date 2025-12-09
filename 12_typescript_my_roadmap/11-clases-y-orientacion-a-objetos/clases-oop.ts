// private
class Banco {
  // propiedad privada: no accesible desde fuera de la clase
  private fondos: number;

  constructor(inicial: number = 0) {
    this.fondos = inicial;
  }

  // método público para ingresar dinero
  depositar(cantidad: number): void {
    if (cantidad <= 0) throw new Error("La cantidad debe ser positiva");
    this.fondos += cantidad;
  }

  // método público para consultar fondos (acceso controlado)
  mostrarFondos(): string {
    return `Fondos disponibles: €${this.fondos.toFixed(2)}`;
  }
}

// Prueba
const banco = new Banco(100);
banco.depositar(50);                // fondos = 150
console.log(banco.mostrarFondos()); // "Fondos disponibles: €150.00"

// Intentar acceder a `banco.fondos` desde fuera daría error en TypeScript:
// console.log(banco.fondos); // ❌ Error: propiedad privada

// readonly
class App {
  // version es readonly: solo se puede asignar al declararla o en el constructor
  readonly version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(): string {
    return `App v${this.version}`;
  }
}

// Prueba
const myApp = new App("1.2.0");
console.log(myApp.info()); // "App v1.2.0"

// myApp.version = "2.0.0"; // ❌ Error: no se puede reasignar readonly

// implements
// Interfaz que actúa como contrato: cualquier "Volador" debe implementar volar()
interface Volador {
  volar(): string;
}

// Clase Avion implementa la interfaz Volador
class Avion implements Volador {
  constructor(private modelo: string) {}

  volar(): string {
    return `${this.modelo} despegó y está volando.`;
  }
}

// Prueba
const boeing = new Avion("Boeing 747");
console.log(boeing.volar()); // "Boeing 747 despegó y está volando."

// extends
// Clase base Empleado
class Empleado {
  constructor(public nombre: string, public edad: number) {}

  info(): string {
    return `${this.nombre} (${this.edad} años)`;
  }
}

// Programador extiende Empleado y añade lenguaje favorito
class Programador extends Empleado {
  constructor(nombre: string, edad: number, public lenguaje: string) {
    super(nombre, edad); // llama al constructor de la clase base
  }

  // método propio
  techStack(): string {
    return `${this.nombre} programa en ${this.lenguaje}`;
  }
}

// Prueba (ejemplo inspirado en películas: "Tony Stark" como programador)
const tony = new Programador("Tony Stark", 48, "TypeScript");
console.log(tony.info());      // "Tony Stark (48 años)"
console.log(tony.techStack()); // "Tony Stark programa en TypeScript"

// abstract
// Clase abstracta Forma: define la interfaz (contrato) para las subclases
abstract class Forma {
  // Las subclases deben implementar este método
  abstract area(): number;

  // método común opcional
  descripcion(): string {
    return `Área: ${this.area().toFixed(2)}`;
  }
}

// Triángulo (base * altura / 2)
class Triangulo extends Forma {
  constructor(private base: number, private altura: number) {
    super();
  }

  area(): number {
    return (this.base * this.altura) / 2;
  }
}

// Rectángulo (ancho * alto)
class Rectangulo extends Forma {
  constructor(private ancho: number, private alto: number) {
    super();
  }

  area(): number {
    return this.ancho * this.alto;
  }
}

// Pruebas (ejemplo con dimensiones de un coche: área de rectángulo que simula huella)
const t = new Triangulo(4, 3);
const r = new Rectangulo(2, 5);

console.log(t.descripcion()); // "Área: 6.00"
console.log(r.descripcion()); // "Área: 10.00"
