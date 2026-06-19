let allPokemon = [];
let currentPokemon = [];
let offset = 0;
const limit = 20;


async function loadPokemon() {
    showLoadingSpinner();
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    let data = await response.json();

    let pokemonList = data.results;

    for (let i = 0; i < pokemonList.length; i++) {
        let pokemonUrl = data.results[i].url;

        let pokemonResponse = await fetch(pokemonList[i].url);
        let pokemonData = await pokemonResponse.json();

        allPokemon.push(pokemonData);
        renderNewPokemon(pokemonData);
    }
    currentPokemon = allPokemon;
    offset += limit;
    renderPokemon();
    hideLoadingSpinner();
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

function renderNewPokemon(pokemon) {
    const cardRef = document.getElementById("content");
    cardRef.innerHTML += getPokemonCardTemplate(pokemon);
}
loadPokemon();