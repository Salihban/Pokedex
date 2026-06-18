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

function btn_R(id) {
    if (id >= allPokemon.length) {
        openDialog(1)
    } else {
        openDialog(id + 1);
    }
}

function btn_L(id) {
    if (id <= 1) {
        openDialog(allPokemon.length);
    } else {
        openDialog(id - 1);
    }
}

function closeDialog() {
    document.getElementById("dialog").close();
}