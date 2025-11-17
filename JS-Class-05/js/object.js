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

for(let i = 0; i < student.length; i++){
    document.writeln(student[i].name + "<br>" + student[i].roll + "<br>" + student[i].courses[1] + ",<br><br>");
}

for (let i = 0; i < student.length; i++) {
    document.writeln(student[i].name + " " + student[i].roll + " ");
    for (let j = 0; j < student[i].courses.length; j++) {
        document.writeln(student[i].courses[j] + " ");
    }
    document.writeln("<br>");
}
