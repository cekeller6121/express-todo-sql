const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const models = require('./models');

const app = express();

app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// const todos = [
// ];

app.get('/', function (req, res) {
res.render('todo', {});
});

app.post('/', function(req, res) {
  const getToDo = models.todolist.build({
    item: req.body.input,
    completed: false
  }).save().then(function(todo) {
    res.redirect('/')
  })
  console.log(req.body.input);
});

app.listen(3000, function () {
  console.log('Successfully started todo list app');
});
