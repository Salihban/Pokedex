function getPokemonCardTemplate(pokemon) { 
    return /*html*/`
    <div data-id="card" onclick="openDialog(${pokemon.id})" class= "pokemon-card">
        <div class= "pokemon-card-header">
            <p>#${pokemon.id}</p>
            <h2>${pokemon.name}</h2>
        </div>
        <div class="pokemon-card-img" style="background-color: ${pokemonTypeColors[pokemon.types[0].type.name]}">
            <img data-id="card-image" src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}">
        </div>
        <div class="pokemon-card-type">
            ${renderTypes(pokemon.types)}
        </div>
    </div>
        `;
    }

    function getPokemonDialogTemplate(pokemon) {
    return /*html*/`
    <div class="dialogWrapper" style="background-color: ${pokemonTypeColors[pokemon.types[0].type.name]}">
    <section data-id="overlay-pokemon-name" class="headerDialog" style="background-color: ${pokemonTypeColors[pokemon.types[0].type.name]}">   
        <div class="headerId">
            <h2>${pokemon.name}</h2>
            <p>#${pokemon.id}</p>
            <button data-id="close-dialog-button" onclick="closeDialog()">X</button>
        </div>
        <div class="dialogSprites">
            <p>${renderTypes(pokemon.types)}</p>
            <img data-id="dialog-images" src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}">
        </div>
    </section>
    <section class="mainDialog" style="background-color: ${pokemonTypeColors[pokemon.types[0].type.name]}">
        <div class="baseStats"><p>Base Stats</p></div>
        <div class="stats">
            <p>HP</p>
            <p>${pokemon.stats[0].base_stat}</p>
        </div>
        <div class="stats">
            <p>attack</p>
            <p>${pokemon.stats[1].base_stat}</p>
        </div>
        <div class="stats">
            <p>Defense</p>
            <p>${pokemon.stats[2].base_stat}</p>
        </div>
        <div class="stats">
            <p>Speed</p>
            <p>${pokemon.stats[5].base_stat}</p>
        </div>
    </section>
    <div class="btnDialog" style="background-color: ${pokemonTypeColors[pokemon.types[0].type.name]}">
        <button data-id="prev-button" onclick="btn_L(${pokemon.id})">L</button>
        <button data-id="next-button" onclick="btn_R(${pokemon.id})">R</button>
    </div>
    </div>
    `
    }