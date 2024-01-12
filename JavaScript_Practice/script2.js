/*coding challenge 01
const markmass = 78;
const markheight= 1.69;
const johnmass=92;
const johnheight=1.95;
const markBmi= markmass/markheight ** 2;
const johnBmi= johnmass/(johnheight*johnheight);
const markHigherBMI=markBmi>johnBmi;
console.log(markBmi,johnBmi,markHigherBMI);
*/
//if..else stmnt coding chlnge2
const markmass = 78;
const markheight= 1.69;
const johnmass=92;
const johnheight=1.95;
//const markmass = 95;
//const markheight= 1.88;
//const johnmass=85;
//const johnheight=1.76;
let markBmi=markmass/markheight ** 2;
let johnBmi= johnmass/(johnheight*johnheight);
if(markBmi>=johnBmi)
{
    markBmi=`mark's bmi is higher (${markBmi}) then john's(${johnBmi})!`;
    console.log(markBmi);
}
else{
    johnBmi=`john's bmi is higher (${johnBmi}) then mark's(${markBmi})!`;
    console.log(johnBmi);
}
//coding chellange03
//const avrgedolphin= (96 + 108 + 89 ) / 3;
//const avrgekoalas= (88 + 91 + 110 ) / 3;
//console.log(avrgedolphin,avrgekoalas);
/*if(avrgedolphin>avrgekoalas && avrgedolphin)
{
    console.log("the winner is dolphin team");
}
else if(avrgekoalas>avrgedolphin)
{
    console.log("the winner is koalas team");
}
else if(avrgedolphin==avrgekoalas)
{
    console.log("the match is drawn");
}*/
const avrgedolphin= (97 + 112 + 101 ) / 3;
const avrgekoalas= (109 + 95 + 106 ) / 3;
console.log(avrgedolphin,avrgekoalas);
if(avrgedolphin>avrgekoalas && avrgedolphin>=100)
{
    console.log("the winner is dolphin team");
}
else if(avrgekoalas>avrgedolphin && avrgekoalas>=100)
{
    console.log("the winner is koalas team");
}
else if(avrgedolphin === avrgekoalas&&avrgedolphin>=100 && avrgekoalas>=100)
{
    console.log("the match is drawn");
}
else
{
    console.log("any one team is no win the trophy");
}

// emoji win+.


