let restaurent={
    name : 'indian classic',
    location : '79,dubai street,america',
    starter_menu : ['breakfast','lunch','dinner'],
    main_menu : ['dosa','idly','parotta','chappati'],
    categories : ['indian','chinese','western'],
    openingHours :{
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
    },
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
//DESTRUCTURING OBJECT
const {name,categories,openingHours}=restaurent;
console.log(name,categories,openingHours);
const{name :restaurentName,openingHours:hours,categories:tags}=restaurent;
console.log(restaurentName,hours,tags);
const { menu=[],starter_menu:starters=[]} =restaurent;
console.log(menu,starters);
let t=34;
let o=22;
let obj={t:20,o:25,c:30};
({t,o}=obj);
console.log(t,o);
//nested objects
const{wed:{open,close},}=openingHours;
console.log(open,close);
const [first,second]=restaurent.starter_menu;//if we use 2variables so in location array only printed 2values
console.log(first,second);
let [third, ,fourth]=restaurent.main_menu;//in using 2variable we doesnot declare any value instead of empty space so it skip the second value
console.log(third,fourth);
const arr=[1,2,3];
const a=arr[0];
const b=arr[1];
const c=arr[2];
const[x,y,z]=arr;
console.log(x,y,z);
//switching variables
[third,fourth]=[fourth,third];
console.log(third,fourth);
//recive 2 return value from an function
const [starter,main]=restaurent.order(2,3)
console.log(starter,main);
//nested
const nes=[1,2,[3,4]];
//const[k, ,i]=nes;
//console.log(k,i);
const[k, ,[l,m]]=nes;
console.log(k,[l,m]);
//default value
const[p,q,r]=[1,2,3];
console.log(p,q,r);
//spread operator
const arr1=[3,4,2];
const arr2=[5,6,7,arr1[0],arr1[1]];
console.log(arr2);
const newArr=[1,2, ...arr1];//spread operated using this dot(.)we represented the values
console.log(newArr);
const neMenu=[...restaurent.main_menu,'chicken'];//in spread operator doesnot create newvalues it takes the all element from the array
console.log(neMenu);
//copy array
const copyMainmenu=[...restaurent.main_menu]
console.log(copyMainmenu);
//joining 2arrays
const menuCopy=[...restaurent.main_menu,...restaurent.starter_menu];
console.log(menuCopy);
//Iterables: arrays,string,maps,sets except objects(it is not iterables)
const str='sanjay';
const strar=[...str,'','K.'];
console.log(strar);
console.log(...str);
//call the method
/*const ingrediants=[prompt("let's make pasta: Ingredient 1?"),
prompt('Ingredients 2?'),
prompt('Ingredients 3?')];
console.log(ingrediants);
//normal method using call the function
restaurent.orderPasta(ingrediants[0],ingrediants[1],ingrediants[3]);
//using spread operator call the function
restaurent.orderPasta(...ingrediants);*/
//object
const newRestaurent={
    FoundedIn :2002,
    ...restaurent,
    Founder : 'Murugan'
}
console.log(newRestaurent);
const restaurentCopy={
    ...restaurent
};
restaurentCopy.name='Kirana Restaurent';
console.log(restaurentCopy.name);
console.log(restaurent.name);
//rest element
const ki=[1,2, ...[3,4,5]];
const[ra,na,...others]=[1,2,3,4,5,6,7];
console.log(ra,na,others);
const[dosa,idly,...otherFood]=[
    ...restaurent.main_menu,
    ...restaurent.starter_menu
];
console.log(dosa,idly,otherFood);

const add=function(...numbers){
let sum=0;
for(let i=0;i<numbers.length;i++)
sum+=numbers[i];
console.log(sum);
}
add(3,4);
add(4,5,6,7);
add(4,5,7,8,9,0);
const xa=[2,3,5];
console.log(...xa);
add(...xa);
restaurent.orderPizza('onions','noodles','potato','mushrooms');
