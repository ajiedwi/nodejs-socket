module.exports = function(socket){
    socket.on('user-online', function (payload) {
        /**
         * example payload :
         * {
         *      "username": "some@email.com"
         * }
         */
        const payloadJson = JSON.parse(payload)
        console.log(payloadJson.username+" is online with socket id "+socket.id); // todo : save socket id to user and change user-online to online
    });
    socket.on('user-offline', function (payload) {
        /**
         * example payload :
         * {
         *      "username": "some@email.com"
         * }
         */
        const payloadJson = JSON.parse(payload)
        console.log(payloadJson.username+" is offline with socket id "+socket.id); // todo : find user with socket id or username and change user-online to offline
    });
    socket.on("disconnect", function(){
        console.log("id-disconnect "+socket.id) // todo : find user-online with socket id, delete and change user status to offline
    })
}