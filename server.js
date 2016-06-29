var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var logger = require('morgan');

app.use(logger('dev'));
app.use(express.static("public"));
app.use("/public", express.static(__dirname + "/public"));
app.use("/bower_components", express.static(__dirname + "/bower_components"));

app.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/public/index.html');
});

app.listen(PORT, function(req, res) {
  console.log('Listening on PORT: ' + PORT);
});
