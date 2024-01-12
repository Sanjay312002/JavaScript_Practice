/*let js = "sanjay";
    alert("welcome");
    let first = ("sanjay welcome our website");
    let sec = ("hi hello");
    console.log(sec);
    console.log(first);
    */
//variables assign1
/* let country = "India";
    let continent = "Asia";
    let population = "250 millions"
    console.log(country);
    console.log(continent);
    console.log(population);*/
    /*typeof
    let firstName = true;
    console.log(firstName);
    firstName = 'hi hello';
    console.log(firstName);
    console.log(typeof true);
    console.log(typeof 'firstName');
    console.log(typeof 56);
    */
   /*
    let firstName = true;
    console.log(typeof firstName);
    firstName = 'hi hello';
    console.log(typeof firstName);
    let isIsland=true;
    let language;
    console.log(typeof isIsland);
    console.log(typeof population);
    console.log(typeof country);
    console.log(typeof language);
    let age = 31;
    age = 13;
    const birthYear = 2001;
    birthYear = 2002;
    var job = 'programmer';
    job = 'designer';
    */
    villageName = "Aravankudiyiruppu";
    console.log(villageName);
    //coding challenge 01
const markmass = 78;
const markheight= 1.69;
const johnmass=92;
const johnheight=1.95;
const markBmi= markmass/markheight ** 2;
const johnBmi= johnmass/(johnheight*johnheight);
const markHigherBMI=markBmi>johnBmi;
console.log(markBmi,johnBmi,markHigherBMI);
//string
const name="sanjay";
const birthYear=2002;
const job= "designer";
const currYear=2023
const bio="my name is "+name+" i am "+(currYear-birthYear)+" years old "+job;
console.log(bio);
//template literals
let te=`hi hello`;
console.log(te);
//template literals another one (replacing the cocotenate symbol using${})
const bionew=`i'm ${name} and i'm ${currYear-birthYear} years old ${job}`;
console.log(bionew);
//printing stmnt in next line
console.log('hi hello\n\
how are\n\
you');
console.log(`hi hello
how 
are u`)
/*
//control structure
const age=20;
let currAge;
if(age>=18)
{
 currAge="liscence will be approved";
}
else{
    currAge="the liscence will be not approveed";
}
console.log(currAge);
//type conversion
const birthY= '24';
console.log(Number(birthY)+30,birthY);
console.log(Number('hi'));
console.log(Number('7'));
console.log(typeof NaN);
//type coercion
console.log('hi' + 'hello' + '7');
console.log('50' - '30' - '7');
console.log('50' - '30' - 7);
console.log('50' + '30' + 7);
console.log('50' * '2');
console.log('77' / '7');
let n= '1'+10;//the number type 10 is converted to string and then add 1 result is 110
n=n-3;//n=110 then the string type 110 is converted into number value then sutract 110-3=107
console.log(n);//print the n
let e='5'-'3'-'2'+1+2;//0+3=3
e=e-'7';//3-7
console.log(e);//-4
let m=7-5+2+'5'//7-5+2=4 and add the value 5 4+5=45
m=m * 2;//45*2
console.log(m);
//truthy,falsy values
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
//truthy falsy values ex02
let money=1000;
if(money)
{
    console.log("I have lot of money");
}
else
{
    console.log("I don't have money");
}/*
//equality
const ag=20;
if(ag===20)
console.log("you become an adult");
else
console.log('you are kid');
const ag1='20';
if(ag1==20)
console.log("you become an adult");
else
console.log('you are kid');
*/
/*
const favrt=Number (prompt("enter ur favrt number:"));
console.log(favrt);
console.log(typeof favrt);
if(favrt===10)
{
    console.log("cool buddy 10 is super number");
}
else if(favrt==7)
{
    console.log("hey buddy i am 7");
}
else if(favrt===23)
{
    console.log("hi iam 23");
}
else
{
    console.log("i have no numbers");
}
if(favrt!=7)
console.log("oops!");*/
//logical operators
const drivinglicense=true;
const goodvision=true;
const istired=true;
//console.log(drivinglicense&&goodvision);
//console.log(drivinglicense||goodvision);
//console.log(!goodvision);
if(drivinglicense&&goodvision&&istired)
//if(drivinglicense&&goodvision&&!istired)
//if(drivinglicense||goodvision||istired)
//if(drivinglicense&&goodvision||istired)
{
    console.log("the license has been approved");
}
else{
    console.log("the license has been denied");
}
/*
//chellange
const day='hi';
console.log(day)
if(day==='monday')
{
    console.log('1st day');
}
else if(day==='tuesday')
{
    console.log('2nd day');
}
else if(day==='wednesday')
{
    console.log('3rd day');
}
else if(day==='thursday')
{
    console.log('4th day');
}
else if(day==='friday' || day==='saturday')
{
    console.log('5th day');
}
else if(day==='sunday')
{
    console.log('7th day');
}
else{
    console.log('poda angutu')
}
*/
//switch stmnt
const day='hi';
console.log(day)
switch(day)
 {
    case 'monday':
            console.log("hi");
            break;
        case 'tuesday' :
            console.log('hello');
            break;
            case 'wednesday':
                case 'thursday':
                    console.log("how are you");
                    break;
                    case 'friday':
                        case 'saturday':
                            console.log('what is ur name');
                            break;
                            case 'sunday':
                                console.log('what is ur age');
                                default:
                                    console.log('poda angutu');
                                    break;
 }

 const age=13;
const drink = age >=18 ? "i like drink wine" : "i like drink water";
console.log(drink);
//step 2
const age1=47;
age1>=18 ? console.log('i like drink wine') : console.log('i like drink water');
console.log(`i like to drink beacuse ${age >=18 ? "i like drink wine" : "i like drink water"}`)

