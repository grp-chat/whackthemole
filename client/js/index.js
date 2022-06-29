const sock = io();


//---------------------------------------- USER PIN NUMBER PROMPT -----------------------------------------
const promptMsg = () => {
    var nick = prompt("Please enter your pin number:");
    while (nick.length == 0) {
        alert("Please enter your pin number!");
        nick = prompt("Please enter your pin number:");
    }


    if (nick === '8111188') {
        nickname = 'Aum';
        correctPin = true;
    } else if (nick === '1888811') {
        nickname = 'Nina'
        correctPin = true;
    } else if (nick === '9852') {
        nickname = 'LK'
        correctPin = true;
    } else if (nick === '9035') {
        nickname = 'LXR'
        correctPin = true;
    } else if (nick === '6588') {
        nickname = 'TJY'
        correctPin = true;
    } else if (nick === '1072') {
        nickname = 'JL'
        correctPin = true;
    } else if (nick === '3839') {
        nickname = 'SZF'
        correctPin = true;
    } else if (nick === '5691') {
        nickname = 'JV'
    } else if (nick === '4048') {
        nickname = 'H'
    } else if (nick === '88888') {
        nickname = 'TCR'
    } else if (nick === '3583') {
        nickname = 'JHA'
    } else if (nick === '5086') {
        nickname = 'CED'
    } else if (nick === '2105') {
        nickname = 'CJH'
    } else if (nick === '2167') {
        nickname = 'KX'
    } else if (nick === '7051') {
        nickname = 'KN'
    } else if (nick === '1198') {
        nickname = 'LOK'
    } else if (nick === '7089') {
        nickname = 'JW'
    } else if (nick === '3825') {
        nickname = 'JZ'
    } else if (nick === '1289') {
        nickname = 'JX'
    } else if (nick === '1399') {
        nickname = 'JAY'
    } else if (nick === '8579') {
        nickname = 'TWN'
    } else if (nick === '8828') {
        nickname = 'LJY'
    } else if (nick === '3191') {
        nickname = 'ELI'
    } else if (nick === '3307') {
        nickname = 'CUR'
    } else if (nick === '1529') {
        nickname = 'LSH'
    } else if (nick === '7385') {
        nickname = 'RYD'
    } else if (nick === '4162') {
        nickname = 'JT'
    } else if (nick === '6139') {
        nickname = 'KSY'
    } else {
        alert("Wrong pin number!");
        promptMsg();
    }
};

promptMsg();
sock.emit('newuser', nickname);
//---------------------------------------- USER PIN NUMBER PROMPT -----------------------------------------

var playerOne = "TCR";
var playerTwo = "LOK";

var stu1 = "LOK";
var stu2 = "CED";
var stu3 = "CJH";
var stu4 = "KX";
var stu5 = "KN";
var stu6 = "JT";
var stu7 = "KSY";
var stu8 = "TJY";
var stu9 = "TCR";

students = [stu1, stu2, stu3, stu4, stu5, stu6, stu7, stu8, stu9];

const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');
const div0 = document.getElementById("0");
const div1 = document.getElementById("1");
const div2 = document.getElementById("2");
const div3 = document.getElementById("3");
const div4 = document.getElementById("4");
const div5 = document.getElementById("5");
const div6 = document.getElementById("6");
const div7 = document.getElementById("7");
const div8 = document.getElementById("8");
//const holes = [...document.querySelectorAll('.hole')];
const holes = [div0, div1, div2, div3, div4, div5, div6, div7, div8];
const holeArr = [8, 2, 0, 4, 3, 5, 8, 7, 1, 6, 2, 7];
//const holeA = document.getElementById("2");

var i = -1;

var updHit = false;
var clicker = "";


const scoreEl = document.getElementById("sp1");
const scoreEl2 = document.getElementById("sp2");
let score = 0;
let score2 = 0;

