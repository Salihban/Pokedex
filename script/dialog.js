let dialogRef = document.getElementById("dialog");

function  openDialog(id) {
    let pokemon;

    for (let i = 0; i < allPokemon.length; i++) {
        if (allPokemon[i].id === id) {
            pokemon = allPokemon[i];
        }
    }

    dialogRef.innerHTML = getPokemonDialogTemplate(pokemon);
    dialogRef.showModal();
}

dialogRef.addEventListener("click", function(event) {if (event.target === dialogRef){ closeDialog();}});

function closeDialog() {
    document.getElementById("dialog").close();
}