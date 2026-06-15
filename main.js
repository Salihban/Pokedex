async function loadPokemon() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon");

    let data = await response.json();
    console.log(data);
}