function createChatDivs() {
    var chatDiv = document.createElement("div");
    //var chatDiv = document.getElementById("chatdiv");
    //chatDiv.setAttribute("id", "chatdiv");
    chatDiv.style.width = "450px";
    //chatDiv.style.width = "200px";
    chatDiv.style.height = "339px";
    //chatDiv.style.height = "50px";
    //chatDiv.style = "background:rgba(255, 255, 255, 0.5); color:black; overflow: auto;"
    chatDiv.style.background = "rgba(255, 255, 255, 0.5)";
    chatDiv.style.color = "black";
    chatDiv.style.overflow = "auto";
    chatDiv.style.overflowX = "hidden";
    chatDiv.style.float = "right";
    chatDiv.style.marginLeft = "2%";
    chatDiv.style.position = "fixed";
    chatDiv.style.top = "30px";
    chatDiv.style.right = "30px";


    document.body.append(chatDiv);

    var chatInput = document.createElement('input');
    chatInput.className = "form-control";
    chatInput.style.width = "338px";
    //chatInput.style.width = "100px";
    chatInput.style.height = "48px";
    chatInput.setAttribute("id", "chatinput");
    chatInput.setAttribute("type", "text");
    chatInput.style.display = "inline";
    chatDiv.appendChild(chatInput);

    var chatBtn = document.createElement('button');

    chatBtn.className = "btn btn-secondary";
    chatBtn.setAttribute("id", "chatBtn");
    chatBtn.innerHTML = "Send";

    chatDiv.appendChild(chatBtn);

    var div3 = document.createElement('div');
    div3.setAttribute("id", "div3");
    div3.style.width = '420px';
    div3.style.height = '280px'
    div3.style.color = 'black';
    div3.style.background = 'rgba(236, 236, 236, 0.5)';
    div3.style.overflowY = "auto";
    chatDiv.appendChild(div3);

    chatBtn.addEventListener('click', function () {
        var message = nickname + ': ';
        message += chatInput.value;
        sock.emit('chat-to-server', message);
        chatInput.value = '';
    });

    chatInput.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("chatBtn").click();
        }

    });

    return chatDiv;
}

function appendMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.innerText = message;
    var div3 = document.getElementById("div3");
    div3.append(messageDiv);
    div3.scrollTop = div3.scrollHeight;
    if (message === "TCR: RESET SERVER") {
        if (nickname != "TCR") {
            window.location.reload();
        } else {
            sock.emit('resetserverval');
        }
    }

    if (message === "TCR: G" && nickname === "TCR") {
        sock.emit('gameStart');
    }

    students.forEach(student => {
        if (message === "TCR: Set P1 = " + student) {
            playerOne = student
        }
        if (message === "TCR: Set P2 = " + student) {
            playerTwo = student
        }
    });
    


    if (message === "TCR: NUMBER OF PLAYERS" && nickname === "TCR") {
        //let text = "[" + connectedArr.toString() + "]";
        sock.emit('chat-to-server', numberOfPlayers);

    }

}

function mouseDragged(mouseX, mouseY, player) {

    var data = {
        x: mouseX,
        y: mouseY,
        player: player
    }
    sock.emit('mouseMove', data);
}

function hammerHit(player, e) {
    sock.emit('hammer', { player, e });
}

function moleHit2(player, score) {
    sock.emit('moleHit', { player, score });
}

function moleHit() {
    /* score += 10;
    scoreEl.textContent = score; */
    
    sock.emit('moleHit');
    sock.on('moleUpd', () => {
        //sock.emit('chat-to-server', nickname + " scores");
        //sock.emit('clicker', nickname);
        updHit = true;

    });

    if (nickname === playerOne) {
        sock.emit('score', playerOne);
    }
    if (nickname === playerTwo) {
        sock.emit('score', playerTwo);
    }

}

