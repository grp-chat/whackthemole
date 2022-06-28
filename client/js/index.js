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

const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');
const holes = [...document.querySelectorAll('.hole')];
const holeArr = [8, 2, 0, 4, 3, 5, 8, 7, 1, 6, 2, 7];
var i = 0;
const scoreEl = document.querySelector('.score span');
let score = 0;

function createChatDivs() {
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

    //SET P1 - P4
    

    if (message === "TCR: Game start" && nickname === "TCR") {
        sock.emit('gameStart');
    }
    

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

function run() {
    //const i = Math.floor(Math.random() * holes.length);
    const hole = holes[holeArr[i]];
    let timer = null;

    const img = document.createElement('img');
    const img2 = document.createElement('img');
    img.classList.add('mole');
    img2.classList.add('mole2');
    img.src = 'https://raw.githubusercontent.com/0shuvo0/whack-a-mole/main/assets/mole.png';
    img2.src = 'https://raw.githubusercontent.com/0shuvo0/whack-a-mole/main/assets/mole-whacked.png';
    img.addEventListener('click', () => {
        if (nickname === playerOne) {
            score += 10;
            scoreEl.textContent = score;
            //img.src = 'https://raw.githubusercontent.com/0shuvo0/whack-a-mole/main/assets/mole-whacked.png';
            hole.removeChild(img);
            hole.appendChild(img2);
            clearTimeout(timer);
            setTimeout(() => {
                hole.removeChild(img2);
                i++;
                run();
            }, 500);
        }
        if (nickname === playerTwo) {
            score += 10;
            scoreEl.textContent = score;
            //img.src = 'https://raw.githubusercontent.com/0shuvo0/whack-a-mole/main/assets/mole-whacked.png';
            hole.removeChild(img);
            hole.appendChild(img2);
            clearTimeout(timer);
            setTimeout(() => {
                hole.removeChild(img2);
                i++;
                run();
            }, 500);
        }

    });
    hole.appendChild(img);

    timer = setTimeout(() => {
        hole.removeChild(img);
        i++;
        run();
    }, 1500);

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
    cursor2.classList.add('active');
});
window.addEventListener('mouseup', () => {
    cursor2.classList.remove('active');
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
