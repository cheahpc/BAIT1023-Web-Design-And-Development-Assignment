/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Assignment
   Technology & Services - Services Javascript
   Author: Ng Chun Shen
   Filename: services.js
*/

//Function of imagemap overlay 
function technologyOverlay(obj) {
    obj.src = "images/hover_technology.png";
}

//Function of imagemap reset
function technologyReset(obj) {
    obj.src = "images/technology.png";
}

//Function of open form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

//Function of close form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
