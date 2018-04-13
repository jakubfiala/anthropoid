const express = require('express');
const nunjucks = require('express-nunjucks');
const app = express();

app.set('views', './views')
nunjucks(app);

app.get('/', function(req, res) {
  return res.render('index');
});

app.listen(3333, () => console.info('Server started'));
