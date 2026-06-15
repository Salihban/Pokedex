function getPokemonCardTemplate(pokemon) {
    return /*html*/`
    <div class= "pokemon-card">
        <div>
            <p>#${pokemon.id}</p>
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="">
        </div>
        `;
    }