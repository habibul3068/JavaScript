// The Browser Object Model (BOM) in JavaScript helps to intereact
// window.alert('Hello from external JS');
// alert('Hello from external JS without writting window object');
// console.log('Hello from console JS');
// document.writeln('Hello World');

let a; // Dclaration
//data type initialization
let studentID = 9061;
let studentCgpa = 3.75;
let studentName = 'Habibul';
let resultStatus = 'Passed';
let eS = " "; // Empty string
let b = '123';

// Print
document.writeln('Student ID: ' + studentID + '<br>');
document.writeln('Student Name: ' + studentName + '<br>');
document.writeln('Student CGPA: ' + studentCgpa + '<br>');
document.writeln('Status: ' + resultStatus + '<br>');

// Console print
console.log('Student ID: ' + studentID + '<br>');
console.log('Student Name: ' + studentName + '<br>');
console.log('Student CGPA: ' + studentCgpa + '<br>');
console.log('Status: ' + resultStatus + '<br>');

document.writeln('<p style = "color:red">'+ studentName +'</p>');

// Type casting
// Number
let cgpa = parseInt(studentCgpa);
document.writeln(typeof(cgpa));
document.writeln(cgpa + '<br>');

//Integer to Float
let id = parseFloat('Integer to float: ' + studentID);
document.writeln('Integer to float: ' + typeof(id));
document.writeln(cgpa.toFixed(3) + '<br>');

//String to Number
let bS = parseInt(b);
document.writeln('String to Number: '+ typeof(bS));
document.writeln(bS + '<br>');

// Float to String
let fS = cgpa.toString();

// Try Integer to string, String to Number(Float);

// Number Function
document.writeln("String expressed with number: " + Number("ddsds")+ '<br>');
document.writeln("Number expressed in number: " + Number("434")+ '<br>');
document.writeln("Number expressed in string: " + Number("    24    ")+ '<br>' );
document.writeln("Number expressed in Boolean:" + Number(true)+ '<br>');