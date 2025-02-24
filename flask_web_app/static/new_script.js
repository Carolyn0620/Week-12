document.addEventListener('DOMContentLoaded', function() {
    // Go back button functionality (assumes it navigates to the home page)
    var goBackBtn = document.getElementById('goBack');
    if (goBackBtn) {
        goBackBtn.addEventListener('click', function() {
            window.history.back();
        });
    }

    // Change image button functionality
    var changeImageBtn = document.getElementById('changeImageBtn');
    if (changeImageBtn) {
        changeImageBtn.addEventListener('click', function() {
            var mainImageElement = document.getElementById('mainImage');
            var secondImageElement = document.getElementById('secondImage');
            mainImageElement.classList.add('hidden'); // Hide the first image
            secondImageElement.classList.remove('hidden'); // Show the second image
        });
    }
});
