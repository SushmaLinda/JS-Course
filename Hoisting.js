//Hoisting:- Whenever we declare the varibles those variables already allocate thier memory before being excuted.
//Hoisting only call/declare the function not to initialize the function

//Example for normal code
function SayHello() {
    console.log("Hello");
}

var i = 10;
 
SayHello();
console.log(i);

//Example for Hoisting:- Here we are accessing (SayHello and console) before declaring (i value)
 //What will happen?

console.log(i); // here we get output as (undefined) boz we didn't give the value of (i) and tried to exucute this (i) value.
SayHello(); // We call the function before execution, will get output as (Hello)
function SayHello() { // This is a function that we have to call but before line we called
    console.log("Hello");
}

//Examle3:- 
 Great() //No matter how many functio declaration are there, They will be at the top
 function Great(){
console.log("Good Morning");
 }

//JavaScript only hoists declaration, Not initialization. The variable will be Undefined untill the linewhere its initialized is reached.
console.log(a) // we didn't defined value of (a) so we gets error as "a is not defined"
Great()
function Great(){
    console.log("Good Morning");
}

//If I write here var a with ;,then we gets Undefined
console.log(a);
Greatter()
function Greatter(){
    console.log("Good Evening");
}
var a; //we will get undefined

//Following two lines will run successfully due to javascript hoisting
console.log(b)
Greater()
function Greater(){
    console.log("Good Job")
}
var b= 100; // When we use var then hoisting is applied and we can use the variables. But it is not applied when we use const and let
console.log(b)// gets 100 boc declaration hoisted to the top but initialization is not.

//Question for interview:- hoisting and destructuring

// Behaviour difference b/w let and var
//(1)console.log(num)-Error if (let or const),with var undefined is printed.
//   let num = 6;

//note:- Function expression and class expression are not hoisted 
//Temprore dead zone:- Jab tak hum value nahi dalte hai tab tak wo initialize nhi hota hai isliye hum access nhi kar sakte hai, aur hume error milegi.

NamasteIndia();
//console.log(c);
function NamasteIndia(){
    console.log("Namaste");
}

let c = 33; // we can not access 'c' before initialization
// Is here var hoisted? ANS:- Yes boc we already declared 'c'(line 63) but we did not put value 'c' so we gets error.

NamasteIndia();
console.log(d);
var NamasteIndia = function(){ // Gets error 'NamsteIndia is not a function' boz we used var keyword jab hum var keyword use kate hai
// to usme ek undefied value hai i.e, placeholder, agar hum iss placeholder ko call karte hai to hume yahi erroe milegi.
    console.log("Namaste");
}
var d = 44;

//Shadowing Work in JS
let foo = 'bar';
var bar = 'foo';
function Namaskar() {
    let foo = 'baz';
    var bar = 'foobar';
    console.log(foo);
    console.log(bar);
}
Namaskar();
console.log(foo);
console.log(bar);

//Illigale Shadowinig Work in JS:- jb hum let se koi value declare kr chuke hote hai aur dubara block {} ke andar redeclare karne se wo error deta hai,
//boz Identifier 'foo' has already been declared 

let Foo = 'bar'; // already (line 80:-foo-95:-Foo) me value declared hai isliye 
var bar = 'foo'; // dubara declare nahi kar sakte hai, will get error so here we change the name/variable ..whatever...that is called illigale Shadowing. 
if (true) {
    let foo = 'baz';
    var bar = 'foobar';
    console.log(foo);
    console.log(bar);
}
Namaskar();
console.log(foo);
console.log(bar);

//const keyword only read keyword hai,i.e we can not write, only once we can access when we declare the value 


