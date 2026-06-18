function searchPokemon() {
    let search = document.getElementById("search-input").value.toLowerCase();

    if (search.length < 3) {
        ("Please enter 3 letters");
    } else {

    }

    currentPokemon = allPokemon.filter(pokemon => pokemon.name.includes(search));
    renderPokemon();
}