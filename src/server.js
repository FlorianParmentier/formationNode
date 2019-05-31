let http = require('http');

let server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Contant-type': 'text/html' });
    res.end('<button>Test</button>');
});
server.listen(8000);
console.log(server.name + ' is listening at ' + server.port);

// let http = require('http');
// let url = require('url');
// let querystring = require('querystring');

// let server = http.createServer(function(req, res) {
//     let params = querystring.parse(url.parse(req.url).query);
//     res.writeHead(200, { 'Contant-type': 'text/html' });
//     res.end(params.nom + ' ' + params.prenom);
// });
// server.listen(8000);
// console.log(server.name + ' is listening at ' + server.port);
