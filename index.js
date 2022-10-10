
function add(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let Result;
    Result = "Result = "+ (a + b) ;
    document.getElementById("Result").innerHTML = Result;
}
function sub(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let Result;
    Result = "Result = "+ (a - b) ;
    document.getElementById("Result").innerHTML = Result;
}
function mul(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let Result;
    Result = "Result = "+ (a * b) ;
    document.getElementById("Result").innerHTML = Result;
}
function div(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let Result;
    Result = "Result = "+ (a / b) ;
    document.getElementById("Result").innerHTML = Result;
}
