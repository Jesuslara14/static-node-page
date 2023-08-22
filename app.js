const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3003;

const homePage = fs.readFileSync('home.html');
const tourPage = fs.readFileSync('tour.html');
const contactPage = fs.readFileSync('contact.html');

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    console.log(req.url);
    if(req.url === '/'){
        res.statusCode = 200;
        res.write(homePage);
    }else if(req.url === '/tour'){
        res.statusCode = 200;
        res.write(tourPage);
    }else if(req.url === '/contact'){
        res.statusCode = 200;
        res.write(contactPage);
    }else if(req.url.match('\.png$')){
        res.end(fs.readFileSync(req.url.replace('/', '')));
    }else if(req.url.match('/favicon.ico')){
        res.end(fs.readFileSync('favicon.ico'));
    }
    res.end();
});

server.listen(port, hostname, () => {
    console.log("Server is now running...");
});