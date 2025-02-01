const map = L.map('map').setView([27.587322195882756, -99.49490653640495], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let currentZoom = map.getZoom(); // Store the current zoom level

const addMarkerButton = document.getElementById('add-marker-button');
addMarkerButton.addEventListener('click', addMarker);

function addMarker() {
    const latitudeInput = document.getElementById('latitude');
    const longitudeInput = document.getElementById('longitude');
    const labelInput = document.getElementById('label');

    if (!latitudeInput || !longitudeInput || !labelInput) {
        console.error("One or more input fields not found!"); // Debugging
        return; // Stop execution
    }

    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;
    const label = labelInput.value;

    if (latitude && longitude && label) {
        const newLatLng = [latitude, longitude]; // Store new coordinates

        const marker = L.marker(newLatLng).addTo(map);
        marker.bindPopup(label).openPopup();

        // Center the map on the new marker
        map.setView(newLatLng, Math.max(currentZoom, 13)); // Center and zoom, but not more than 13

        // Clear input fields (same as before)
        document.getElementById('latitude').value = '';
        document.getElementById('longitude').value = '';
        document.getElementById('label').value = '';

        // Update currentZoom
        currentZoom = map.getZoom();

    } else {
        alert("Please fill in all fields.");
    }
}
