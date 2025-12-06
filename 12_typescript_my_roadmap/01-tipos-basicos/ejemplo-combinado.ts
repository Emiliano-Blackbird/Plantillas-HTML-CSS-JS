// usuario.ts

type Metadata = Record<string, unknown> | null;

type Usuario = {
  id: number;
  nombre: string;
  activo: boolean;
  edad?: number;           // opcional -> number | undefined
  metadata?: Metadata;     // puede no venir o ser null
};

function crearUsuario(id: number, nombre: string): Usuario {
  return { id, nombre, activo: true };
}

function imprimeUsuario(u: Usuario): void {
  console.log(`Usuario: ${u.nombre} (id: ${u.id})`);
  if (u.edad !== undefined) {
    console.log(`Edad: ${u.edad}`);
  }
  if (u.metadata) {
    console.log("Metadata presente");
  }
}

const emiliano = crearUsuario(1, "Emiliano");
imprimeUsuario(emiliano);
// Console output: Usuario: Emiliano (id: 1)