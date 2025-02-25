document.addEventListener('DOMContentLoaded', function() {
    // Go back button functionality (assumes it navigates to the home page)
    const goBackBtn = document.getElementById('goBack');
    if (goBackBtn) {
        goBackBtn.addEventListener('click', function() {
            window.history.back();
        });
    }

    // Change image button functionality
    const changeImageBtn = document.getElementById('changeImageBtn');
    if (changeImageBtn) {
        changeImageBtn.addEventListener('click', function() {
            const mainImageElement = document.getElementById('mainImage');
            const secondImageElement = document.getElementById('secondImage');
            mainImageElement.classList.add('hidden'); // Hide the first image
            secondImageElement.classList.remove('hidden'); // Show the second image
        });
    }
});
