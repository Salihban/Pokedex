async function loadPokemon() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/20");

    let data = await response.json();
    console.log(data);
    renderPokemon(data);
}

function renderPokemon(data){
let contentRef = document.getElementById("content");
contentRef.innerHTML = "";

contentRef.innerHTML += getPokemonCardTemplate(data);
}
loadPokemon();