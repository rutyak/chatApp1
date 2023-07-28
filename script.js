
let username = '';

const socket = io();

document.getElementById('btn').addEventListener('click',(e)=>{
    e.preventDefault();
    username = document.getElementById('username').value;
    console.log(username);
    if(username.trim()!==''){
        document.querySelector('.form-username').style.display = "none";
        document.querySelector('.char-container').style.display = "block";
    }
})

document.getElementById('send-btn').addEventListener('click', (e)=>{
    e.preventDefault();

    const data = {
        username: username,
        message: document.getElementById('message-input').value
    }

    socket.emit('message', data);

    addMessage(data);
})

function addMessage(data){
    var msgDiv = document.createElement('div');
    msgDiv.innerText = `${data.username}: ${data.message}`;
    msgDiv.setAttribute('class', 'message sent');
    document.getElementById('message-container').appendChild(msgDiv);
    document.getElementById('message-input').value = '';
}