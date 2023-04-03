const config = require('../../config');
const app = config.app
const http = config.http

http.listen(3000, function() {
   console.log('listening on port :3000');
});