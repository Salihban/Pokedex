let allPokemon = [];


async function loadPokemon() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
    let data = await response.json();

    for (let i = 0; i < data.results.length; i++) {
        let pokemonUrl = data.results[i].url;

        let pokemonResponse = await fetch(pokemonUrl);
        let pokemonData = await pokemonResponse.json();

        allPokemon.push(pokemonData);
    }
    currentPokemon = allPokemon;
    renderPokemon();
}

function renderPokemon() {
let contentRef = document.getElementById("content");
contentRef.innerHTML = "";

for (let i = 0; i < currentPokemon.length; i++) {
    contentRef.innerHTML += getPokemonCardTemplate(currentPokemon[i]);
    }
}

function renderTypes(types) {
    let pokeType = "";

    for (let i = 0; i < types.length; i++) {
        pokeType += `<p>${types[i].type.name}</p>`
    }
    return pokeType;
}
loadPokemon();