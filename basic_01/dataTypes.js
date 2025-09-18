"use strict"; // Treat all JS code as newer version

// console.log(3+3);

let name = "Agrim"
let age = 21
let isLoggedIn = false 

//DataTypes-->

//Primimtive

//1.number  => 2 to power 53
//2.bigInt
//3.String = ""
//4.boolean = true/false
//5.null = stand alone value
//6.undefined                    let userMail;
//7.symbol = unique

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);


// console.log(typeof name);       // string
// console.log(typeof null);       // object
// console.log(typeof undefined);  // undefined



//Reference(Non-Primitve)

//Array, Object, Functions

const heros = ["IronMan", "Dr.Strange", "Thor"];

let myObj ={
    name : "Agrim",
    age: 22,
}

const myFunct = function(){
    console.log("Hello World");
    
}

console.log(typeof heros);


//Stack(Primitive) , Heap(Non- Primitive)

//1. Stack(Primitive)
let myName = "Agrim"
let anotherName = "Something Else"

anotherName = "Changed"

console.log(myName);
console.log(anotherName);

//2. Heap (Non-Primitive)
let userOne = {
    email : "agrim@gmail.com",
    upi : "bjb@ubl"
}
let userTwo = userOne

userTwo.email = "SomeOne@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

