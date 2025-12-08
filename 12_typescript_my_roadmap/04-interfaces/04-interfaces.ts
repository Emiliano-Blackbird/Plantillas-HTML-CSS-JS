// Interface con método y readonly
interface Config {
  readonly env: "dev" | "prod";
  port: number;
  start(): void;
}

const cfg: Config = { env: "dev", port: 3000, start() { console.log("start"); } };

// cfg.env = "prod"; // ❌ Error: readonly

// Extender y usar en función
interface Animal { nombre: string }
interface Volador extends Animal { volar(): void }

function hazVolador(a: Volador) {
  a.volar();
}

const pajaro: Volador = { nombre: "Loro", volar: () => console.log("vuela") };
hazVolador(pajaro);

// Interface + class implements
interface Almacen {
  guardar(key: string, value: unknown): void;
  obtener(key: string): unknown;
}

class Memoria implements Almacen {
  private store = new Map<string, unknown>();
  guardar(key: string, value: unknown) { this.store.set(key, value); }
  obtener(key: string) { return this.store.get(key); }
}
