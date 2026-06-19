function showLoadingSpinner() {
    setTimeout(() => {hideLoadingSpinner();}, 3000);

    document.getElementById("loading-spinner").classList.remove("d-none");
}

function hideLoadingSpinner() {
    document.getElementById("loading-spinner").classList.add("d-none");
}