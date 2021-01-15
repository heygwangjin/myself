function myFunction(){
    var who = document.getElementById("whoru").value;
    if(who !== ""){
        document.getElementById("hi").style.display = 'block';
        document.getElementById("hi").innerHTML = "Hello "+who+"!";
        document.getElementById("gwangjin").src= "images/welcome.png"
        document.getElementById("project").style.display = 'block';
        document.getElementById("project").innerHTML = who + ", can I show you my project?";
        document.getElementById("yesno").style.display = 'block';
        document.getElementsByClassName("checkbox")[0].style.display = 'inline';
        document.getElementsByClassName("checkbox")[1].style.display = 'inline';
        document.getElementById("chcolor2").style.display = 'block';
        document.getElementById("chcolor").style.display = 'inline';
    }
    else{
        document.getElementById("hi").style.display = 'block';
        document.getElementById("hi").innerHTML = "What's your name?";
        document.getElementById("gwangjin").src= "images/gwangjin.png"
    }
}
function changeColor(){
    var currentString = document.getElementById("chcolor").value;

    var nextColor = ["#dbffe5", "#eaf5fb", "#e6ddee", "white"];
    var stringList = ["Next is Mint", "Next is Blue", "Next is Purple", "Next is White"]; 
    
    for(i = 0; i < (stringList.length - 1); i++){
        if (currentString === stringList[3]){
            document.body.style.backgroundColor = nextColor[3];
            document.getElementById("chcolor").value = stringList[0];
        }
        else if (currentString === stringList[i]){
            document.body.style.backgroundColor = nextColor[i];
            document.getElementById("chcolor").value = stringList[i + 1];
        }
    }
}
