const { createServer } = require('node:http');
const { URL } = require('node:url');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');

    try {
        const url = new URL(request.url, `http://${hostname}:${port}`);

        if (request.method === 'GET' && url.pathname === '/hello') {
            const queryParams = Object.fromEntries(url.searchParams.entries());

            response.statusCode = 200;
            response.end(JSON.stringify({ message: `Hello ${queryParams.name || 'stranger'}` }));
        } else if (request.method === 'POST' && url.pathname === '/goodbye') {
            let body = '';

            request.on('data', chunk => {
                body += chunk.toString();
            });

            request.on('end', () => {
                try {
                    const parsedBody = body.length > 0 ? JSON.parse(body) : {};

                    response.statusCode = 200;
                    response.end(JSON.stringify({ message: `Goodbye ${parsedBody.name || 'stranger'}` }));
                } catch (error) {
                    response.statusCode = 400;
                    response.end(JSON.stringify({ error: "Invalid JSON body" }));
                }
            });

        } else {
            response.statusCode = 404;
            response.end(JSON.stringify({ error: 'Route not found' }));
        }
    } catch (error) {
        console.error(error)
        response.statusCode = 500;
        response.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
