const map = L.map('map').setView([/* Initial Latitude */, /* Initial Longitude */], /* Initial Zoom */); // Set initial view

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function addMarker() {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const label = document.getElementById('label').value;

    if (latitude && longitude && label) { // Check if all fields are filled
        const marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup(label).openPopup(); // Add popup with label

        // Clear input fields
        document.getElementById('latitude').value = '';
        document.getElementById('longitude').value = '';
        document.getElementById('label').value = '';
    } else {
        alert("Please fill in all fields.");
    }
}
