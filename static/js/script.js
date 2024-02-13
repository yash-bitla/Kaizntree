function create_category(){
    const apiUrl = 'http://localhost:8000/api/v1/items/category/add/';
    const authToken = '514b1ac473ce9d7054cd8b032109efc3d19b74ee';

    const requestData = {
        name: '3',
    };

    fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${authToken}`,
    },
    body: JSON.stringify(requestData),
    })
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Handle the response data here
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors here
    });
}

function create_item(){
    console.log("create_item");    
    
    const authToken = '514b1ac473ce9d7054cd8b032109efc3d19b74ee';
    const apiUrl = 'http://localhost:8000/api/v1/items/list/';

    // Define parameters
    const params = {
        category: '1',       
    };

    // Create a URL with parameters
    const urlWithParams = new URL(apiUrl);
    urlWithParams.search = new URLSearchParams(params).toString();

    // Make a GET request using fetch with parameters
    fetch(urlWithParams, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`,
        },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the data received from the API
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching data:', error);
        });
}
