window.addEventListener("keyup", dealWithKeyboard, false);
function dealWithKeyboard(e) {
    if (event.keyCode === 48) {
        $("#0").click();
    }
    if (event.keyCode === 49) {
        $("#1").click();
    }
    if (event.keyCode === 50) {
        $("#2").click();
    }
    if (event.keyCode === 51) {
        $("#3").click();
    }
    if (event.keyCode === 52) {
        $("#4").click();
    }
    if (event.keyCode === 53) {
        $("#5").click();
    }
    if (event.keyCode === 54) {
        $("#6").click();
    }
    if (event.keyCode === 55) {
        $("#7").click();
    }
    if (event.keyCode === 56) {
        $("#8").click();
    }
    if (event.keyCode === 57) {
        $("#9").click();
    }
    // gets called when any of the keyboard events are overheard
}
/* Input */
function CommingSoon() {
    alert('Comming Soon!');
}
function Input(value) {
    var previous = parseFloat(document.getElementById("main_input").value);
    var lenval = $(main_input).val();
    if (lenval.length > 15) {
        return 0;
    }
    document.getElementById("main_input").value = parseFloat(previous + ('' + value));
    /*if (lenval.length > 9) {
        document.getElementById("main_input").style.fontSize = "27.5pt";
    }
    if (lenval.length > 11) {
        document.getElementById("main_input").style.fontSize = "25pt";
    }
    if (lenval.length > 12) {
        document.getElementById("main_input").style.fontSize = "22.5pt";
    }*/
    
}
function Clear() {
    document.getElementById("main_input").value = '0';
    document.getElementById("main_input").style.fontSize = "38pt";
}


function Sum() {
    document.getElementById("main_input").value = '0';
}
function DotInput() {
    var previous = parseFloat(document.getElementById("main_input").value);
    document.getElementById("main_input").value = (previous + ".");
    parseFloat(document.getElementById("main_input").value);
}