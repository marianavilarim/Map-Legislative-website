document.addEventListener('DOMContentLoaded', () => {
    const dataList = document.getElementById('data-list');
    const dataForm = document.getElementById('data-form');
    const dateInput = document.getElementById('date-input');

    // Fetch data from API and display
    fetchData();

    // Handle form submission
    dataForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const textInput = document.getElementById('text-input').value;
        const dateValue = dateInput.value;
        searchOnMap(textInput, dateValue);
    });

    async function fetchData() {
        try {
            const response = await fetch('YOUR_API_ENDPOINT');
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Server response: ${await response.text()}`);
            }
            const data = await response.json();
            displayData(data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }

    function displayData(data) {
        dataList.innerHTML = ''; // Clear previous data
        data.forEach(item => {
            const listItem = document.createElement('div');
            listItem.textContent = item; // Adjust this based on your API response structure
            dataList.appendChild(listItem);
        });
    }

    function searchOnMap(textQuery, dateQuery) {
        // Implement your logic to highlight or filter markers based on the search queries
        // For simplicity, let's just log the queries for now
        console.log('Text Search:', textQuery);
        console.log('Date Search:', dateQuery);

        // Check if the action exists on the map
        const actionExists = checkActionOnMap(textQuery, dateQuery);

        if (!actionExists) {
            // If the action doesn't exist, display a message
            console.log('Action does not exist on the map.');
            // You can add code here to display a message to the user on the webpage
            displayMessage('Action does not exist on the map.');
        }
    }

    function checkActionOnMap(textQuery, dateQuery) {
        // Implement your logic to check if the action exists on the map
        // For simplicity, let's assume the action exists if both text and date queries are not empty
        return textQuery.trim() !== '' || dateQuery.trim() !== '';
    }

    function displayMessage(message) {
        // Display the message on the webpage
        const messageContainer = document.createElement('div');
        messageContainer.textContent = message;
        messageContainer.style.color = 'red'; // Customize the styling as needed
        document.body.appendChild(messageContainer);
    }
});