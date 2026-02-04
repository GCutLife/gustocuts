window.addEventListener('load', () => {
    const container = document.querySelector('.container');
    container.classList.add('visible');
});

/**
 * Copies provided text to the clipboard and provides visual feedback
 * @param {string} text - The string to be copied
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const btnText = document.getElementById('btn-text');
        
        // Store the original text to revert back to it later
        const originalText = btnText.innerText;

        // Visual feedback for the user
        btnText.innerText = "Copied!";
        
        // Revert to original text after 2 seconds
        setTimeout(() => {
            btnText.innerText = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Technical error: Could not copy to clipboard.');
    });
}
