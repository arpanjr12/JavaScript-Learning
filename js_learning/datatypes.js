"use strict";  // treat all js code as newer version..........

// alert(2+2)  // we are useing node js not browser.........





let name="Arpan"
let age=20
let isloggedIn=false
let state;
let outsideTemp=null;

// console.log(state);


const id=Symbol('123')
const anotherid=Symbol('123')


// console.log(id===anotherid);

const bigNumber=45874523695485654n  //use 'n' in last for define bigInt





// number => 2 to power 53
//bigint
//string=>""
//boolean=>true/false
//null=standalon value
//undefined =>
//symbol =>unique

//object


// console.log(typeof "Arpan");
// console.log(typeof null); 
// console.log(typeof undefined);




/*
datatypes are divided into two catagories based on how to store data in memory and how to accessed from there
1) primitive:
primitive are 7 types:String,Number,Boolearn,null,Undefined,Symbol,Bigint

2)non-primitive(Reference):
Array,Objects,Functions 
*/

const member=["rahul","aman","adhir"]; //array

let myobj={
    name:"arpan",
    age:21,
} //object

const myfunction=function() {
    console.log("hello World");    
}//function

console.log(typeof member);
