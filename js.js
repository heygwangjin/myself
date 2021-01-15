function myFunction(){
    var who = document.getElementById("whoru").value;
    if(who !== ""){
        document.getElementById("hi").style.display = 'block';
        document.getElementById("hi").innerHTML = "Hello "+who+"!";
        document.getElementById("gwangjin").src= "images/welcome.png"
    }
    else{
        document.getElementById("hi").style.display = 'block';
        document.getElementById("hi").innerHTML = "What's your name?";
        document.getElementById("gwangjin").src= "images/gwangjin.png"
    }
}
