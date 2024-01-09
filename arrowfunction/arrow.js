const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;


function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);


    document.getElementById("answer1").innerHTML = ('Addition: ' + addition(num1, num2));
    document.getElementById("answer2").innerHTML = ('Subtraction: ' + subtraction(num1, num2));
    document.getElementById("answer3").innerHTML = ('Multiplication: ' + multiplication(num1, num2));
    document.getElementById("answer4").innerHTML = ('Division: ' + division(num1, num2));
       
}   