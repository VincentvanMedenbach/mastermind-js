var ReadyForCheck = [1, 2, 3, 4];
var count = 0;
var button5 = document.getElementById("button5");
var runOnce = false;
randomColor(1);
randomColor(2);
randomColor(3);
randomColor(4);
var totalPlacesOther = 0;
var placesOther = 0;
var placesRight = 0;
var colorCheckDone = [false, false, false, false, false];
var won = false;
var isRight = [true, true, true, true];
var isRightNumber = 0;
var testArray = [];

function rij() {
    rij.prototype.newRij = function () {
        var buttonGroup = [document.createElement("BUTTON"), document.createElement("BUTTON"), document.createElement("BUTTON"), document.createElement("BUTTON")
        ];
        var checkGroup = [document.createElement("BUTTON"), document.createElement("BUTTON"), document.createElement("BUTTON"), document.createElement("BUTTON")
        ];
        var textDing = document.createTextNode("");

        checkGroup[0].appendChild(textDing);
        checkGroup[1].appendChild(textDing);
        checkGroup[2].appendChild(textDing);
        checkGroup[3].appendChild(textDing);

        checkGroup[0].setAttribute("id", "check1_" + count);
        checkGroup[1].setAttribute("id", "check2_" + count);
        checkGroup[2].setAttribute("id", "check3_" + count);
        checkGroup[3].setAttribute("id", "check4_" + count);

        checkGroup[0].setAttribute("class", "checkButton");
        checkGroup[1].setAttribute("class", "checkButton");
        checkGroup[2].setAttribute("class", "checkButton");
        checkGroup[3].setAttribute("class", "checkButton");


        buttonGroup[0].appendChild(textDing);
        buttonGroup[1].appendChild(textDing);
        buttonGroup[2].appendChild(textDing);
        buttonGroup[3].appendChild(textDing);

        buttonGroup[0].setAttribute("id", "button1_" + count);
        buttonGroup[1].setAttribute("id", "button2_" + count);
        buttonGroup[2].setAttribute("id", "button3_" + count);
        buttonGroup[3].setAttribute("id", "button4_" + count);

        console.log("WERKT");

        container.appendChild(checkGroup[0]);
        container.appendChild(checkGroup[1]);
        container.appendChild(buttonGroup[0]);
        container.appendChild(buttonGroup[1]);
        container.appendChild(buttonGroup[2]);
        container.appendChild(buttonGroup[3]);
        container.appendChild(checkGroup[2]);
        container.appendChild(checkGroup[3]);
    };
}

var container = document.getElementById("container");

function activation() {
    isRight = [true, true, true, true];
    totalPlacesOther = 0;
    placesOther = 0;
    placesRight = 0;
    checkers();
    buttonDeactivate();

    if (runOnce) {
        checkersColor();
        checkersRight();
    }


    button5.innerHTML = "Activate";
    count++;
    current = "buttonRij" + count;
    if (placesRight === 4) {
        victory();
    }
    if (won == false) {
        switch (count) {
            case 0:
                var current = new rij();
                current.newRij();
                break;
            case 1:
                current = new rij();
                current.newRij();
                break;
            case 2:
                current = new rij();
                current.newRij();
                break;
            case 3:
                current = new rij();
                current.newRij();
                break;
            case 4:
                current = new rij();
                current.newRij();
                break;
            case 5:
                current = new rij();
                current.newRij();
                break;
            case 6:
                current = new rij();
                current.newRij();
                break;
            case 7:
                current = new rij();
                current.newRij();
                break;
            case 8:
                current = new rij();
                current.newRij();
                break;
            case 9:
                current = new rij();
                current.newRij();
                break;
            case 10:
                current = new rij();
                current.newRij();
                break;
            case 11:
                current = new rij();
                current.newRij();
                break;

            case 12:
                current = new rij();
                current.newRij();
                break;
            default:
                button5.disabled = true;
                break;

        }
    }
    buttonActivate();

    runOnce = true;

    for (var x = 1; x < 5; x++) {
        ReadyForCheck[x] = document.getElementById("random" + x).style.backgroundColor;
    }
    colorCheckDone = [false, false, false, false, false];
}

function buttonDeactivate() {
    if (runOnce === true && won === false) {
        document.getElementById("button1_" + count).disabled = true;
        document.getElementById("button2_" + count).disabled = true;
        document.getElementById("button3_" + count).disabled = true;
        document.getElementById("button4_" + count).disabled = true;
    }
}

function buttonActivate() {
    if (won === false) {
        document.getElementById("button1_" + count).setAttribute("onclick", "changeColor(1)");
        document.getElementById("button2_" + count).setAttribute("onclick", "changeColor(2)");
        document.getElementById("button3_" + count).setAttribute("onclick", "changeColor(3)");
        document.getElementById("button4_" + count).setAttribute("onclick", "changeColor(4)");
    }
}

