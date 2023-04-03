module.exports = function(socket){
    require('./greeter')(socket)
    require('./user_activities')(socket)
}