/*In JavaScript numbers, strings, null, undefined and Booleans 
are primitive types which are immutable.Objects, arrays, 
functions, classes, maps, and sets are mutable.*/ 
//slice
let arr=['a','b','c','d','e','f'];
console.log(arr.slice(2));
console.log(arr.slice(2,5));
console.log(arr.slice(-2))//using - operator the array will be start last index 
console.log(arr.slice(-1))
console.log(arr.slice(-5,-2))
console.log(arr.slice())//we didnot mentioned any value it will return full values
console.log([...arr])//using spread operator
//splice
//console.log(arr.splice(2));//if we using splice after the original array will be deleted
console.log(arr.splice(2,3))
console.log(arr.slice(-1))
console.log(arr);//it will delete particular index of array value
//REVERSE
arr=['a','b','c','d','e','f'];
let arr2=['l','k','j','i','h','g'];
console.log(arr);
console.log(arr2)
console.log(arr2.reverse());//it reverse the string(immute the string)
//CONCAT-->(it does not mutate original array)
const alpha=arr.concat(arr2);
console.log(alpha);
console.log(...arr,...arr2);//(by using spread operator we concat)
//JOIN
console.log(alpha.join('-'));//it will join the diff arrays same as concat

//AT method(it also works on strings )
const arrnum=[23,76,34,65];
console.log(arrnum[1]);
console.log(arrnum.at(1));/* it will same as access the value using
index but we dont use square bracket[]*/
//getting an last element of an array
console.log(arrnum[arrnum.length-1]);//using this type we access last element of the array
console.log(arrnum.slice(-1)[0]);
console.log(arrnum.at(-1));
/* we use at or bracket notation is depend on ours at method
it will be advantage methodchaining method*/
console.log('sanjay'.at(0));

//foreach
const movements=[435,653,-234,5007,-450,345,765,-25,7000];
for(const[i, movement] of movements.entries())
{
    if(movement>0)
    {
        console.log(`Movement ${i+1}: You Deposited ${movement}`);
    }else{
    console.log(`Movement ${i+1}: You WithDrew ${Math.abs(movement)}`);
}
}
console.log('-----FOR EACH-------')
movements.forEach(function(mov,i,arr)//mov->current element,i->index
{
    
    if(mov>0)
    {
        console.log(`Movement ${i+1}: You Deposited ${mov}`);
    }else{
    console.log(`Movement ${i+1}: You WithDrew ${Math.abs(mov)}`);
}
});
/*for each->it will always loop entire array
for loop->if you really need to break out of a loop then
you have to keep using for loop*/
const euroTousd=1.1;
// const movementsUsd=movements.map(function(mov)
// {
//     return mov*euroTousd;
// });
//using same as but arrowfunction 
const movementsUsd=movements.map(mov=>
    mov*euroTousd);
console.log(movements);
console.log(movementsUsd);

 const movementsDescription=movements.map((mov,i,
 arr)=>{
     if(mov>0)
     {
         console.log(`Movement ${i+1}: You Deposited ${mov}`);
     }else{
     console.log(`Movement ${i+1}: You WithDrew ${Math.abs(mov)}`);
 }
 });
//using ternary operations
// const movementsDescription=movements.map{
//     (mov,i)=>
//         `Movement ${i+1}: You Deposited ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`
// };

//filter method
const deposits=movements.filter(function(mov){
return mov>0

});
console.log(movements);
console.log(deposits);
//filter method using for of 
const depositsFor=[];
for (const mov of movements) {
    if(mov>0)
    depositsFor.push(mov);
}
console.log(depositsFor);

 const withdrawels=movements.filter(function(mov)
 {
     return mov < 0
 });
console.log(withdrawels);

//filter method using for arrow function
//const withdrawels=movements.filter(mov=> mov<0);
//console.log(withdrawels);

//REDUCE METHOD
//accumulater -> is like snowball it temperorly store the value and return a value
/*accumulater->it is initialy stored one value after the loop it will be updated*/
const balance=movements.reduce(function(acc,cur,curi,arr){
    console.log(`Iteration ${curi}: ${acc}`);
    return acc+cur;
},0);/*in this program initial accumulater value is 0 and then first value is
435 it will be add acc and the after looping nxtvalue+acc value so the answer
of 2iteration is 1088 it will end until all value will be executed*/
/* if you changed initial value then the result based on accumulater*/
console.log(balance);

//without using builtin reduce method
let balance2=0;
for(const mov of movements) balance2+=mov;
console.log(balance2);

//using arrow function
const balance3=movements.reduce((acc,cur)=>acc+cur,0);
console.log(balance3);
//finding maximum value dont put accumulater value 
//maximum value
const max=movements.reduce((acc,cur)=>{
    if(acc>cur)
    return acc;
else
return cur;
});
console.log(max)

//find method
//it not return a new array it return a first element of the array
const firstwithdrawel=movements.find(mov => mov <0);
console.log(movements);
console.log(firstwithdrawel);//we set a limit for less then 0 so it return a first 
//negative element of the array
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
const accounts=[account1,account2,account3,account4];  
console.log(accounts);
const account=accounts.find(acc => acc.owner==='Jessica Davis');
console.log(account);

//findIndex
//it returns the index of the found element and not element itself

//flat and flatMap

const arr1=[[1,2,3],[4,5,6,7,8],9,10];//nested array
//it will put the all numbers in the nested array to put one big array
console.log(arr1.flat());
const arrDeep=[[1,[2],3],[4,5,[6,7],8],9,10];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));//in flat only certain depth limit it will be decompose
//but we put values in this method it will produce one big array
console.log(accounts);
const overalbalance=accounts.map(acc=>acc.movements)
.flat()
.reduce((acc,mov)=> acc+mov,0);
console.log(overalbalance);

//flatMap
//it only goes one level deep and we cannot change it
const overalbalance2=accounts.flatMap(acc=>acc.movements)
.flat()
.reduce((acc,mov)=> acc+mov,0);
console.log(overalbalance2);

//sorting arrays
//build in sort method is mutated
const frnds=['koushik','harsha','boopesh','siva','jai','naveen'];
console.log(frnds);
console.log(frnds.sort());
//numbers
console.log(movements);
console.log(movements.sort());//in this movement it will be
//does not properly sorting bcoz it will sorting based on string
//becoz it converts everything in string and sorting
//return < 0 , A , B (Keep order)
//return > 0 , B , A (switch order)
//Ascending order
movements.sort((a,b)=>{
    if(a>b)
    return 1;
    if(a<b)
    return -1;

});
console.log(movements)
//if a is greater then b the result will be positive no(a)then if b is
//greater then a it will produce negative(-b)
movements.sort((a,b)=>a-b);//(short method for above method)
console.log(movements)


//descending order
movements.sort((a,b)=>{
    if(a>b)
    return -1;
    if(a<b)
    return 1;

});
console.log(movements)
//if b is greater then a the result will be positive no(b)then if a is
//greater then b it will produce negative(-a)
movements.sort((a,b)=>b-a);//(short method for above method)
console.log(movements)

//using array constructor we create empty array with length of the array
console.log([1,2,3,4,5,6,7,8]);
console.log(new Array(5,6,7,8,90,2,3));
const x1=new Array();//we create empty array
console.log(x1);
const x2=new Array(7);//if we put the value in array the js take the value
//length if the array
console.log(x2);
//x2.fill(1);
 x2.fill(1,4);//using fill method we add a value in the empty array
//fill is similiar with slice method
console.log(x2);

