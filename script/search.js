function searchPokemon() {
    let search = document.getElementById("search-input").value.toLowerCase();

    if (search.length === 0) {
        currentPokemon = allPokemon;
        renderPokemon();
        return;
    } 

    if (search.length < 3) {
        document.getElementById("content").innerHTML =`<p>please enter at least 3 letters</p>`;
    }
    
    currentPokemon = allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(search));

    if (currentPokemon.length === 0) {
        document.getElementById("content").innerHTML = `<p data-id="not-found">No Pokemon found</p>`;
        return;
    }
    renderPokemon();
}