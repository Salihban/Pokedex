function searchPokemon() {
    let search = document.getElementById("search-input").value.toLowerCase();

    currentPokemon = allPokemon.filter(pokemon => pokemon.name.includes(search));
    renderPokemon();
}