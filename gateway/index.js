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

app.post('/control', function(req, res) {
  const { command, data } = req.body;

  switch(command) {
    case 'volume':
      commands.volume(data.value)
        .then(output => res.send(output));
      break;
    default:
      res.status(400).send('unknown command');
      break;
  }
});

app.listen(3333, () => console.info('Server started'));
