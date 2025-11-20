// function msgbtn1(){
//     alert('Hello!')
// }

// function msgbtn2(){
//     alert('Ki Obostha?')
// }

function clickParagraph(){
    alert('You clicked the paragraph!')
}

function messageButton1(){
    var paraVar = document.querySelector('#paraId');
    paraVar.innerHTML = "<span style='color:red;'>You clicked button 1</span>";
}

function messageButton2(){
    var paraVar = document.querySelector('#paraId');
    paraVar.innerHTML = "<span style='color:blue;'>You clicked button 2</span>";
}

var paraVar = document.querySelector('#paraId');
// // Change CSS dynamically
// function addStyle(){
//     paraVar.style.color      = 'red';
//     paraVar.style.fontSize   = '3rem';
//     paraVar.style.fontWeight = 'bold';
//     paraVar.style.fontStyle  = 'italic';
// }

// function removeStyle(){
//     paraVar.style = " ";
// }

// Better approach
var paraVar = document.querySelector('#paraId');
function addStyle(){
    paraVar.classList = "";
    paraVar.classList.add("para-list");
    console.log(paraVar.classList);
}

function removeStyle(){
    paraVar.style = " ";
}