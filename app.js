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
    sock.on('newuser', (data) => {
        
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

    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS WINS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS CHALLENGES ~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('submit', (data) => {

        var index = users.indexOf(data.nickname);
        objUsers[index].results[roundNum - 1] = data.result;
        objUsers[index].penalties[roundNum - 1] = data.penalties;
        console.log("The result received on server is " + objUsers[index].results[roundNum - 1] + " for user " + objUsers[index].id);
        io.emit('reshistory', objUsers[index]);

    });

    sock.on('editresult', (data) => {

        var index = users.indexOf(data.student);
        objUsers[index].results[data.round - 1] = data.result;
        objUsers[index].penalties[data.round - 1] = data.penalties;

    });

    sock.on('chat-to-server', (data) => {
        io.emit('chat-to-clients', data);
    });

    sock.on('challengethisuser', (data) => {
        io.emit('appendchallenger', data);
    });

    sock.on('challenge', (data) => {
        var userId = data;
        io.emit('sendchallenge', userId);

    });

    sock.on('nextround', () => {
        roundNum++;
        io.emit('refreshall', roundNum);
    });

//############################################################################################################

    sock.on('updatename', (data) => {
        io.emit('clientupdatename', data);
        for (var i = 1; i <= 29; i++) {
            if (objects[i].player === data.id) {
                objects[i].pcontent = data.plyr;
                console.log("Record saved: " + objects[i].pcontent + " at record: " + objects[i].player);
            }
        }
        
    });

    sock.on('updatename2', (data) => {
        io.emit('clientupdatename2', data);
        for (var i = 1; i <= 29; i++) {
            if (objects[i].player === data.id2) {
                objects[i].pcontent = data.plyr;
                console.log("Record saved: " + objects[i].pcontent + " at record: " + objects[i].player);
            }
        }
    });

    sock.on('updateresult', (data) => {
        io.emit('clientupdateresult', data);
        for (var i = 1; i <= 29; i++) {
            if (objects[i].result === data.id) {
                objects[i].rcontent = data.notInt;
                console.log("Record saved: " + objects[i].rcontent + " at record: " + objects[i].result);
            }
        }
    });

    sock.on('updatetime', (data) => {
        io.emit('clientupdatetime', data);
        for (var i = 1; i <= 29; i++) {
            if (objects[i].time === data.input) {
                objects[i].tcontent = data.keyin;
                console.log("Record saved: " + objects[i].tcontent + " at record: " + objects[i].time);
            }
        }

    });

    sock.on('updatewincon', (data) => {
        io.emit('clientupdatewincon', data);
        winCon = data;
    });

    sock.on('resetserverval', () => {
        console.log("Server reseted")
        objects = {};
        connectedUsers = [];
        for (var i = 1; i <= 28; i++) {
            objects[i] = new Record(pIdArr[i-1], "--", tIdArr[i-1], "", rIdArr[i-1], 0);
        }
    });

    sock.on('updatehighlight', (data) => {
        var eleId = data;
        highlightedBox = !highlightedBox;
        
        io.emit('highlight', {eleId, highlightedBox});
        
    });

    sock.on('updatehighlight2', (data) => {
        var eleId = data;
        highlightedBox = !highlightedBox;

        io.emit('highlight2', {eleId, highlightedBox});
        
    });

    sock.on('reupdateobjects', () => {
        io.emit("updateonconnect", {objects});
        console.log("reupdate objects runned");
    });

    sock.on('updStacker', (data) => {
        allStackers.forEach((stacker) => {
            if (stacker.id === data.stacker) {
                dProperty.forEach((property) => {
                    if (data.whichTry === property) {
                        stacker[property] = parseFloat(data.result);
                        /* console.log(stacker.try1);
                        console.log(property); */
                    }
                    if (stacker.best === 0 && property != "warm1" && property != "warm2") {
                        stacker.best = stacker[property];
                    } else {
                        if (stacker.best > stacker[property] && stacker[property] != 0 && property != "warm1" && property != "warm2") {
                            stacker.best = stacker[property];
                        } else {};
                    }

                });

                if (stacker.try1 != 0 && stacker.try2 != 0 && stacker.try3 != 0) {
                    let arr = [];
                    arr.push(stacker.try1);
                    arr.push(stacker.try2);
                    arr.push(stacker.try3);

                    arr.sort(function(a,b) {
                        return a - b;
                    });

                    stacker.best = arr[0];
                    
                }
            }
        });

        if (stacker11.id === data.stacker) {
            dProperty.forEach((property) => {
                if (data.whichTry === property) {
                    stacker11[property] = parseFloat(data.result);
                    /* console.log(stacker.try1);
                    console.log(property); */
                }
                if (stacker11.best === 0 && property != "warm1" && property != "warm2") {
                    stacker11.best = stacker11[property];
                } else {
                    if (stacker11.best > stacker11[property] && stacker11[property] != 0 && property != "warm1" && property != "warm2") {
                        stacker11.best = stacker11[property];
                    } else {};
                }

            });

            if (stacker11.try1 != 0 && stacker11.try2 != 0 && stacker11.try3 != 0) {
                let arr = [];
                arr.push(stacker11.try1);
                arr.push(stacker11.try2);
                arr.push(stacker11.try3);

                arr.sort(function(a,b) {
                    return a - b;
                });

                stacker11.best = arr[0];
                
            }
        }

        
        allStackers.sort(function(a,b) {

            if (a.best === 0) return 1;        
            if (b.best === 0) return -1; 
            return a.best - b.best;
            
        });
    });

    sock.on('manualAssign', (data) => {
        var stacker = data.student2;
        var judge = data.student;
        io.emit('findJudge', { judge, stacker});
    });

    sock.on('changeEvent', (data) => {
        theEvent = data;
        io.emit('chgEventClients', theEvent);
    });

    sock.on('resetResults', () => {
        allStackers.forEach((stacker) => {
            stacker.try1 = 0;
            stacker.try2 = 0;
            stacker.try3 = 0;
            stacker.best = 0;
        })

        stacker11.try1 = 0;
        stacker11.try2 = 0;
        stacker11.try3 = 0;
        stacker11.best = 0;
    });

    sock.on('checkStu', (data) => {
        var checkStu = data;
        io.emit('checkStuClients', checkStu);
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


