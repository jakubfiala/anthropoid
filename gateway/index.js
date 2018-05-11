const express = require('express');
const nunjucks = require('express-nunjucks');
const app = express();
const body = require('body-parser');

const commands = require('./commands.js');

app.set('views', './views')
nunjucks(app);

app.use(body.json());

app.get('/', function(req, res) {
  return res.render('index');
});

app.get('/control/volume', function(req, res) {
  commands
    .getVolume()
    .then(output => res.send(output));
});

app.post('/control/volume', function(req, res) {
  const value = req.body.value;

  commands
    .setVolume(value)
    .then(output => res.send(output));
});

app.listen(3333, () => console.info('Server started'));
