async function loadPokemon() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon");

    let data = await response.json();
    console.log(data);
}

function renderPokemon(data){
let contentRef = document.getElementById("content");
contentRef.innerHTML = "";

for (let i = 0; i < allPokemon.length; i++) {

contentRef.innerHTML += getPokemonCardTemplate(allPokemon[i]);
}
}