function copyReference(element) {
    const text = element.innerText;

    // Try to copy to clipboard
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function () {
            alert('Reference copied to clipboard!');
        }).catch(function (err) {
            console.error('Failed to copy: ', err);
            alert('Copy failed. Please try selecting the text manually.');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            alert('Reference copied to clipboard!');
        } catch (err) {
            alert('Copy failed. Please select the text manually.');
        }
        document.body.removeChild(textArea);
    }
}

// Test if JavaScript is working
console.log('JavaScript loaded successfully!');

// Add some basic interactivity test
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, page ready!');
});