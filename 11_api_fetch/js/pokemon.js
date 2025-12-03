const listaPokemon = document.querySelector("#lista-pokemon");

fetch("https://pokeapi.co/api/v2/type/fire")
    .then(response => response.json())
    .then(data => {
        const pokemonsFuego = data.pokemon.slice(0, 15);  // Tomar solo los primeros 15 primeros

        pokemonsFuego.forEach(item => {
            const urlPokemon = item.pokemon.url; // URL individual del Pokémon

            // Segundo fetch: obtener info completa (incluye sprites)
            fetch(urlPokemon)
                .then(res => res.json())
                .then(pokeData => {
                    const nombre = pokeData.name;
                    const sprite = pokeData.sprites.front_default;

                    // Crear elementos
                    const li = document.createElement("li");
                    const img = document.createElement("img");

                    img.src = sprite;
                    img.alt = nombre;

                    li.textContent = nombre;
                    li.append(img);

                    listaPokemon.append(li);
                });
        });
    })
    .catch(err => console.error(err));
