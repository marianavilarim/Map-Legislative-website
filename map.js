document.addEventListener('DOMContentLoaded', () => {
    const politicalActions = [
        { name: 'Action 1', lat: 40.7128, lon: -74.0060 },
        { name: 'Action 2', lat: 34.0522, lon: -118.2437 },
        // political actions
    ];

    //  map
    const map = L.map('map').setView([20, 0], 2); // center and zoom 

    // Add OpenStreetMap 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add markers for political actions
    politicalActions.forEach(action => {
        const marker = L.marker([action.lat, action.lon]).addTo(map);
        marker.bindPopup(`<b>${action.name}</b>`); // Popup with action name
    });
});