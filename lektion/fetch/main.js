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

  const getResorce = async (url) => {
      const res = await fetch(url);
      if(!res.ok){
          throw new Error(`Could not fey ${url} status ${res.status}`);
      }
    const some = await res.json();

            return some;
  }

  getResorce('https://jsonplaceholder.typicode.com/todos/10000')
  .then(res => console.log(res));