const http = require('http');

const PORT = 3000;

const friends = [
    {
        id:0,
        name:'Burak Mumcu'
    },
    {
        id:1,
        name:'Diego Armando Maradona'
    },
    {
        id:2,
        name:'Adolf Hitler'
    }
]

const server = http.createServer((req, res) => {
    const items = req.url.split('/');
    console.log(items)
    if (items[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if(items.length === 3) res.end(JSON.stringify(friends[items[2]]));
        else res.end(JSON.stringify(friends))
    } else if (items[1] === '/messages') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><ul>');
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
