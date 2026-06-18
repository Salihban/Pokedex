function showLoadingSpinner() {
    console.log("spinner an");
    
    document.getElementById("loading-spinner").classList.remove("d-none");
}

function hideLoadingSpinner() {
    document.getElementById("loading-spinner").classList.add("d-none");
}