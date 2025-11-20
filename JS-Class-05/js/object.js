// var student1 = {
//     name    : "Habibul",
//     roll    : 11,
//     year    : "1st",
//     courses : ["Operating System", "Data Structure", "Algorithm"]
// }

// document.writeln("Student - 1" +"<br>"+ "Name: " + student1.name + "<br>" + "Roll: " + student1.roll + "<br>" +"Courses: " + student1.courses + "<br><br>");

// var student2 = {
//     name    : "Aupu",
//     roll    : 3053,
//     year    : "1st",
//     courses : ["Operating System", "Data Structure", "Algorithm"]
// }

// document.writeln("Student - 2" +"<br>"+ "Name: " + student2.name + "<br>" + "Roll: " + student2.roll + "<br>" +"Courses: " + student2.courses[2]);


let student = new Array();
student[0] = {
    name    : "Aupu",
    roll    : 3053,
    year    : "1st",
    courses : ["Operating System", "Data Structure", "Algorithm"]
}
student[1] = {
    name    : "Habibul",
    roll    : 11,
    year    : "2nd",
    courses : ["Operating System", "Javascript", "Algorithm"]
}
student[2] = {
    name    : "Hasibul",
    roll    : 3068,
    year    : "3rd",
    courses : ["Operating System", "Algorithm", "Data Structure"]
}

// document.writeln(student[0].name + "<br>");
// document.writeln(student[0].roll + "<br>");
// document.writeln(student[0].courses[1] + "<br>");

// for(let i = 0; i < student.length; i++){
//     document.writeln(student[i].name + "<br>" + student[i].roll + "<br>" + student[i].courses[1] + ",<br><br>");
// }

// for(let i = 0; i < student.length; i++) {
//     document.writeln(student[i].name + " " + student[i].roll + " ");
//     for (let j = 0; j < student[i].courses.length; j++) {
//         document.writeln(student[i].courses[j] + " ");
//     }
//     document.writeln("<br>");
// }


// class GFG {
//     constructor(A, B, C, D){
//         this.g = A;
//         this.f = B;
//         this.c = C;
//         this.d = D;
//     }
//     print(){
//         document.writeln(this.g + " " + this.f + " " + this.c);
//     }
//     add(){
//         document.writeln(this.d + this.c);
//     }
// }
// let gg = new GFG("Javascript", "Java", 1234, 7687);
// gg.print();


// function Student(name, age, roll, year, courses){
//     this.name    = name;
//     this.age     = age;
//     this.roll    = roll;
//     this.year    = year;
//     this.courses = courses;
//     this.display = function(){
//         document.writeln(this.name + " " + this.age + " " + this.roll + " " + this.year + " " + this.courses)
//     }
// }
// var student5 = new Student("AS", 23, 123, "1st",
//     ["Operating System", "Data Structure", "Algorithm"]);
//     console.log(student5.name);
//     console.log(student5);

// var student6 = new Student("ASsfsf", 20, 456, "2st",
//     ["Data Structure", "Algorithm", "Operating System"]);
//     console.log(student6.name);
//     console.log(student6);


class Customer{
    constructor(customerId, customerName,profession, items){
        this.customerId = customerId;
        this.customerName = customerName;
        this.profession = profession;
        this.items = items;
    }
    show(){
        document.writeln("This is Customer Id:" + customerId +" "+"Customer Name: "
            + this.customerName +"<br>"+ "Profession: "+ profession + "<br>" + "and I bought the items: ");
            for (var i = 0; i < items.length; i++){
                document.writeln(items[i]+ " ");
            }
    }
    
}
let customerId = parseInt(prompt("Enter customer Id"));
let customerName = prompt("Enter customer Name");
let profession = prompt ("Enter customer Profession");
let items = new Array(2);
document.writeln("Enter the name of two items.");
for(let i = 0 ; i< items.length; i++){
    items[i] = prompt("Enter" + i + "item's name");
}
let customer1 = new Customer (customerId,customerName,profession,items);
customer1.show();