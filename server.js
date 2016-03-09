const express = require('express'),
      multiparty = require('multiparty'),
      server = express(),
      form = new multiparty.Form();

server.use(express.static('./public'));

server.post('/api/users', (request, response) => {
  form.parse(request, function(err, fields, files) {
    console.log('Got fields', JSON.stringify(fields));
    response.end()
  });
});

server.listen(3000);
