document.addEventListener('DOMContentLoaded', function() {
    // Alert button functionality
    const alertBtn = document.getElementById('alertBtn');
    if (alertBtn) {
        alertBtn.addEventListener('click', function() {
            alert('Hello from JavaScript!');
        });
    }

    // Navigate to second page functionality
    const testBtn = document.getElementById('testBtn');
    if (testBtn) {
        testBtn.addEventListener('click', function() {
            window.location.href = '/second-page';
        });
    }

    // Navigate to third page functionality
    const imageBtn = document.getElementById('imageBtn');
    if (imageBtn) {
        imageBtn.addEventListener('click', function() {
            window.location.href = '/third-page';
        });
    }

    // Browse image button functionality
    const browseBtn = document.getElementById('browseBtn');
    if (browseBtn) {
        browseBtn.addEventListener('click', function() {
            document.getElementById('imageInput').click();
        });
    }

    const descriptionBtn = document.getElementById('descriptionBtn');
    if (descriptionBtn) {
        descriptionBtn.addEventListener('click', function() {
            window.location.href = '/sixth-page';
        });
    }

    // Handle image input change and display the selected image
    const imageInput = document.getElementById('imageInput');
    if (imageInput) {
        imageInput.addEventListener('change', function() {
            const file = imageInput.files[0];
            const reader = new FileReader();

            reader.onload = function(e) {
                const uploadedImage = document.getElementById('uploadedImage');
                uploadedImage.src = e.target.result;
                uploadedImage.style.display = 'block'; // Show the image
            };

            reader.readAsDataURL(file);
        });

      
    }
});
