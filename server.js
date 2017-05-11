const express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

//this redirects https to http.
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});
//static exposes the public directory to the express web server.
app.use(express.static('public'));

//app.listen starts the server.  two arguements- port & function that is called once server is up.
app.listen(PORT, function () {
  console.log(`Express server is up on port ${PORT}.``);
});
