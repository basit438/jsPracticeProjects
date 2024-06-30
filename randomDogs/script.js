// script.js

document.addEventListener('DOMContentLoaded', () => {
    const imgContainer = document.querySelector('#container');
    const refreshBtn = document.querySelector('#refresh');

    const fetchTheData = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();

            // Clear the previous image
            imgContainer.innerHTML = "<h1>Get random dog images by clicking on the refresh button</h1>";

            // Create new image element and set its source
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = "A Random Dog Image";

            // Append the new image to the container
            imgContainer.appendChild(img);
        } catch (error) {
            console.error("Error fetching data:", error);
            imgContainer.innerHTML = "<p>Failed to load image. Please try again later.</p>";
        }
    };

    // Fetch a new image when the button is clicked
    refreshBtn.addEventListener('click', fetchTheData);

    // Fetch an initial image on page load
    fetchTheData();
});
