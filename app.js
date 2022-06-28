const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const PORT = process.env.PORT || 3000;

const app = express();

const clientPath = `${__dirname}/client`;
console.log(`Serving static files from path ${clientPath}`);

app.use(express.static(clientPath));
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT);
console.log("Server listening at " + PORT);


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

function Stacker(id, routine, warm1, warm2, try1, try2, try3, best) {
    this.id = id;
    this.routine = routine;
    this.warm1 = warm1;
    this.warm2 = warm2;
    this.try1 = try1;
    this.try2 = try2;
    this.try3 = try3;
    this.best = best;
}






//var stacker11 = new Stacker("KSY", "333", 0, 0, 0, 0, 0, 0);


//var dProperty = ["warm1", "warm2", "try1", "try2", "try3"];


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------



io.on('connection', (sock) => {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    /* sock.on('newuser', (data) => {
        
        sock.id = data;
        var sysmessage = sock.id + " connected";
        io.emit("updateonconnect", {objects});
        io.emit('chat-to-clients', sysmessage);
        //console.log(objects);
        connectedUsers.push(sock.id);
        io.emit('sendconnected', connectedUsers);

    });

    sock.on('disconnect', () => {

        var sysmessage = sock.id + " disconnected";
        io.emit('chat-to-clients', sysmessage);
        const index = connectedUsers.indexOf(sock.id);
        if (index > -1) {
            connectedUsers.splice(index, 1); // 2nd parameter means remove one item only
        }
        io.emit('sendconnected', connectedUsers);

    }); */
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS WINS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS CHALLENGES ~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    sock.on('chat-to-server', (data) => {
        io.emit('chat-to-clients', data);
    });

    sock.on('gameStart', () => {
        io.emit('startGame');
    });


//############################################################################################################


    sock.on('updatehighlight', (data) => {
        var eleId = data;
        highlightedBox = !highlightedBox;
        
        io.emit('highlight', {eleId, highlightedBox});
        
    });

    sock.on('mouseMove', (data) => {
        //console.log("X is " + data.x + " and Y is " + data.y);
        var x = data.x;
        var y = data.y;
        var player = data.player;
        io.emit('newPosition', { x, y, player });
    });

    sock.on('hammer', (data) => {
        var player = data.player;
        var e = data.e;
        io.emit('hammerTilt', { player,e });
    });

    

    



});




setInterval(function () {
    /* objUsers.forEach((obj) => {
        if (obj.inOrOut === true) {
            io.emit("transmituser", obj.id);
        }
    });

    objUsers.forEach((obj) => {
        if (obj.inOrOut === false) {
            io.emit("userdisconnect", obj.id);
        }
    });
 */

    //dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

    /* io.emit('updateallwins', { aumWins, ninaWins, LKWins, LXRWins, JHAWins, SZFWins, JLWins, TJYWins });
    io.emit('updateallchas', { aumChas, ninaChas, LKChas, LXRChas, JHAChas, SZFChas, JLChas, TJYChas }); */

    /* objUsers.forEach((obj) => {
        io.emit("updateallresults", obj);

    }); */


    /* io.emit('updateAA', aumWins);
    io.emit('updateNN', ninaWins); */

    /* io.emit('postResult', { allStackers, stacker11 });
    io.emit('chgH1Clients', theEvent); */

}, 1000);


