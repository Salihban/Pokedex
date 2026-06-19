function searchPokemon() {
    let search = document.getElementById("search-input").value.toLowerCase();
    if (search.length < 3){
        currentPokemon = allPokemon;
        renderPokemon();
        return;
    }
    currentPokemon = allPokemon.filter(pokemon => pokemon.name.toLowerCase().startsWith(search));
    if (currentPokemon.length === 0) {
        document.getElementById("content").innerHTML = `<p data-id="not-found">No Pokemon found</p>`;
        return;
    }
    renderPokemon();
}