document.addEventListener('DOMContentLoaded', () => {
    const politicalActions = [
        { name: 'Action 1', lat: 40.7128, lon: -74.0060 },
        { name: 'Action 2', lat: 34.0522, lon: -118.2437 },
        // Add more political actions with their coordinates
    ];

    // Initialize the map
    const map = L.map('map').setView([20, 0], 2); // Default center and zoom level

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add markers for political actions
    politicalActions.forEach(action => {
        const marker = L.marker([action.lat, action.lon]).addTo(map);
        marker.bindPopup(`<b>${action.name}</b>`); // Popup with action name
    });
});