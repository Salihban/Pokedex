function getPokemonCardTemplate(pokemon) {
    console.log(pokemon);
    
    return /*html*/`
    <div onclick="openDialog(${pokemon.id})" class= "pokemon-card">
        <div class= "pokemon-card-header">
            <p>#${pokemon.id}</p>
            <h2>${pokemon.name}</h2>
        </div>
        <div class="pokemon-card-img" style="background-color: ${pokemonTypeColors[pokemon.types[0].type.name]}">
            <img src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}">
        </div>
        <div class="pokemon-card-type">
            ${renderTypes(pokemon.types)}
        </div>
    </div>
        `;
    }

    function getPokemonDialogTemplate(pokemon) {
    return /*html*/`
    <section>   
        <div>
            <h2>${pokemon.name}</h2>
            <p>#${pokemon.id}</p>
        </div>
        <div>
            <p>${renderTypes(pokemon.types)}</p>
            <img src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}">
        </div>
    </section>
    <section>
        <div><p>Base Stats</p></div>
        <div class="HP">
            <p>HP</p>
            <p></p>
        </div>
        <div class="attack">
            <p>attack</p>
            <p></p>
        </div>
        <div>
            <p>Defense</p>
            <p></p>
        </div>
    </section>
    `
    }