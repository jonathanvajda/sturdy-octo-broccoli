const map = L.map('map').setView([/* Default Latitude */, /* Default Longitude */], /* Default Zoom */);

// ... (Tile layer code remains the same)

let currentZoom = map.getZoom(); // Store the current zoom level

function addMarker() {
    // ... (Get latitude, longitude, and label from input fields - same as before)

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