function update(updHit, hole, img, clicker) {
    //console.log("Update function runned")
    const testTxt = document.createElement('div');
    
    if (clicker === "" && nickname === playerTwo) {
        clicker = "+P1";
    }
    if (clicker === "" && nickname === playerOne) {
        clicker = "+P2";
    }
    testTxt.innerHTML = clicker;
    testTxt.style.fontSize = "2em";
    testTxt.style.position = "absolute";
    testTxt.style.top = "39%";

    try {
        if (updHit === true) {
            hole.removeChild(img);
            hole.appendChild(testTxt);
            //clearTimeout(timer);
            setTimeout(() => {
                hole.removeChild(testTxt);
            }, 300);
            updHit = false;
            imgRemoved = true;
        }
    }
    catch(err) {
        //console.log(err);
    }
    
    return updHit;
}

function removeMole(hole, img) {
    try {
        if (hole.hasChildNodes()) {
            hole.removeChild(img);
        }
    }
    catch(err) {
        //console.log(err);
    }
    
}

function run() {
    i++;
    if (i >= 12) {
        console.log("STOPPED");
        return;
    }
    const img = document.createElement('img');
    const img2 = document.createElement('img');
    img.classList.add('mole');
    img2.classList.add('mole2');
    img.src = 'https://raw.githubusercontent.com/0shuvo0/whack-a-mole/main/assets/mole.png';
    img2.src = 'https://raw.githubusercontent.com/0shuvo0/whack-a-mole/main/assets/mole-whacked.png';
    //const i = Math.floor(Math.random() * holes.length);
    var hole = holes[holeArr[i]];
    let timer = null;
    let timer2 = null;
    


    hole.appendChild(img);

    img.addEventListener('click', () => {
        moleHit();
        if (nickname === playerOne) {
            clicker = "+P1";
        }
        if (nickname === playerTwo) {
            clicker = "+P2";
        }
        
        {
            /* if (nickname === playerTwo) {
                score += 10;
                scoreEl.textContent = score;
                hole.removeChild(img);
                hole.appendChild(img2);
                clearTimeout(timer);
                setTimeout(() => {
                    hole.removeChild(img2);
                    i++;
                    run();
                }, 500);
            } */
        }

    });

    var interval = setInterval(() => {
        if (i >= 12) {
            clearInterval(interval);
        }
        updHit = update(updHit, hole, img, clicker);
    }, 300);

    setTimeout(() => {
        removeMole(hole, img);
    }, 1500);
    


    setTimeout(() => {
        run();
    }, 2000);






    /* if (updHit === true && nickname != playerOne) {
        console.log("did this run in client?")
        hole.removeChild(img);
        hole.appendChild(img2);
        clearTimeout(timer);
        setTimeout(() => {
            hole.removeChild(img2);
        }, 500);
        updHit = false;
        imgRemoved = true;
    } */





    /* timer = setTimeout(() => {
        console.log("no click update runned");
        hole.removeChild(img);
        imgRemoved = false;
    }, 1500); */

    /* timer2 = setTimeout(() => {
        run();
    }, 8500); */

    sock.on('newPosition', (data) => {
        //console.log("X is " + data.x + ", Y is " + data.y);
        if (data.player === "P1") {
            cursor.style.top = data.y;
            cursor.style.left = data.x;
        }
        if (data.player === "P2") {
            cursor2.style.top = data.y;
            cursor2.style.left = data.x;
        }
    });
}


createChatDivs();

//run();

window.addEventListener('mousemove', e => {
    if (nickname === playerOne) {
        //cursor.style.top = e.pageY + 'px';
        var pMouseY = e.pageY + 'px';
        //cursor.style.left = e.pageX + 'px';
        var pMouseX = e.pageX + 'px';
        mouseDragged(pMouseX, pMouseY, "P1");
    }
    if (nickname === playerTwo) {
        var pMouseY = e.pageY + 'px';
        var pMouseX = e.pageX + 'px';
        mouseDragged(pMouseX, pMouseY, "P2");
    }

});

