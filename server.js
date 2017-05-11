const express = require('express');

var app = express();

//static exposes the public directory to the express web server.
app.use(express.static('public'));

//app.listen starts the server.  two arguements- port & function that is called once server is up.
app.listen(3000, function () {
  console.log('Express server is up on port 3000.');
});
