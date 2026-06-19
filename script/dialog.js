let dialogRef = document.getElementById("dialog");

function  openDialog(id) {
    let pokemon;
    for (let i = 0; i < currentPokemon.length; i++) {
        if (currentPokemon[i].id === id) {
            pokemon = currentPokemon[i];
        }
    }
    dialogRef.innerHTML = getPokemonDialogTemplate(pokemon);
    dialogRef.showModal();
}
dialogRef.addEventListener("click", function(event) {if (event.target === dialogRef){ closeDialog();}});
function btn_R(id) {
    let index = currentPokemon.findIndex(pokemon => pokemon.id == id);
    index++;
    if (index >= currentPokemon.length) {
    index = 0;
    }
    openDialog(currentPokemon[index].id);
}
function btn_L(id) {
    let index = currentPokemon.findIndex(pokemon => pokemon.id == id);
    index--;
    if (index < 0) {
    index = currentPokemon.length -1;
    }
    openDialog(currentPokemon[index].id);
}
function closeDialog() {
    document.getElementById("dialog").close();
}