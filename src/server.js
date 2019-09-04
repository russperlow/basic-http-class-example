const http = require('http');
const fs = require('fs'); // FS is a built in Node library for File System

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const index = fs.readFileSync(`${__dirname}/../client/client.html`); // Normally would not load Synchronously on a server. Async would be normal

const onRequest = (request, response) => {
    console.log(request.url); // URL the user is trying to goto IE russperlow.com/fantasy.jpg
    response.writeHead(200, {'Content-Type': 'text/html'}); // Telling them its successful (even if it fails) & a content type of HTML
    response.write(index); // Take HTML file, turn into string, read as text/html and return it
    response.end(); // We have nothing to send back. We have an HTML page but no way to access it
};

http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1:${port}`);