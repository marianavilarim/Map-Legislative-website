document.addEventListener('DOMContentLoaded', () => {
    const dataList = document.getElementById('data-list');
    const dataForm = document.getElementById('data-form');
    const dateInput = document.getElementById('date-input');

    // Fetch data 
    fetchData();

    // Handle submission
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
        dataList.innerHTML = ''; // clearing data
        data.forEach(item => {
            const listItem = document.createElement('div');
            listItem.textContent = item;
            dataList.appendChild(listItem);
        });
    }

    function searchOnMap(textQuery, dateQuery) {
    
        console.log('Text Search:', textQuery);
        console.log('Date Search:', dateQuery);

  
        const actionExists = checkActionOnMap(textQuery, dateQuery);

        if (!actionExists) {
            
            console.log('Action does not exist on the map.');
           
            displayMessage('Action does not exist on the map.');
        }
    }

    function checkActionOnMap(textQuery, dateQuery) {
     
        return textQuery.trim() !== '' || dateQuery.trim() !== '';
    }

    function displayMessage(message) {
      
        const messageContainer = document.createElement('div');
        messageContainer.textContent = message;
        messageContainer.style.color = 'red'; 
        document.body.appendChild(messageContainer);
    }
});