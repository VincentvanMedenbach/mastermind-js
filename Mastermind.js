var row = document.getElementById("row");
var count = 0;


var ButtonStatus = {button1: null, button2: null, button3: null, button4: null, activated: null};

function activation() {
    var cln = row.cloneNode(true);
    document.getElementById("container").appendChild(cln);
}
function test(){
    if (count < 12) {
        // $(".button5:last").disabled = false;

        // document.getElementById("button5").style.display = "none";

        // var Last = document.getElementById("container").lastChild;
        // Last.getElementById("button5").disabled = false;
    }
}