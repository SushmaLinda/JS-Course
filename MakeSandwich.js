let bread1 = prompt("Which bread would like to have :-")
let veggies1= prompt("What are your favorite veggies");
let sauce1= prompt("Which sauce would you like to have :-");

function MakeSandwich(bread, veggies,sauce) {
    let Sandwich = bread + "bread" + veggies +" " + sauce + "sauce" + "sandwich is ready";
    return Sandwich;
}

let vegSandwich = MakeSandwich(bread1, veggies1, sauce1);
console.log(vegSandwich);