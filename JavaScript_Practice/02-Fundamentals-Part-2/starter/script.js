'use strict';/*
f='hi hello';// the variable type is does not declared(const f)
console.log(f);*/
//functions
function fruits()
{
    console.log("apple and orange is fruits");
}
fruits();
//funtion with arg
function fruitproce(apple,mango)
{
    const juice=`i have ${apple} apple and ${mango} mango juices`;
    return juice;
}
const fruitjuices=fruitproce(5,2);
console.log(fruitjuices);

function vechicles(bikes,cars)
{
    const vechiclestyp=`i have ${bikes} bikes and ${cars} cars so poda angutu`;
    return vechiclestyp;
}
const typ=vechicles(7,12);
console.log(typ);
//
function describeCountry(country,population,capitalCity)
{
    const descountry=`${country} has ${population} million people and its capital city is ${capitalCity}`;
    return descountry;
}
const descindia=describeCountry('india',250,'delhi');
const descrussia=describeCountry('russia',100,'mosscow');
const usa=describeCountry('america',95,'washinton d.c');
console.log(descindia,descrussia,usa);

//return the values
//function declaration && function expression

function percentageOfWorld1(population)
{
    return (population/7900)*100;
    
}
//function expression
const percentageOfWorld2=function(population)
{
    return (population/7900)*100;
}
const perportugal=percentageOfWorld2(10);
const perchina=percentageOfWorld2(1441);
console.log(perchina,perportugal);
//examples
function Answer(value)
{
    return (value-30)*25;
}
const perans1 = Answer(100);
const perans2=Answer(50);
console.log(perans1,perans2);
//
const Answer1=function(value1)
{
    return (value1-20)*2;
}
const perans3=Answer1(30);
const perans4=Answer1(40);
console.log(perans3,perans4)

//Arrow function
const Answer2= value2 => (value2-20)*2
const perans5=Answer2(30);
const perans6=Answer2(40);
console.log(perans5,perans6)
//arrow function
const percentageOfWorld3=population=>(population/7900)*100
const port1=percentageOfWorld3(465);
const port2=percentageOfWorld3(1441);
console.log(port1,port2);

//function calling other function


const describePopulation=function(country,population)
{
    const percentage=percentageOfWorld3(population);
    const descpopulation=`${country} has ${population} million people which is about ${percentage} of the world`
    console.log(descpopulation);
}
const descchina1= describePopulation('china',1441);

//coding challenge

const calcAverage=(a,b,c)=>(a+b+c)/3;
const dolphinscore=calcAverage(85,54,41);
const kalosscore=calcAverage(23,34,27);
console.log(dolphinscore,kalosscore);

const checkWinner=function(avgDolphis,avgkalos)
{
    if(avgDolphis>=2*avgkalos)
    {
        console.log((`dolphin team win ${avgDolphis} Vs. kalos team${avgkalos}`))
    }
    else if(avgkalos>=2*avgDolphis)
    {
        console.log(`kalos team win ${avgkalos} Vs. dolphins team${avgDolphis}`)
    }
    else
    {
        console.log('no teams win.......')

    }
}
checkWinner(dolphinscore,kalosscore)
//Array

const car1='hundai';
const car2='tata';
const car3='benz';
console.log(car2);
const bikes=['ROYAL ENFILED','TVS','YAMAHA','HONDA'];
const bikesnum=[76,72,79,89];
console.log(bikesnum);
console.log(bikes.length);  //lenght of the array
console.log(bikes);
console.log(bikes.length-2);
bikes[3]='suzuki';  //replacing the particular array element
console.log(bikes);
const truks='eicher';
const vech=[truks,'driver_name','sanjay',2023-2002,bikes.length,bikesnum[1]]; //using diff expression in one array element
console.log(vech);
//object
const sports={
        sportsname : "CRICKET",
        playername : "DHONI",
        jersyno : "7",
        nickname : "CAPTAIN COOL",
        friends : ['raina','kholi','hardik']


}
console.log(sports.sportsname);//dot notation
console.log(sports['playername']);//bracket notation
//in this method only used for bracket notation method it does not used for dot notation
const namekey = 'name';
console.log(sports['sports'+namekey]);
console.log(sports['player'+namekey]);
console.log(sports['nick'+namekey]);
//console.log(sports.'player'+namekey);//in this method does not work for dot notation it produce error
const details= prompt('what do you whant about sports? choose any one sportsname,playername,jersyno,nickname');
if(sports[details])
{
    console.log(sports[details]);
}else
{
    console.log("listla irukatha select panra venna");
}
//add a new element from an existing element in object using dot and bracket notation
sports.Bithplace='RANCHI';
sports['role']='FINISHER';
console.log(sports);

console.log(`${sports.playername} has ${sports.friends.length} friends and his best friend is ${sports.friends[0]}`);   
//create new another one object











