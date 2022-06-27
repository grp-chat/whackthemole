const sock = io();


//---------------------------------------- USER PIN NUMBER PROMPT -----------------------------------------
/* const promptMsg = () => {
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
}; */

/* promptMsg();
sock.emit('newuser', nickname); */
//---------------------------------------- USER PIN NUMBER PROMPT -----------------------------------------









//---------------------------------------- SOCKETS SOCKETS SOCKETS -----------------------------------------
/* sock.on('findJudge', data => {
    if (nickname === data.judge) {
        assignment = data.stacker;
        stackerH1.innerHTML = "Stacker: " + assignment;
        let text = assignment + " assigned to " + nickname + " successfully";
        sock.emit('chat-to-server', text);
    }
}); */






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
