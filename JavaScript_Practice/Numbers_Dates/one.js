//numbers are always stored in binaryformat(0,1)
console.log(0.1+0.2);
console.log(3/10);
//convert string to no(conversion)
console.log(Number('27'));
console.log(typeof Number('27'));
//using + operator we convert string to no
//bcoz js see +operator it will do type coercion(autometic convert string to no )
console.log( typeof +'25');
//parsing
//it actuall also so-called globalfunction
console.log(Number.parseInt('30px',10));
console.log(Number.parseInt('k27',10));
console.log(Number.parseInt(' 2.5rem'));
console.log(Number.parseFloat('2.45rem'));

//check if value is not a number
console.log(Number.isNaN(20));//it will be check no or not
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20'));
console.log(Number.isNaN(22/0));
//checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20'));
console.log(Number.isFinite(20/0));
console.log(Number.isFinite(77));
console.log(Number.isFinite(77.5));
console.log(Number.isFinite(77/2));

//MATH AND ROUNDING
//MATH
//ROUNDING

//square root
console.log(Math.sqrt(25));
console.log(Math.sqrt(49));
//find square value without using sqrt method
console.log(25**(1/2));
console.log(49**(1/2));
console.log(27**(1/3));//quebe value
//find max value
console.log(Math.max(4,54,6,78,23,2,56));
console.log(Math.max(4,54,'87',6,78,23,2,56));//js will autometically make type coversion
console.log(Math.max(4,54,6,'78px',23,2,56));
//find min value
console.log(Math.min(4,54,6,78,23,2,56));
//if we want find radius Of circle
//math.random-->it will produce random numbers in every time
//trunc->it produce decimal value to integer value randomly
console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log(Math.trunc(Math.random()*6)+1);
//random numbers in within the range  
const randomInt =(min,max)=>
    Math.trunc(Math.random()*(max-min)+1)+min;
console.log(randomInt(10,20));

//rounding integers
//in this all the methods do type coercion
//both trunc and floor is very similiar
console.log(Math.trunc(23.8));//23
console.log(Math.round(23.2));//23
console.log(Math.round(23.7));//24
console.log(Math.ceil(23.2));//24
console.log(Math.ceil(23.8));//24
console.log(Math.floor(23.2));//23
console.log(Math.floor('23.8'));//23
//but in negative no both trunc and floor will be diff 
console.log(Math.trunc(-23.2));
console.log(Math.floor(-23.2));

//rounding decimals(it works little diff way)
//primitive types actually dont have methods
 console.log((3.7).toFixed(0));//toFixed alwaus return a string not a number
 console.log((3.7).toFixed(3));
 console.log((3.7).toFixed(3.5));
 console.log(+(3.725).toFixed(2))//in this step it will again convert number because we add + operator

//Remainder(returns the remainder of the division)
console.log(5 % 2);
console.log(7 % 2);
console.log(7 / 2);
//const isEven = n => n%2===0;//using arrow function
const isEven=function(n)//using normal function
{
  return  n%2===0;
}
console.log(isEven(4));
console.log(isEven(3));
console.log(isEven(6));
console.log(isEven(7));
console.log(isEven(24));

//numeric seperator(easily read longdigit format)
//using , instance of we use _(underscore)
const diameter=546728537456;
console.log(diameter);
const diameter1=546_728_537_456;//but in the output it will display without underscore
console.log(diameter1);
const diameter2=5_46_728_537_456;
console.log(diameter2);//but using underscore in starting of the no or ending of the no or continueosly use it provide error 
console.log(Number('234567'));
console.log(Number('23_45_67'));//but in string it doesnot suported
//bcoz js doesnot properly parsing
console.log(parseInt('23_45_67'));//using parseInt method it only take before the no in first underscore

//BigInt 
//it is a special type of integers introduce2020
//number(the total bit size is 64)--the limit of the number size is 53 bits
//example
console.log(2**53-1);
console.log(Number.MAX_SAFE_INTEGER);//any number larger then this its not safe 
//it does not represently accurately
//BIGINT 
//stands for biginteger store number as large as we want
console.log(8765432345678976543234567);
console.log(8765432345678976543234567n);//if we add n in lastly it will
//take as bigint number(transform regular num into bignum)

//using bigint function we create bigint number without add n
console.log(BigInt(876543234567897));
//operations(using bigint we make some operations)
console.log(1000n + 1000n);
console.log(876543234567897n * 1000n);
//but we does not make any operations regular number(other types) and bigint number
const binum= 876543234567897n;
const regnum=1000;
//const res=binum+regnum;
//console.log(res);
//but we using bigint constructor we convert other type number into
//bigint number and make operations
const binum1= 876543234567897n;
const regnum1=1000;
const res1=binum1+BigInt(regnum1);
console.log(res1);
//but comparission operator and + operator when working string will work in bigint and other type data
console.log(25n > 7);
console.log(20n===20);//it does not work
console.log(typeof 20n);
console.log(binum + "is really big");
console.log(10n / 3n);//it will cut the decimal point
console.log(10/3);

//DATES AND TIME
//creating a date(there are 4ways in js)
//1.using constructor
const now=new Date();
console.log(now);
//2.we can pass the string
console.log(new Date('Thu Sep 28 2023 09:31:56'));
//3.write a string ourselves
console.log(new Date('Aug 15, 2025'));
//in js the month will be start 0 based(month 6 is not june its july)
console.log(new Date(2024, 6, 31, 7,45,32));
//js it will autocorrect the days it means example:june has no 31 days
//but if you mentioned june 31 the js will be take as july 1
console.log(new Date(2024, 5, 31, 7,45,32));//output->Mon Jul 01 2024 07:45:32 GMT+0530 (India Standard Time)

//working with dates
const future=new Date(2027,8,8,15,23);
console.log(future);
console.log(future.getFullYear());//it will return only year
console.log(future.getMonth());//it will return only month(month starting from 0)
console.log(future.getDate());//it will return date
console.log(future.getDay());//it will return day of the week it is same as start with 0(0-sunday)
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());//international standard
console.log(future.getTime());
console.log(new Date(1820397180000));
console.log(Date.now());
future.setFullYear(2042);//same as time,month
console.log(future);

//operations with date
const future1=new Date(2027,8,8,15,23);
console.log(future1);
console.log(+future1);/*/(1000(convert to millisecond to second)
 *60(convert to minutes) * 60(convert to hours) * 24(convert to days) )*/ 
const calcdayPassed=(date1,date2) => Math.abs(date2-date1)/(1000* 60 * 60 * 24);
const days1=calcdayPassed(new Date(2025,7,24),new Date(2025,7,12))
console.log(days1);//it will return output in millisecods
//math.abs--it will

//SET TIMEOUT AND SETINTERVAL(1second=1000millisecond)

//it is an callback function
setTimeout(()=>console.log('here is your pizza')
,5000);//in this line wait for 5seconds
console.log('waiting.....');//after 3 sec it will displayed//it is asynchronous
setTimeout((ing1,ing2)=>console.log(`here is your pizza with ${ing1} and ${ing2}`)
,3000,'olives','spinch');//in this line wait for 3seconds
console.log('waiting.....');//after 3 sec it will displayed//it is asynchronous
 /*the two method will be same but 1st one is without passing argument
and second one is pass the arguements*/

//set interval
//in each second it will be created new(current)dateand time
setInterval(function(){
  const now=new Date();
 // console.log(now);
},3000);//each 3 seconds it will be print
 






















































