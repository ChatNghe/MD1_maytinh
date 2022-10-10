
function add(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let Result;
    Result = "Result Addition = "+ (a + b) ;
    document.getElementById("Result").innerHTML = Result;
}
function sub(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let Result;
    Result = "Result Subtraction = "+ (a - b) ;
    document.getElementById("Result").innerHTML = Result;
}
function mul(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let Result;
    Result = "Result Multiplication = "+ (a * b) ;
    document.getElementById("Result").innerHTML = Result;
}
function div(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let Result;
    Result = "Result Division = "+ (a / b) ;
    document.getElementById("Result").innerHTML = Result;
}
