function handleInput() {
    var name = prompt("Enter your name: ");
    var hobby = prompt("Enter your favourite hobby: ");
    var food = prompt("Enter your favourite food: ");
    var msg = `Your name is ${name}, your favourite hobby is ${hobby}, and your favourite food is ${food}.`;
    document.getElementById("opArea").innerHTML = msg;    
}