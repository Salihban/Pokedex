function searchPokemon() {
    let search = document.getElementById("search-input").value;
    let filteredPokemon = pokemon.filter(poke => poke.name.includes(search));

    renderPokemon(filteredPokemon);
}