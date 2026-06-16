function getPokemonCardTemplate(pokemon) {
    console.log(pokemon);
    
    return /*html*/`
    <div class= "pokemon-card">
        <div class= "pokemon-card-header">
            <p>#${pokemon.id}</p>
            <h2>${pokemon.name}</h2>
        </div>
        <div class="pokemon-card-img" style="background-color: ${pokemonTypeColors[pokemon.types[0].type.name]}">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        </div>
        <div class="pokemon-card-type">
            ${renderTypes(pokemon.types)}
        </div>
    </div>
        `;
    }