function changeColor(buttonNummer) {
    if (document.getElementById("button" + buttonNummer + "_" + count).style.backgroundColor === "yellow") {
        document.getElementById("button" + buttonNummer + "_" + count).style.backgroundColor = "green";
    }
    else if (document.getElementById("button" + buttonNummer + "_" + count).style.backgroundColor === "green") {
        document.getElementById("button" + buttonNummer + "_" + count).style.backgroundColor = "orange";
    }
    else if (document.getElementById("button" + buttonNummer + "_" + count).style.backgroundColor === "blue") {
        document.getElementById("button" + buttonNummer + "_" + count).style.backgroundColor = "yellow";
    }
    else if (document.getElementById("button" + buttonNummer + "_" + count).style.backgroundColor === "orange") {
        document.getElementById("button" + buttonNummer + "_" + count).style.backgroundColor = "purple";
    }
    else if (document.getElementById("button" + buttonNummer + "_" + count).style.backgroundColor === "purple") {
        document.getElementById("button" + buttonNummer + "_" + count).style.backgroundColor = "black";
    }
    else {
        document.getElementById("button" + buttonNummer + "_" + count).style.backgroundColor = "blue";
    }


}

function randomColor(buttonNummer) {
    console.log("test");
    var randomNummer = Math.floor((Math.random() * 6) + 1);
    if (randomNummer === 1) {
        document.getElementById("random" + buttonNummer).style.backgroundColor = "green";
    }
    else if (randomNummer === 2) {
        document.getElementById("random" + buttonNummer).style.backgroundColor = "orange";
    }
    else if (randomNummer === 3) {
        document.getElementById("random" + buttonNummer).style.backgroundColor = "yellow";
    }
    else if (randomNummer === 4) {
        document.getElementById("random" + buttonNummer).style.backgroundColor = "purple";
    }
    else if (randomNummer === 5) {
        document.getElementById("random" + buttonNummer).style.backgroundColor = "black";
    }
    else if (randomNummer === 6) {
        document.getElementById("random" + buttonNummer).style.backgroundColor = "blue";
    }
    ReadyForCheck[buttonNummer - 1] = document.getElementById("random" + buttonNummer).style.backgroundColor;
}

function checkers() {
    if (runOnce == true) {
        checkerProxy();
        totalPlacesOther = 4 - (placesOther + placesRight);
        console.log(placesRight + "placesRight");
        console.log(totalPlacesOther + "TotalOther");
        console.log(placesOther + "PlacesOther");
    }
}

function checkerProxy() {
    checkColors(1);
    checkColors(2);
    checkColors(3);
    checkColors(4);
    checkPlace(1);
    checkPlace(2);
    checkPlace(3);
    checkPlace(4);
}

function checkPlace(Number) {
    console.log("checkPlace number: " + Number);
    if (ReadyForCheck[Number] === document.getElementById("button" + Number + "_" + count).style.backgroundColor) {
        placesRight++;
        isRightNumber = Number;
        isRight[isRightNumber] = false;
        ReadyForCheck[Number] = "";

    }
}


function checkColors(Number) {
    for (var i = 1; i < 5; i++) {
        if (i !== (Number)) {
            if (ReadyForCheck[i] === document.getElementById("button" + Number + "_" + count).style.backgroundColor) {
                placesOther++;
                ReadyForCheck[i] = "";
                console.log(ReadyForCheck[i] + i + "disabled");
                testArray[(i) + "+" + Number] = true;
            }
        }
        console.log("Check for:" + (i) + " " + Number + testArray[(i) + "+" + Number]);
    }
}

//     }
// function checkColors(Number) {
//     console.log("checkColors number: " + Number);
//     for (var i = 0; i < 4; i++) {
//
//         if (i !== (Number - 1)) {
//             if (ReadyForCheck[(i + 1)] === document.getElementById("button" + Number + "_" + count).style.backgroundColor && colorCheckDone[i] === false) {
//                 placesOther++;
//                 colorCheckDone[i] = true;
//                 console.log(i);
//
//                 ReadyForCheck[i + 1] = "";
//             }
//         }
//
//     }
//
// }

function victory() {
    won = true;
    button5.disabled = true;
    console.log("you won!");
    alert("you won!");
}

function checkersColor() {
    if (totalPlacesOther <= 0) {
        document.getElementById("check4_" + count).style.backgroundColor = "white";
    }
    if (totalPlacesOther <= 1) {
        document.getElementById("check3_" + count).style.backgroundColor = "white";
    }
    if (totalPlacesOther <= 2) {
        document.getElementById("check2_" + count).style.backgroundColor = "white";
    }
    if (totalPlacesOther <= 3) {
        document.getElementById("check1_" + count).style.backgroundColor = "white";
    }

}

function checkersRight() {
    if (placesRight >= 4) {
        document.getElementById("check4_" + count).style.backgroundColor = "red";
    }
    if (placesRight >= 3) {
        document.getElementById("check3_" + count).style.backgroundColor = "red";
    }
    if (placesRight >= 2) {
        document.getElementById("check2_" + count).style.backgroundColor = "red";
    }
    if (placesRight >= 1) {
        document.getElementById("check1_" + count).style.backgroundColor = "red";
    }
}