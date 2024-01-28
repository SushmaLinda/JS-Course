const array = [1,2,3,4,5,6,7,8,9];
console.log(array[4])

//Using property to find array length
const Array = [1,2,3,4,5,6,7,8,9];
console.log(array[array.length-1])

//Using num property to find array length
const num = [1,2,3,4,5,6,7,8,9];
console.log(num[num.length-1])

//Using object to find array length
const Num = [1,2,3,4,5,6,7,8,9];
console.log(Num.length-1)

// try
const num1 = [1,2,3,4,5,6,7,8,9];
console.log(num1.length-1)

//operation:-
//Push operation
const arr= [1,2,3,4,5,6,7,8,9];
arr.push(10)
console.log(arr)

//pop operation
const arr1 = [1,2,3,4,5,6,7,8,9,10,11,12];
arr1.pop()
console.log(arr1)

//Unshift operation
const arr2= [1,2,3,4,5,6,7,8,9];
arr2.unshift(0)
console.log(arr2)

//Shift operation
const arr3= [0,1,2,3,4,5,6,7,8,9];
arr3.shift()
console.log(arr3)

//change in index[number,string,boolean,object]
const arr4= [0,1,2,3,4,5,6,7,8,9];
arr4[0] = (100)
console.log(arr4)

//index operator in string - using indexof()
const names = ["Amal", "Dhanavan", "Akash", "Neha", "Supriya", "Akash"];
names.indexOf()
console.log(names)

//To find specifis index valuse
const nameS = ["Amal", "Dhanavan", "Akash", "Neha", "Supriya"];
nameS.indexOf("Akash")
console.log(nameS.indexOf("Akash"))

//If it is not present
const namES = ["Amal", "Dhanavan", "Akash", "Neha", "Supriya"];
namES.indexOf("Akash")
console.log(namES.indexOf("Aka"))

//To find the array index at which to begin the search
const naMES = ["Amal", "Dhanavan", "Akash", "Neha", "Supriya", "Akash", "Akshit"];
naMES.indexOf("Akash")
console.log(naMES.indexOf("Akash",3))

//lastIndexOf operator - 
naMES.lastIndexOf('Akash')
console.log(naMES.lastIndexOf('Akash'))

//Includes operator - return(true/false/indexvalue) - works in primitive datatype
naMES.includes('Akshit')
console.log(naMES.includes('Akshit'))

//Find operator - works in reference datatype to find any object
let channels = [ {
    name: 'Gyan',
    Subscriber: 10000
},
{
    name: 'Gyan se Vigyan',
    Subscriber: 20000 
},
{
    name: 'Sushma Linda',
    Subscriber: 50000
}
];
console.log(channels.find(function(Element){
    return Element.name === 50000
}))

//Arrow function in Find operator-Use argument(here we using as element)
let channelS = [ {
    name: 'Gyan',
    Subscriber: 10000
},
{
    name: 'Gyan se Vigyan',
    Subscriber: 20000 
},
{
    name: 'Sushma Linda',
    Subscriber: 50000
}
];
//Normal syntax se declare 
console.log(channels.find(Element=> {
    return Element.name === 'Gyan se Vigyan'
}))

//second method to declare
let Channels = [ {
    name: 'Gyan',
    Subscriber: 10000
},
{
    name: 'Sushma Linda',
    Subscriber: 20000 
},
{
    name: 'Sushma Linda',
    Subscriber: 50000
}
];
//for single element declaration, we can write in a same line and need to remove {} too Whereas multiple elements the use index as well ()
console.log(channels.find(Element=> Element.name === 'Sushma Linda'))

//Concat method - combines two or more array and/or items to add the end of the array.
let names1 = ['Amal', 'Dhanvan', 'Akash',]
let names2 = ['Akshit', 'Neha', 'Supriya']

console.log(names1.concat(names2))

//we can concat string too
let nameS1 = ['Amal', 'Dhanvan', 'Akash',]
let nameS2 = ['Akshit', 'Neha', 'Supriya']

console.log(nameS1.concat('Yash'))
console.log(nameS2.concat('Rajni'))

//Slice method to remove start/end-if(0,slice exdends to the end of the array)
let names3 = ['Amal', 'Dhanvan', 'Akash',]
let names4 = ['Akshit', 'Neha', 'Supriya']
let names5 = (names3.concat(names4))
console.log(names5.slice(3,5))

//Spreade operator- works like concat, but by using ...
let names6 = ['Amal', 'Dhanvan', 'Akash',]
let names7 = ['Akshit', 'Neha', 'Supriya']
let names8 = [...names6,...names7]
console.log(names8)

//We can do by using value and get same result
let namEs3 = ['Amal', 'Dhanvan', 'Akash',]
let namEs4 = ['Akshit', 'Neha', 'Supriya']
let namEs5 = [...['Amal', 'Dhanvan', 'Akash',],...['Akshit', 'Neha', 'Supriya']]
console.log(namEs5)

//LOOPS IN ARRAY
//For Loop
const names9 = ["Amal", "Dhanavan", "Akash", "Neha", "Supriya", "Akash"];
for(let i = 0; i<names.length;i++)
{
    console.log(names9[i])
}

//For of loop
const nameS9 = ["Amal", "Dhanavan", "Akash", "Neha", "Supriya", "Akash"];
for(let nameS9 of names)
{
    console.log(nameS9)
}

//For-each- This loop uses only on array, it does not use on loops in JS 
const namEs9 = ["Amal", "Dhanavan", "Akash", "Neha", "Supriya", "Akash"];
namEs9.forEach(function(namEs9,index) //using call back functio
{
    console.log(namEs9,index);// we get ouput as names with thier index numbers too
})

