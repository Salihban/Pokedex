let allPokemon = [];

async function loadPokemon() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
    let data = await response.json();

    for (let i = 0; i < data.results.length; i++) {
        let pokemonUrl = data.results[i].url;

        let pokemonResponse = await fetch(pokemonUrl);
        let pokemonData = await pokemonResponse.json();

        allPokemon.push(pokemonData);
    }
    renderPokemon();
}

function renderPokemon() {
let contentRef = document.getElementById("content");
contentRef.innerHTML = "";

for (let i = 0; i < allPokemon.length; i++) {
    contentRef.innerHTML += getPokemonCardTemplate(allPokemon[i]);
    }
}
loadPokemon();