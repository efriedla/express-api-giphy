var express = require('express');
var request = require('request');


var app = express();

app.use(express.static(__dirname + '/static'));

app.set('view engine','ejs');
// var ejsLayouts= require("express-ejs-layouts");
// app.use(ejsLayouts);

app.get('/', function(req, res){
  res.sendFile('./index.html');
})


app.get('/search/:foo', function(req, res) {
  var url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&';

  request({
    url: url,
    qs: {
      limit: 20,
      api_key: 'dc6zaTOxFJmzC',
      q: req.params.foo
    },
    json: true
  }, function(error, response, body) {

    res.render('index', {data: body.data});
  });
});



app.listen(3000);
