const config = require('../config');
const app = config.app
const http = config.http

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/view/index.html');
});


http.listen(3000, function() {
   console.log('listening on port :3000');
});