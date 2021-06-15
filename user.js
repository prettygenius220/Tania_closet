greetUser();
document.getElementById("buttonT").style.display='none';
function greetUser() {
    var userName = prompt("What is your name?  Enter your name here");
    if (userName) {
        alert("You are Welcome! It is so good to have you here " + userName + "!" +
        " Click on the image to begin...");
    }

}

function happyNow() {
    document.getElementById("unhappy").src = "./images/happy_doll.jpg";
    document.getElementById("buttonT").style.display='block';
}