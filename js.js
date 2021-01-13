function myFunction(){
    var who = document.getElementById("whoru").value;
    document.getElementById("hi").innerHTML = "Hello "+who+"!";
    // document.getElementById("hi").style.backgroundColor="gray";
    document.getElementById("hi").setAttribute("id", "hi2");
}
