function getPokemonCardTemplate(pokemon) {
    return /*html*/`
    <div class= "pokemon-card">
        <div class= "pokemon-card-header">
            <p>#${pokemon.id}</p>
            <h2>${pokemon.name}</h2>
        </div>
        <div class="pokemon-card-img">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        </div>
        <div class="pokemon-card-type">
            <p>${pokemon.types[0].type.name}</p>
        </div>
    </div>
        `;
    }