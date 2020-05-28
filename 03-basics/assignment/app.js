const http = require('http');
const port = 3000;

const server = http.createServer((req,res) => {
	const url = req.url;
	const method = req.method;
	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Assignment 1</title></head>');
		res.write(
		  '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
		);
		res.write('</html>');
		return res.end();
	}
	if (url === '/users') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<html>');
		res.write('<head><title>Assignment 1</title></head>');
		res.write(
		  '<body><ul>jamal</ul><ul>akayla</ul>></body>');
		res.write('</html>');
		return res.end();
	}
	if (url === '/create-user') {
		const body = [];
		req.on('data', chunk => {
			body.push(chunk);
			console.log(chunk);
		});
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const message =parsedBody.split('=')[1];
			console.log(parsedBody);
		});
		res.statusCode = 302;
		res.setHeader('Location', '/');
		return res.end();
	};


});

server.listen(port);
