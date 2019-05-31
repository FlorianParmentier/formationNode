//______________Basic server________________

let http = require('http');

let server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Contant-type': 'text/html' });
    res.end('<button>Test</button>');
});
server.listen(8000);

//________________Basic routing_______________________

// let http = require('http');
// let url = require('url');
// let querystring = require('querystring');

// let server = http.createServer(function(req, res) {
//     let parsedUrl = url.parse(req.url);
//     console.log(parsedUrl.pathname);
//     if (parsedUrl.pathname === '/') {
//         let params = querystring.parse(parsedUrl.query);
//         res.writeHead(200, { 'Contant-type': 'text/html' });
//         res.end(params.nom + ' ' + params.prenom);
//     } else if (parsedUrl.pathname === '/button') {
//         let params = querystring.parse(parsedUrl.query);
//         res.writeHead(200, { 'Contant-type': 'text/html' });
//         res.end(
//             '<button>' +
//                 params.nom +
//                 '</button> <button>' +
//                 params.prenom +
//                 '</button>'
//         );
//     }
// });
// server.listen(8000);

//__________________Events____________________________

// let http = require('http');
// let EventEmitter = require('events').EventEmitter;

// let server = http.createServer(function(req, res) {
//     res.writeHead(200, { 'Contant-type': 'text/html' });
//     res.end('<button>Test</button>');
// });

// server.on('close', () => {
//     console.log('The cake is a lie');
// });
// server.listen(8000);

// let cyril = new EventEmitter();

// cyril.on('alternant', function(message) {
//     console.log(message);
// });

// cyril.emit('alternant', 'stagiaire');

// server.close();
