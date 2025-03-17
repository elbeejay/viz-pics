document.addEventListener('DOMContentLoaded', function() {
    const imageDropdown = document.getElementById('imageDropdown');
    const selectedImage = document.getElementById('selectedImage');

    // List of images in the /pics folder
    const images = [
        'AGO_Huambo__DB_vs_DoU.png',
        'ETH_Adama__DB_vs_DoU.png',
    ];

    // Populate the dropdown with image options
    images.forEach(image => {
        const option = document.createElement('option');
        option.value = image;
        option.textContent = image;
        imageDropdown.appendChild(option);
    });

    // Event listener for dropdown change
    imageDropdown.addEventListener('change', function() {
        const selectedValue = imageDropdown.value;
        if (selectedValue) {
            selectedImage.src = `pics/${selectedValue}`;
            selectedImage.style.display = 'block';
        } else {
            selectedImage.style.display = 'none';
        }
    });
});
