import './bootstrap';

window.Echo.channel('trades')
.listen('NewTrade', (e) => {
    // document.getElementById('latest_trade_user').innerText = e.trade;
    console.log(e.trade);
    $("tbody").append("<tr><td>"+e.trade+"</td><td><a href=''>Delete</a></td></tr>");
})

window.Echo.channel('trades')
.listen('NewEvent', (e) => {
    $("#hatem").append("<tr><td>"+e.NewEvent+"</td><td><a href=''>Delete</a></td></tr>");
})

var roomId=document.getElementById('chat_value').value;
console.log(`chats.${roomId}`);
window.Echo.join(`chats.${roomId}`)
    .here((users) => {
        console.log('users');
    })
    .joining((user) => {
        console.log(user.name+'joining');
    })
    .leaving((user) => {
        console.log(user.name+'leaving');
    })
// chat
