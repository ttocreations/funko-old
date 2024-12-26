// Function to count collected items and update the footer
function updateCollectedCount() {
    const collectedItems = document.querySelectorAll('li.collected');
    const collectedCountElement = document.getElementById('collectedCount');
    collectedCountElement.textContent = collectedItems.length;
}

// Initial update on page load
updateCollectedCount();