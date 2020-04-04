let url = 'https://jsonplaceholder.typicode.com/posts/',
data = { username: 'example'};

fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type':'application/json'
    }
})
  .then(response => response.json())
  .then(json => console.log('Success', json))
  .catch(error => console.error('Error',error))