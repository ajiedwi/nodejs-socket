const greeterListener = require('./greeter')

module.exports = function(socket){
    greeterListener(socket)
}