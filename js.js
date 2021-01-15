function myFunction(){
    var who = document.getElementById("whoru").value;
    if(who !== ""){
        document.getElementById("hi").style.display = 'block';
        document.getElementById("hi").innerHTML = "Hello "+who+"!";
    }
    else{
        document.getElementById("hi").style.display = 'block';
        document.getElementById("hi").innerHTML = "What's your name?";
    }
}
