let firstNum = parseFloat(document.getElementById("firstNum")).value;
let selectOperation = document.getElementById("selectOperation").value;
let secondNum = parseFloat(document.getElementById("secondNum")).value;
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.addEventListener("click", function() {
if (selectOperation == "+") {
    result.value = firstNum + secondNum;
} else if (selectOperation == "-") {
    result.value = firstNum - secondNum;
} else if (selectOperation == "*") {
    result.value = firstNum * secondNum;
} else if (selectOperation == "/") {
    result.value = firstNum / secondNum;
}})
