 function userGame() 
{

    var fn = document.getElementById("user").value;

    var usergamesentence;
    if(fn != "") {
        alert("are you ready to play a game "+fn);
        
    
    } else {
        alert("please tell me your username");
    }
}
