//short circuting
const openingHours ={
    mon :{
        open :8,
        close :4
    },
    tue :{
        open : 9,
        close :5
    },
    wed :{
        open : 10,
        close :3
    }
};
console.log('sanjay'|| 3);
console.log(''||'sanjay');
console.log(true||0);
console.log(undefined||null);
let restaurent={
    name : 'indian classic',
    location : '79,dubai street,america',
    starter_menu : ['breakfast','lunch','dinner'],
    main_menu : ['dosa','idly','parotta','chappati'],
    categories : ['indian','chinese','western'],
openingHours,
    order :function(starterIndex,mainIndex){
        return [this.starter_menu[starterIndex],this.main_menu[mainIndex]];
    },
    orderPasta : function(ing1,ing2,ing3)
    {
        console.log(`here is your delicious pasta${ing1},${ing2},${ing3}`);

    },
    orderPizza : function(mainIngrediants,...otherIngrediants)
    {
        console.log(mainIngrediants);
        console.log(otherIngrediants);
    },
};
restaurent.numguests=30;
//normal conditonalstatement
const guests=restaurent.numguests?restaurent.numguests:30;
console.log(guests);
//short circutingmethod with OR operator
const guests1=restaurent.numguests||22;
console.log(guests1);
//nullish coalescing operator[it will return right-hand value if the left hand value is null or undefined(not 0 and emptystring'')
//if it not null or undefined it will return left hand value ]
function foo(bar){
     bar=bar??55; 
    console.log(bar);
}
foo(); //if we pass empty arguement(null) so the left hand value is null(bar??55->''??55) so it will return right hand value 55
foo(77);//if we pass 77 to foo function so it is not null(bar??55->77??55) so the value 77 will be print
/*another example of nullishcoalecing*/restaurent.numguests=0;
const correctguest=restaurent.numguests??30;
console.log(correctguest);
//logical assignmentoperator
const res1={
    name : 'harsha',
    numguests : 0
};
const res2={
    name : 'boopesh',
    owner : 'boopesh_sivasamy'
};
//res1.numguests=res1.numguests||15;
//res2.numguests=res2.numguests||15;
/*logical assignment operator
res1.numguests||=30;
res2.numguests||=30;
console.log(res1);
console.log(res2);*/
//logical nullish coalescing operator null or undefined(not 0 and empty string)
res1.numguests??=25;
res2.numguests??=25;
console.log(res1);
console.log(res2);
res1.owner=res1.owner && '<Anonymous>';
res2.owner=res2.owner && '<Anonymous>';
/* shortly assign this format
res1.owner&&='<Anonymous>';
res2.owner&&='<Anonymous>';*/
console.log(res1);//in res1 we have not declare owner name so it will return undefined
console.log(res2);
//for..of loop array
let cars=['BMW','LAMBOGINI','AUDI'];
let newCar="";
for(let one of cars){
    newCar +=one;
    console.log(one);
}
//2 string
let boys="EXPLORERS";
let two="";
for(let exp of boys){
    two +=boys;
    console.log(exp);
}
const menu=[...restaurent.starter_menu,...restaurent.main_menu];
console.log(menu);
//for(const item of menu)console.log(item);
for(const item of menu.entries())
{console.log(`${item[0]+1}:${item[1]}`);}//in this step we use destructure format 
for(const[i,el] of menu.entries()){
    console.log(`${i+1}:${el}`);
}
//optional chaining
//optional chaining with object
let user={
    dog:{
        dogName : "alex"
    }
};
console.log(user.dog?.dogName);//alex
console.log(user.cat?.dogName);//undefined
//optional chaining with function
let user1=function(){
    console.log('alexa');
} 
let user2={
    dog1(){
        console.log('i am alexa');
    }
}
user1?.();       
user2.dog1?.();
//looping objects
//property names
const properties=Object.keys(openingHours);
console.log(properties);
let openre=`we are open on ${properties.length}days: `;
for (const day of properties)
{
    openre += `${day},`
    
}
console.log(openre);
//property values
const values=Object.values(openingHours);
console.log(values);
//entries object
const entries=Object.entries(openingHours);
console.log(entries);
for (const [days,{open,close}]of entries){
    console.log(`on ${days} we open at ${open} and close ${close}`);
}
//set
const orderset=new Set(['dosa','briyani','friedrice',
'parotta',
'briyani',
'friedrice']);
console.log(orderset);//set dont allow duplicate
console.log(orderset.add('omelate'));
console.log(orderset.add('kalakki'));
console.log(orderset.add('omelate'));
console.log(orderset.has('omelate'));
console.log(orderset.has('idly'));
orderset.delete('kalakki');
console.log(orderset);
for(const order of orderset)console.log(order);
const staff=['manager','chief','waiter','manager','chief','waiter'];
console.log(staff);
const uniquestaff=[...new Set(staff)];//spread operator make an array
console.log(uniquestaff);
console.log(new Set(['manager','chief','waiter','manager','chief','waiter']).size);//if we use this type we dont create uniquestaff
console.log(new Set('sanjayexplorers').size);
//map
const rest=new Map();
rest.set('name','explorers indian');
rest.set(1,"texas,USA");
console.log(rest.set(2,"miami,USA"));
rest.set('categories',['Veg','Non-Veg','Chiniese'])
.set('open',10)
.set('close',11)
.set(true,'We are open')
.set(false,'We are closed');
console.log(rest.get('name'));
console.log(rest.get(2));
console.log(rest.get('categories'));
console.log(rest.get('open'));
console.log(rest.get(true));
console.log(rest.has('categories'));
rest.delete(1);
console.log(rest);
const arr=[1,2];
rest.set(arr,'test')
console.log(rest);
console.log(rest.size);
rest.set(document.querySelector('h1'),'heading');
console.log(rest);
//map iterations
const hi=new Map([['question','what is the best programming language'],
[1,'c'],
[2,'java'],
[3,'javascript'],
['correct',3],
[true,'correct'],
[false,'try again']]);
console.log(hi);
//convert object to map
console.log(Object.entries(openingHours));//normal callback 
const hoursmap=new Map(Object.entries(openingHours));//convert object to map
console.log(hoursmap);
//map is also iterables 
console.log(hi.get('question')); 
for(const[key,value] of hi)
{
    if( typeof key==='number')
        console.log(`Answer ${key} : ${value}`);
}
//const Answer=Number(prompt('Your Answer is'));
const Answer=2;
console.log(Answer);
console.log(hi.get(hi.get('correct')===Answer));
//convert map to array
console.log([...hi]);
//without using spread operator
console.log(hi.entries());
console.log(hi.keys());
console.log(hi.values());

