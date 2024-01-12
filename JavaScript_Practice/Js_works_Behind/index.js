'use strict'
/*function calcAge(birthYear)
{
    const age=2023-birthYear;
    console.log(name);
  function printAge()
  {
    const out=`your ${age} year old you born in ${birthYear} year`;
    console.log(out);
  }
  printAge();
  return age;
}*/

const name="sanjay"; //it is global variable so its acces inside of the function
//calcAge(2002);

//hoisting and tds
//using variables in hoisting
/*console.log(one);   // in this part we print the variables in before initialization so it will be return the error the 
console.log(two);   //two and three variables are still in temperorial dead zone bcoz it will does not initialzised before print
console.log(three);
let one='sanjay';
let two='cricketer';
let three=2002;  
//using function in hoisting
/* it will be produced error bcoz we call the function in before initialize the function*/
console.log(addDec(5,6));// it will produce output bcoz the function will be initialize
//console.log(funExpr(5,5));
function addDec(a,b)
{
  return a+b;
}            
const funExpr=function(a,b)     //if we using var instead of const it produce diff type error(undefined not a function) bcoz
{                               //var will be hoisted and set undefined
  return a+b;
}    
const funAr=(a,b)=> a+b;
 if(!numProducts) deleteShoppingCart()
 var numProducts=10;                          // in this program the numProducts is reach 0 then it produce output all product is deleted
 function deleteShoppingCart()                //but the numProduct will be initialize value is 10 bcoz the hoisting works var variables
{                                              //conclusion is--->so instead of using let(changeable) and const(unchangeable) variable for var 
  console.log("all products are deleted");
}

//this keyword
console.log(this); //its globalobject window
 function calcAge(birthYear){
  console.log(2023-birthYear);    
  console.log(this);              //it produce the result is undefined in strict mode it will a normal function
 }
 calcAge(2002);
 const calcArrAge=birthYear=>{
  console.log(2023-birthYear);        
  console.log(this);              // in previous function it will produce undefine but this time produce the output window object
 }                                //bcoz arrow function does not have own this keyowrd  it use the parent function keyword(lexical this keyword)
 calcArrAge(2002);

 const name1={
  first_name : 'sanjay',
  reg_no : 11,
  year : 2002,
  calcuAge :function()
  {
    console.log(this);
    console.log(2023-this.year);
  },
};
name1.calcuAge()
const sam={
  year : 2003,
};                                //using object we acces the parent this keyword and then result will be sam age
sam.calcuAge=name1.calcuAge;
sam.calcuAge();

//primitive and objects
//primitive types
let age1=20;
let oldAge=age1;
age1=25;
console.log(age1,oldAge);
let lastName='sanjay';
let oldName=lastName;
lastName='kirana'
console.log(oldName,lastName);
//reference types
 const kirana={
  name : 'Kirana',
  lastname : 'sanjay',
  age : 21
 }
 const marriedkirana=kirana;
 marriedkirana.lastname='sanjay';
 console.log('Before married:',kirana);
 console.log('After married:',marriedkirana);
 //copy object
 const kirana2={
  name : 'Kirana',
  lastname : 'sanjay',
  age : 21,
  family :['murugan','selvi',]
 }
 const kiranaCopy=Object.assign({},kirana2);
 kiranaCopy.lastname='sanjay';
 console.log('Before married:',kirana2);
 console.log('After married:',kiranaCopy);
 kiranaCopy.family.push('nijanth');