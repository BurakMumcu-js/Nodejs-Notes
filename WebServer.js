const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            id: 1,
            name: 'Sir Albert Einstein'
        }));
    } else if (req.url === '/messages') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li> Hello Developer </li>');
        res.write('<li> Hello Second Developer </li>');
        res.write('</ul></body></html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
