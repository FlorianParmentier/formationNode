let express = require('express');

let app = express();
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Classic route
app.get('/', (req, res) => {
    res.setHeader('Content-type', 'text/plain');
    res.send('Website home');
});

app.get('/button', (req, res) => {
    res.setHeader('Content-type', 'text/plain');
    res.send('Website button');
});

//Dynamic route
app.get('/user/:userId/mail', (req, res) => {
    let userId = req.params.userId;
    res.setHeader('Content-type', 'text/plain');
    res.send(
        'User with id ' +
            userId +
            ' got the following email address : ' +
            userId +
            '@daveo.fr'
    );
});

app.get('/intern/:name', (req, res) => {
    let name = req.params.name;
    res.render('intern.ejs', { intern: name });
});

app.use((req, res, next) => {
    res.setHeader('Content-type', 'text/plain');
    res.status(404).send('Not found !');
});

app.listen(8000);