//String And Array related Important Topices
//Join operator - Adds all the elements of an array into a string,elemrnts are separated with a comma.
let student = ['S','U','S','H','M','A']
console.log(student.join())

//when we use ('')i.e empty string, we get output without string
let Student = ['S','U','S','H','M','A']
console.log(Student.join(''))

//when we use separator as Dash('-')we get output with Dash in between elements
let studenT = ['S','U','S','H','M','A']
console.log(studenT.join('-'))

//Split operator - Return output as string to Array
let studeNt = ['S','U','S','H','M','A']
StudentA = studeNt.join('-')
console.log(StudentA.split())

//Array Prototype Filter() Function
// It works like Find Operator,we applied condition that wherever the first condition was true, it returned it. Whereas,Fliter run upto end of element
let Cities = [
    {name: 'Mumbai', Population: 32789361},
    {name: 'Delhi', Population: 8278936},
    {name: 'Ranchi', Population: 52789368},
    {name: 'Jamshedpur', Population: 88789369},
    {name: 'Hyderabad', Population: 92789361},
    {name: 'Bangalore', Population: 82789361},
];

console.log(Cities.filter(city => {
    return city.Population > 30000000
}))

//Write this code in one line (shortcut method)
let CitieS = [
    {name: 'Mumbai', Population: 32789361},
    {name: 'Delhi', Population: 8278936},
    {name: 'Ranchi', Population: 52789368},
    {name: 'Jamshedpur', Population: 88789369},
    {name: 'Hyderabad', Population: 92789361},
    {name: 'Bangalore', Population: 82789361},
];

console.log(Cities.filter(city => city.Population > 30000000))

//Array Prototype map() - Creates a new Array populated with the results of calling a provided function every element in the calling array
let CitiES = [
    {name: 'Mumbai', Population: 32789361},
    {name: 'Delhi', Population: 8278936},
    {name: 'Ranchi', Population: 52789368},
    {name: 'Jamshedpur', Population: 88789369},
    {name: 'Hyderabad', Population: 92789361},
    {name: 'Bangalore', Population: 82789361},
];
console.log(CitiES.map(city => city.Population * 2 ))


const Characters = [
    {
        Identity: 'Amitab Bchan',
        height: '181',
        mass: '77',
        eye_color: 'black',
        gender: 'male',
    },
    {
        Identity: 'Jaya Bchan',
        height: '140',
        mass: '49',
        eye_color: 'black',
        gender: 'female',
    },
    {
        Identity: 'Abhishekh Bchan',
        height: '181',
        mass: '79',
        eye_color: 'black',
        gender: 'male',
    },
    {
        Identity: 'hrithik Roshan',
        height: '180',
        mass: '75',
        eye_color: 'brown',
        gender: 'male',
    },
    {
        Identity: 'Jaya Kishor',
        height: '152',
        mass: '55',
        eye_color: 'bronw',
        gender: 'female',
    },
];

//Get an array of all names(Identity,height,mass,eye_color,gender)
const height = Characters.map(ch => ch.height)
console.log(height);

const Identity = Characters.map(ch => ch.Identity)
console.log(Identity);

const mass = Characters.map(ch => ch.mass)
console.log(mass);

const eye_color = Characters.map(ch => ch.eye_color)
console.log(eye_color);

const gender = Characters.map(ch => ch.gender)
console.log(gender);

//Get an array of objects with just Identity and pheight properties
const properiesOfch = Characters.map(ch => {
    return {
        Identity: ch.Identity,
        height: ch.height
    }
})
    console.log(properiesOfch);

//checkout all arrays properties in MDN WEB DOCS site

//Get Total height of all characters
//Ans:- we use reduce rpoperty for adding elements and by using Number peroprty for converting string to Number otherwise we will get output as string
const totalHeight = Characters.reduce((prevHeight, Characters) => {
    return prevHeight + Number(Characters.height);
},0)
console.log(totalHeight);

// Get Characters with mass greater that 50
//Ans:-always use Filter for comparesion between Numbers(<,>,=<,=>)
const greaterThanMass = Characters.filter((Characters) => {
    return Characters.mass > 50 //whenever we use return we will get output(...)
})
console.log(greaterThanMass);

//list all the male characters
const malech = Characters.filter((Characters) => {
    return Characters.gender == 'male'
})
console.log(malech);

//list all the female characters
const femalech = Characters.filter((Characters) => {
    return Characters.gender == 'female'
})
console.log(femalech);


//primitive datatype ko pahachane ke liye [data store kiya jata hai with (,)]
//refrence datatype ke liye{data ka pura details}

//sort by gender/name/character....etc
const sortByHeight = Characters.sort((Character1, Character2) => {
    if (Character1.Height > Character2.Height) {
        return -1;
    }
    if (Character1.Height < Character2.Height) {
        return 1;
    }
    return 0
})
console.log(sortByHeight);

//ctrl+R(rename)/ctrl+f(search)
const sortBygender = Characters.sort((Character1, Character2) => {
    if (Character1.gender > Character2.gender) {
        return -1;
    }
    if (Character1.gender < Character2.gender) {
        return 1;
    }
    return 0
})
console.log(sortBygender);

//Does evry character have mass more than 40?
console.log(Characters.every((Character) => Character.mass > 40))

//Does evry character have blue eye?
console.log(Characters.every((Character) => Character.eye_color == 'blue'))

//Array.Prototype.Some():- the some() method test whether at least one element in array ,it returns true,otherwise false
//Is there at least one male character?
console.log(Characters.some((Character) => Character.gender))

//Is there at least one character taller than 200?
console.log(Characters.some((Character) => Character.Height > 200))

//check whether an element is even
const arraY = [1,2,3,4,5];
const even = (element) => element === 0;
console.log(arraY.some(even));









