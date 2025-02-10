const fs = require('fs');
// TODO: Require the http module
const http = require('http');

// TODO: Create a server
const server = http.createServer((request, response) => {
  // Create URL object
  const url = new URL(request.url, `http://${request.headers.host}`);

  switch (url.pathname) {
    case '/':
      if (request.method === 'GET') {
        // Get the 'name' query parameter
        const name = url.searchParams.get('name');
        console.log(`Name query parameter: ${name}`);
        
        // Write response header
        response.writeHead(200, { 'Content-Type': 'text/html' });
        
        // Stream and serve index.html
        fs.createReadStream('index.html').pipe(response);
      } else if (request.method === 'POST') {
        // Handle POST request
        handlePostResponse(request, response);
      }
      break;

    default:
      // Write response header for 404 Not Found
      response.writeHead(404, { 'Content-Type': 'text/html' });
      
      // Stream and serve 404.html
      fs.createReadStream('404.html').pipe(response);
      break;
  }
});

function handlePostResponse(request, response) {
  request.setEncoding('utf8');

  let body = '';
  request.on('data', (chunk) => {
    body += chunk;
  });

  request.on('end', () => {
    // Defining the game choices
    const choices = ['rock', 'paper', 'scissors'];
    // Server randomly chooses an option
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    const choice = body.trim(); // The player's choice from the request body

    let message;
 
    if (choice === randomChoice) {
      message = `Oh, it's a tie! I picked ${randomChoice} too. Want to try again?`;
    } else if (
      (choice === 'rock' && randomChoice === 'paper') ||
      (choice === 'paper' && randomChoice === 'scissors') ||
      (choice === 'scissors' && randomChoice === 'rock')
    ) {
      message = `Oops, you lost! I chose ${randomChoice}, but don't worry, you'll win next time!`;
    } else {
      message = `Wow! You won! I chose ${randomChoice}, but your choice was the best. Nice job!`;
    }

    // Sending the final response to the player
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(`You selected ${choice}. ${message}`);
  });
}

server.listen(4001, () => {
  console.log('Server is running on http://localhost:4001');
});