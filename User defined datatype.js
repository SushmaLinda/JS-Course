// objects
let animal = {
    name: "cow",
    legs: 4
}

// Dot Notation
console.log(animal.name);

let legsprop = "legs"
// Bracket Notation
console.log(animal[legsprop]);

//Array
let SelectBooks = ["The Ruddest book ever", "Think And Grow Rich", "Invisible Man", "Rich Dad And Poor Dad"]
console.log(SelectBooks);

//0th value=?
let selectBooks = ["The Ruddest book ever", "Think And Grow Rich", "Invisible Man", "Rich Dad And Poor Dad"]
console.log(selectBooks[0]);

//2nd value=?
let SElectBooks = ["The Ruddest book ever", "Think And Grow Rich", "Invisible Man", "Rich Dad And Poor Dad"]
console.log(SElectBooks[2]);

//3rd value=?
let SELectBooks = ["The Ruddest book ever", "Think And Grow Rich", "Invisible Man", "Rich Dad And Poor Dad"]
console.log(SELectBooks[3]);

//4th value=? will get undefined boz we did not defined 4th book.
let SELECTBooks = ["The Ruddest book ever", "Think And Grow Rich", "Invisible Man", "Rich Dad And Poor Dad"]
console.log(SELECTBooks[4]);

//use loops too with the help of prototype by using DOT(.)
let selecTBooks = ["The Ruddest book ever", "Think And Grow Rich", "Invisible Man", "Rich Dad And Poor Dad"]
console.log(selecTBooks.length);

//Function
function namasteworld(name,Lastname) {
    console.log(" Namaste " + name + " " + Lastname);
}
namasteworld("Sushma", "Linda")
namasteworld("Aamn", "Gupta")

//function Addition
function addition(a,b) {
    return a+b;
}
console.log(addition(5,5));

//Subtraction
function Subtraction(a,b) {
    return a-b;
}
console.log(Subtraction(25,5));

//Multiplication
function Multiplication(a,b) {
    return a*b;
}
console.log(Multiplication(5,5));

//Division
function Division(a,b) {
    return a%b;
}
console.log(Division(55,5));