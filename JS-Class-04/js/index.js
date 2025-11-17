var names = ["John", "David", "Shaun", "Tom"];
document.writeln(names + "<br>");

// document.writeln(names[0] + "<br>");
// document.writeln(names[1] + "<br>");
// document.writeln(names[2] + "<br>");
// document.writeln(names[3] + "<br>");

// for(var i = 0; i <= names.length; i++)
//     document.writeln(names[i]);

// document.writeln("<br>");
// for(var i = 0; i <= 3; i++){
//     document.writeln("<br>");
//     document.writeeln(names[i]);
// }

for(var i = 0; i <= 3; i++){
    document.writeln("<br>");
    if (i % 2 === 0){
        document.writeln("<p style='color: red;'>" + names[i] + "</p>");
    } else {
        document.writeln("<p style='color: blue;'>" + names[i] + "</p>");
    }
}

// Taking inputs with array size
var myList = new Array(2);
for(var i = 0; i < myList.length; i++){
    myList[i] = prompt("Enter " + i +" "+ " index for first array");
    document.writeln(myList[i]);
}


// Taking inputs using dynamic memory allocation concept
var list1 = new Array();
for(var i = 0; i < 3; i++){
    list1[i] = prompt("Enter " + i +" "+ " index for 2nd array");
    document.writeln(list1[i]);
}


// concat function
// var array1 = new Array();
// document.writeln("<br/>" + "New array " + myList.concat(list1));
// document.writeln(myList.concat(list1));
// document.writeln("<>br/" + "New array with variable: " + array1);


// pop (removes from last)
document.writeln("<br>" + names + "<br>");
names.pop();
document.writeln("<br> " + "After pop(): " + names + "<br>");
console.log(names);


//push adds elements in thhe last
names.push("one");
console.log(names);
document.writeln("<br>"+"After push(): "+names+"<br>");


//shift is opposite of pop (remove from first)
names.shift("one");
console.log(names);
document.writeln("<br>"+"After shift(): "+names+"<br>");


//unshift: add element in the first
names.unshift("you");
console.log(names);
document.writeln("<br>"+"After shift(): "+names+"<br>");


//splice method : with it element can be added/removed
//splice (add elemnet, remove element)
//first parameter: for starting index
//second parameter  is for deleteing number of elemnets starting from firest index
//number of elements you will add with value
names.splice(2, 0, "zxc", "dfg", "jkl");
document.writeln("<br>"+"After splice(): "+names+"<br>");
names.splice(2,2);
document.writeln("<br>"+"After splice(): "+names+"<br>");


let array = ["a", "b", "c", "d", "e", "f"];

document.writeln(" Array: " + array + "<br>");

array.splice(2, 2, "g", "h");

document.writeln("Replace Array: " + array);


// slice: returns an array and never changes the main array.
// 2 is the starting index
// 4-2 = 2 elements will be sliced not delete.
document.writeln("<br>" + "After slice(2, 4): " + names.slice(2, 4) + "<br>");
document.writeln("<br>" + "Main array: " + names + "<br>");
console.log(names);


//reverse
document.writeln("<br>" + "Reverse array: " + names.reverse() + "<br>");


//sorting can sort strings, not numbers
var numbers = [67, 98, 23];
//number sorting user defined