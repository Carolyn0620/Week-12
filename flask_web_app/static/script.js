document.addEventListener('DOMContentLoaded', function() {
    // Alert button functionality
    var alertBtn = document.getElementById('alertBtn');
    if (alertBtn) {
        alertBtn.addEventListener('click', function() {
            alert('Hello from JavaScript!');
        });
    }

    // Navigate to second page functionality
    var testBtn = document.getElementById('testBtn');
    if (testBtn) {
        testBtn.addEventListener('click', function() {
            window.location.href = '/second-page';
        });
    }

    // Navigate to third page functionality
    var imageBtn = document.getElementById('imageBtn');
    if (imageBtn) {
        imageBtn.addEventListener('click', function() {
            window.location.href = '/third-page';
        });
    }

    // Browse image button functionality
    var browseBtn = document.getElementById('browseBtn');
    if (browseBtn) {
        browseBtn.addEventListener('click', function() {
            document.getElementById('imageInput').click();
        });
    }

    // Handle image input change and display the selected image
    var imageInput = document.getElementById('imageInput');
    if (imageInput) {
        imageInput.addEventListener('change', function() {
            var file = imageInput.files[0];
            var reader = new FileReader();

            reader.onload = function(e) {
                var uploadedImage = document.getElementById('uploadedImage');
                uploadedImage.src = e.target.result;
                
                uploadedImage.style.display = 'block'; // Show the image
            };

            reader.readAsDataURL(file);
        });
    }
});
