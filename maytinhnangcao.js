let screen = document.getElementById("screen");
function inputCal(inp){
    screen.value += inp;
}
function result() {
    let result = eval(screen.value);
    screen.value = result;
}
function xoa() {
    screen.value ="";
}