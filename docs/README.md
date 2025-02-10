# Rock-Paper-Scissors HTTP Server

## Overview
 This project uses Node.js to create an HTTP server for an online Rock-Paper-Scissors game, where users play against the server. It handles GET and POST requests, serving HTML files and processing game moves. It uses the built-in `http` and `fs` modules to handle requests, serve HTML files, and process user input. The game responds to **GET** and **POST** requests to determine the winner.

## Features
- Built with **Node.js** using core modules: `http`, `fs`.
- Handles **GET** requests to serve HTML files.
- Handles **POST** requests to play Rock-Paper-Scissors.
- Randomly generates server moves and determines the winner.
- Basic request routing and query parameter extraction.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/rock-paper-scissors-http-server.git
   cd rock-paper-scissors-http-server

2. Ensure you have Node.js installed.

3. Run the server:
   ```sh
   node app.js

4. The server will be running on http://localhost:4001.

### Troubleshooting
- If you encounter any issues, ensure that your Node.js version is up to date.
- If the server is not responding, check if there is another process running on port 4001. You can change the port in the app.js file if needed.

## License
 This project is licensed under the Apache 2.0 License - see the LICENSE file for details.
