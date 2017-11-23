var count = 0;
var current = "buttonRij" + count;
function rij() {

}

var container = document.getElementById("container");

rij.prototype.newRij = function () {
    $("button5").disabled = true;
    var row = document.getElementById("row");
    var cln = row.cloneNode(true);
    cln.classList.add(current);
    var ButtonInTest = document.getElementsByClassName("test");
    // ButtonInTest.find("ButtonClub").id = "test";
    container.insertBefore(cln, container.childNodes[0]);


};

function activation() {
    count++;
    current = "buttonRij" + count;
    switch (count) {
        case 0:
            var buttonRij1 = new rij();
            buttonRij1.newRij();
            break;
        case 1:
            var buttonRij2 = new rij();
            buttonRij2.newRij();
            break;
        case 2:
            var buttonRij3 = new rij();
            buttonRij3.newRij();
            break;
        case 3:
            var buttonRij4 = new rij();
            buttonRij4.newRij();
            break;
        case 4:
            var buttonRij5 = new rij();
            buttonRij5.newRij();
            break;
        case 5:
            var buttonRij6 = new rij();
            buttonRij6.newRij();
            break;
        case 6:
            var buttonRij7 = new rij();
            buttonRij7.newRij();
            break;
        case 7:
            var buttonRij8 = new rij();
            buttonRij8.newRij();
            break;
        case 8:
            var buttonRij9 = new rij();
            buttonRij9.newRij();
            break;
        case 9:
            var buttonRij10 = new rij();
            buttonRij10.newRij();
            break;
        case 10:
            var buttonRij11 = new rij();
            buttonRij11.newRij();
            break;
        case 11:
            var buttonRij12 = new rij();
            buttonRij12.newRij();
            break;
        default:
            break;
    }



}