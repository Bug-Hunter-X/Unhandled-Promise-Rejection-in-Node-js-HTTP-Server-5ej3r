const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  const data = fetchData();

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(data);
});

function fetchData() {
  // Simulate an error in a asynchronous operation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random error
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        reject(new Error('Failed to fetch data'));
      } else {
        resolve('Data fetched successfully');
      }
    }, 1000);
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});