//default parameters
'use strict';
const bookings=[];
const createBooking=function(flightNum,numPassengers=1,Price=200*numPassengers){
    /*Es5 version we using->numPassengers=numPassengers||1;
    Price=Price||200;*/
    const booking={         //object
        flightNum,
        numPassengers,
        Price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('SH123',2);
createBooking('SH124',10);
createBooking('Sh1245',5);
createBooking('SHT345',undefined,1000)//if we leave default value then use undefined  
//if we dont set parameter so we dont pass an argeument into the parameter

//how passing arguements works:value vs references(primitive)
//primitive and objects work in function
const flight='Air123'
const sanjay={
    name : 'sanjay murugan',
    passport : 43868580343
}
const checkIn=function(flightNum,passenger)
{
    flightNum='AirL1234';
    passenger.name='Mr.' + passenger.name;
    if (passenger.passport ===43868580343 )
     {
        alert('Checked In')}
        else{
            alert('wrong passport')
     }
}
checkIn(flight,sanjay)
console.log(flight);
console.log(sanjay);
const newPassport=function(person)
{
    person.passport=Math.trunc(Math.random()*1000000);
};

newPassport(sanjay);
checkIn(flight,sanjay)
//js does not passing by referance  its only passing by value
 //function accepting function callback
 const oneword=function(str){
    return str.replace(/ /g, '').toLowerCase();
 }
 const uppercaseWord=function(str)
 {
    const[first, ...others]=str.split('');
    return[first.toUpperCase(),...others].join('');
 }
 //higher-order function
  const transformed=function(str,fn){
    console.log(`Original string:${str}`);
    console.log(`Transformed String:${fn(str)}`);
    console.log(`Transformed By:${fn.name}`);
 }
 transformed('javascript is the best ',uppercaseWord);//we using function in callback
 transformed('Javascript is the best ',oneword);//we using function in callback
//using value to callback the function instance we use function
 const high5=function()
{
    console.log('hi');
};
document.body.addEventListener('click',high5);
//function returning new function
 const greet=function(greeting){
    return function(name)
    {console.log(`${greeting} ${name}`);
};
 };
 const greeterHey=greet('hey');
 greeterHey('explorers');
 greeterHey('bob');
const lufstana={
    airlines : "lufstana",
    code :"LT",
    bookings :[],
//function()-->book is an function
book(flightNum,name)
{
    console.log(`${name} booked a seat on ${this.airlines} flight ${this.code} ${flightNum}`);
    this.bookings.push({flight: `${this.code} ${flightNum}`,name})
},
};
lufstana.book(123,'Sanjay');
lufstana.book(321,'kirana');
console.log(lufstana);
 const eurowings={
    airlines : 'HiBye Air Lines',
    code : 'HB',
    bookings :[]
 }
 //call method
 /*function is object type so object properties is same as function
 instance of we using this keyword using call method*/
 const book=lufstana.book;//take the method(lufstana) and store the external(book) function[reuse the function]
 book.call(eurowings,23,'bob');//using call method we call the book function
 console.log(eurowings);
 book.call(lufstana,34,'sanjay kirana');
 console.log(lufstana);
 const swiss={
    airlines: 'Swiss Air Lines',
    code: 'SAL',
    bookings: [],
 };
 book.call(swiss,34,'sanjay kirana');
 console.log(swiss);
 //Apply method
const flightdata=[345,'dhoni'];
book.apply(swiss,flightdata);
console.log(swiss);
/*But in apply method we does not use in modernjs because we now
used spread operator method*/
book.call(swiss,...flightdata);
//Bind method
const bookEw=book.bind(eurowings);
const booklh=book.bind(swiss);
const booksh=book.bind(lufstana);
bookEw(23,'raina');
//console.log(bookEw);
const bookEW23=book.bind(eurowings,123);
bookEW23('kholi');
bookEW23('rohit');
//with eventlistener
lufstana.planes=400;
lufstana.buyPlane=function(){
    this.planes++;
    console.log(this.planes);
};
lufstana.buyPlane();
document.querySelector('.buy').addEventListener('click',lufstana.buyPlane.bind(lufstana));
//partial application
const addTax=(rate,value)=>value+value * rate;
console.log(addTax(1,200));
const addVAT=addTax.bind(null,0.23);
//const addVAT=value=>value+value*0.23;
console.log(addVAT(130));
console.log(addVAT(70));

//closer function--->Explanation in note
const secureBooking=function(){
    let passengerCount=0;
    return function(){
        passengerCount++;
        console.log(`${passengerCount} Passengers`);
    }
}
const booker=secureBooking();
booker();
booker();
booker();
console.dir(booker);//same as console.log
let f;
const g=function(){
    const a=23;
    f=function(){
        console.log(a*2);
    }
}
const h=function()
{
    const b=234;
    f=function()
    {
        console.log(b*2);
    }
}
g();
f();
console.dir(f);
//reassigning f function
h();
f();
console.dir(f); 
//ex 2
const boardPassengers=function(n,wait){
    const perGroup=n/3;
    setTimeout(function () {
            console.log(`we are now boarding all ${n} passengers`);
            console.log(`There are 3 groups, each with ${perGroup} passengers`);
        },wait *1000);
    console.log(`will start boarding in ${wait} seconds`);
    };
    boardPassengers(180,3);