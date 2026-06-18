async function loadAndShow() {

    showLoadingSpinner();

    await loadPkms(listStart, listStart + 10)
    
}