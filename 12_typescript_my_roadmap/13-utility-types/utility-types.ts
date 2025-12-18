// Ejercicio 1: Partial
type Pelicula = {
  titulo: string;
  año: number;
  rating: number;
};

function actualizarPelicula(
  peli: Pelicula,
  cambios: Partial<Pelicula>
): Pelicula {
  return { ...peli, ...cambios };
}

const peli = actualizarPelicula(
  { titulo: "Inception", año: 2010, rating: 9 },
  { rating: 10 }
);

// Ejercicio 2: pick + omit
type Serie = {
  titulo: string;
  temporadas: number;
  plataforma: string;
};

type SeriePublica = Pick<Serie, "titulo" | "temporadas">;
type SerieSinPlataforma = Omit<Serie, "plataforma">;

// Ejercicio 3: Record
type Paises = "Argentina" | "España" | "México";

const capitales: Record<Paises, string> = {
  Argentina: "Buenos Aires",
  España: "Madrid",
  México: "Ciudad de México"
};

// Ejercicio 4: returnType // 
function crearCoche(marca: string, modelo: number) {
  return { marca, modelo };
}

type Params = Parameters<typeof crearCoche>; 
// [string, number]

type Retorno = ReturnType<typeof crearCoche>; 
// { marca: string; modelo: number }

// Ejercicio 5: awaited
async function getNumero() {
  return 42;
}

type TipoNumero = Awaited<ReturnType<typeof getNumero>>;
// number