window.addEventListener('mousedown', () => {
    if (nickname === playerOne) {
        hammerHit("P1", "down");
        //cursor.classList.add('active');
    }
    if (nickname === playerTwo) {
        hammerHit("P2", "down");
        //cursor2.classList.add('active');
    }

});
window.addEventListener('mouseup', () => {
    if (nickname === playerOne) {
        hammerHit("P1", "up");
        //cursor.classList.remove('active');
    }
    if (nickname === playerTwo) {
        hammerHit("P2", "up");
        //cursor2.classList.remove('active');
    }

});

sock.on('hammerTilt', (data) => {
    if (data.player === "P1" && data.e === "down") {
        cursor.classList.add('active');
    }
    if (data.player === "P1" && data.e === "up") {
        cursor.classList.remove('active');
    }
    if (data.player === "P2" && data.e === "down") {
        cursor2.classList.add('active');
    }
    if (data.player === "P2" && data.e === "up") {
        cursor2.classList.remove('active');
    }
});

sock.on('moleUpd', () => {
    updHit = true;

});

sock.on('sendScore', (data) => {
    if (data === playerOne) {
        score += 10;
        scoreEl.textContent = score;
        clicker = "+P1"
    }
    if (data === playerTwo) {
        score2 += 10;
        scoreEl2.textContent = score2;
        clicker = "+P2"
    }
});





//---------------------------------------- SOCKETS SOCKETS SOCKETS -----------------------------------------
/* sock.on('findJudge', data => {
    if (nickname === data.judge) {
        assignment = data.stacker;
        stackerH1.innerHTML = "Stacker: " + assignment;
        let text = assignment + " assigned to " + nickname + " successfully";
        sock.emit('chat-to-server', text);
    }
}); */
sock.on('chat-to-clients', data => {
    appendMessage(data);
});

sock.on('startGame', () => {
    i = -1;
    run();
});







//---------------------------------------- CHAT CHAT CHAT CHAT CHAT -----------------------------------------

/* {
var chatDiv = document.createElement("div");
//var chatDiv = document.getElementById("chatdiv");
//chatDiv.setAttribute("id", "chatdiv");
chatDiv.style.width = "450px";
chatDiv.style.height = "339px";
//chatDiv.style = "background:rgba(255, 255, 255, 0.5); color:black; overflow: auto;"
chatDiv.style.background = "rgba(255, 255, 255, 0.5)";
chatDiv.style.color = "black";
chatDiv.style.overflow = "auto";
chatDiv.style.overflowX = "hidden";
chatDiv.style.float = "right";
chatDiv.style.marginLeft = "2%";
chatDiv.style.position = "fixed";
chatDiv.style.top = "30px";
chatDiv.style.right = "30px";


document.body.append(chatDiv);

var chatInput = document.createElement('input');
chatInput.className = "form-control";
chatInput.style.width = "338px";
chatInput.style.height = "48px";
chatInput.setAttribute("id", "chatinput");
chatInput.setAttribute("type", "text");
chatInput.style.display = "inline";
chatDiv.appendChild(chatInput);

var chatBtn = document.createElement('button');

chatBtn.className = "btn btn-secondary";
chatBtn.setAttribute("id", "chatBtn");
chatBtn.innerHTML = "Send";

chatDiv.appendChild(chatBtn);

var div3 = document.createElement('div');
div3.setAttribute("id", "messagediv");
div3.style.width = '420px';
div3.style.height = '280px'
div3.style.color = 'black';
div3.style.background = 'rgba(236, 236, 236, 0.5)';
div3.setAttribute("id", "chatdiv");
div3.style.overflowY = "auto";
chatDiv.appendChild(div3);

chatBtn.addEventListener('click', function () {
    var message = nickname + ': ';
    message += chatInput.value;
    sock.emit('chat-to-server', message);
    chatInput.value = '';
});

chatInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("chatBtn").click();
    }

});

window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY + 200) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        chatDiv.style.top = "300px";
    } else {
        chatDiv.style.top = "30px";
    }
};

} */
