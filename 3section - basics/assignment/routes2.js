const requestHandler = (req, res) => {
	const url = res.url
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
//	if (url === '/users') {
//		res.setHeader('Content-Type', 'text/html');
//		res.write('<html>');
//		res.write('<head><title>users</title></head>');
//		res.write('<body><h1>users</h1></body>');
//		res.write('</html>');
//		return res.end();
//	}
//	res.setHeader('Content-Type', 'text/html');
//	res.write('<html>');
//	res.write('<head><title>users</head></title>');
//	res.write('<body><h1>users</body></h1>');
//	res.write('</html>');
//	res.end();

};

module.exports = requestHandler;
