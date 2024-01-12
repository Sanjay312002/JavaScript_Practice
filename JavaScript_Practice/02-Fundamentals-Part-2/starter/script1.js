const person ={
    firstName : 'sanjay',
    lastName : 'M',
    birthYear : 2002,
    Hobbies : ['cricket','editing','Adventure'],
    driveLicence : true,

    calcAge : function (birthYear)
{
    return 2023-birthYear;
}
};
console.log(person.calcAge(2002));
console.log(person['calcAge'](2002));
console.log(person.firstName);  
console.log(person['Hobbies']);
const namekey1='Name';
console.log(person['first'+namekey1]);
console.log(person['last'+namekey1]);

const human={
    firstName1 :'Joy',
    lastName1 : 'Kirana',
    brthYear : 2002,
    Hobies : ['dance','travel','editing','cricket'],
    job : 'student',
    driverlicense : true,

    calAge : function(){
        this.age=2023-this.brthYear;
        return this.age;

    },

    finans : function()
    {
        return `${this.firstName1}, is a ${this.calAge()}, old boy ${human.job}, and he has ${this.driverlicense ? 'a' : 'no'} license.`
    }
    
};
console.log(human.calAge());
console.log(human.finans());
let re;
for(re=0;re<=5;re++)
{
    console.log(`the daily routine of walking is ${re}rounds`);
}
//looping arrays
const san=[
    'sanjay',
    'murugan',
    2023-2002,
    ['cricket','football','videogames'],
    true
]
/*const hig=[]
for(let i=0;i<=san.length;i++)
{
    //read san array
    console.log(san[i],typeof(san[i]));
    //filling hig array
    hig[i]=typeof san[i];

}
console.log(hig);*/
//continue in for loop
for(let s=0;s<=san.length;s++)
{
    if(typeof san[s]!=='string')continue; //In this loop only print the string type of data if
    console.log(san[s],typeof san[s]);  //we change the type then thus type of data only print others will be skipped
}
console.log('----break with number');
console.log('---it means the number will be found then the loop will be completely terminated---');
for(let s=0;s<=san.length;s++)
{
    if(typeof san[s]==='number')break;// if you change the type of data it will break the stmnt based on the type 
    console.log(san[s],typeof san[s]); 
}

//loop in loop
for(let exam=1;exam<=3;exam++)
{
    console.log(`Assesment Exam is ${exam}`);
    for(let sub=1;sub<5;sub++)
    {
        console.log(`Subject Number is ${sub}`); 
    }
}
//looping backward
for(let i=san.length-1;i>=0;i--)
{
    
    console.log(i,san[i],typeof(san[i]));

}
//while loop
let rep=1;
while(rep<=10)
{
    console.log('hi hello welcome');
    rep++;
}