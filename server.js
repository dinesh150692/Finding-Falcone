// Get dependencies
var express = require('express'),
	path = require('path'),
	http = require('http'),
	fs = require("fs");
var app = express();

// Serve static assets - Point static path to site
const oneMonth = 86400000 * 30; // 30 days in milliseconds
const assetMaxAge = oneMonth;
const basePath = '/build/';
// To serve index.html file
const indexPath = '/index.html';

const indexContent = fs.readFileSync(path.join(__dirname, basePath, indexPath));
app.use(express.static(path.join(__dirname, basePath), {maxAge: assetMaxAge, redirect: false}));

module.exports = app;

app.get('/', (req, res) => {
	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	res.send(indexContent);
});

// Catch all other routes and serve 404 (Page not found) Screen
app.get('*', (req, res) => {
	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	res.send(indexContent);
});

// Get port from environment and store in Express
const port = '8081';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port
server.listen(port, () => console.log(`API running on port:${port}`));
