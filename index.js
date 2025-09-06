const http = require('http');

const PORT = 3000;

const server =  http.createServer((req, res) => {

    console.log("Request recevied");
    console.log(req);
    console.log(res);
    if(req.url === '/') {
        res.write('home');
    }
    else if(req.url === '/ping') {
        res.write('pong');
    }
    else {
        res.write("Hello World");
    }
    
    res.end();
});

server.listen(PORT, () => {
    console.log("Server listening on: http://localhost:",PORT);
})