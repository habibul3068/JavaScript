// Function
// Problem without Function
// var num = 15;
// document.writeln("Result is: " + num * num);

// var num = Number(prompt("Enter a number: "))
// document.writeln("The result is: " + num * num);

// var num = 20;
// document.writeln("Result is: " + num * num);


// using function 
// without parameter
// function square(){
//     var num = 15;
//     document.writeln("Result is: " + num * num);
// }

// function sqaure_1(){
//     var num = Number(prompt("Enter a number: "))
//     document.writeln("The result is: " + num * num);    
// }

// function call
// square();

// with parameter
// function sqaure_2(num){
//     if(num === 20) {
//         document.writeln("<br> Multiplication is: " + num * num);
//         document.writeln("<br> Addition is: " + num + num);
//         document.writeln("<br> Substraction is: " + num - num);
//         document.writeln("<br> Division is: " + num / num);
//     } else {
//         document.writeln("The number isn't 20. No calculation will done.");
//     }
// }

// let user = parseInt(prompt("Enter the number below:"));

// sqaure_2(user);


// Function with multiple arguments

// function calculation(num1, num2, num3){
//     document.writeln("<br> Addition is: " + (num1 + num2 + num3));
//     document.writeln("<br> Multiplication is: " + (num1 * num2 * num3));
//     document.writeln("<br> Substraction is: " + (num1 - num2 - num3));
//     document.writeln("<br> Division is: " + (num3 / num3 / num3));
// }
// calculation(Number(prompt("First Number: ")), Number(prompt("Second Number: ")), Number(prompt("Third Number: ")));


// Immediately Invokeable Function Expressions
(function calculation(num1, num2, num3){
    document.writeln("<br> Addition is: " + (num1 + num2 + num3));
    document.writeln("<br> Multiplication is: " + (num1 * num2 * num3));
    document.writeln("<br> Substraction is: " + (num1 - num2 - num3));
    document.writeln("<br> Division is: " + (num3 / num3 / num3));
}(Number(prompt("First Number: ")), Number(prompt("Second Number: ")), Number(prompt("Third Number: "))));