const airline='Tap Air India';
const plane='A072';
console.log(plane[0]);
console.log(airline[4]);
console.log(airline[5]);
console.log(airline[6]);
console.log(airline[7]);
console.log(airline[8]);
console.log(airline.length);
console.log(plane.length);
console.log('B0231'.length);
console.log(airline.indexOf('i'));
console.log(airline.indexOf('I'));
console.log(airline.lastIndexOf('i'));
console.log(airline.indexOf('air'));//it is casesensitive if we use opposite caseletters it will return -value(-1)
console.log(airline.indexOf('Air'));
console.log(airline.slice(4));
console.log(airline.slice(4,7));
//using space we extract the string
console.log(airline.slice(0,airline.indexOf(' ')));//0 means index of the string so it will be start 0th index
console.log(airline.slice(airline.lastIndexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));//adding +1 we remove the unnecessary space
console.log(airline.slice(-2));//it will start from last character
console.log(airline.slice(1,-1));//start from positive to negative
const middleSeatcheck=function(seat){
    //B & E are middleseats
    const s=seat.slice(-1);
    if (s==='B'||s==='E'){
        console.log('You Got The Middle Seat');
    } else {
        console.log('You Got Lucky');
    }

}
middleSeatcheck('11B');
middleSeatcheck('23c');
middleSeatcheck('3E');
console.log(new String('kirana'));
console.log(typeof new String('kirana'));
//fix capitalization in name
const passenger='saNjaY';//->sanjay
const passengerLower=passenger.toLowerCase();
const passengerCorrect=passengerLower[0].toUpperCase()+passengerLower.slice(1);
console.log(passengerCorrect);
const email='hello@kirana.io';
const logemail=' Hello@Kirana.Io \n';
const loweremail=logemail.toLowerCase();
const trimmedmail=loweremail.trim();
console.log(trimmedmail);
console.log(loweremail);
const normalizedemail=logemail.toLowerCase().trim();
console.log(normalizedemail);
console.log(email===normalizedemail);
//replacing
const priceBri='245,45£'//(windows+.)
const pricedol=priceBri.replace('£','$').replace(',','.');
console.log(priceBri);
console.log(pricedol);
const announcement='All passengers come to boarding room 23,boarding door 23!';
console.log(announcement.replace('room','gate'));
console.log(announcement.replaceAll('room','gate'));
//booleans(true/false)
const tr="Airbus boeing234pickachu";
console.log(tr.includes('boi'));
console.log(tr.includes('hi'));
console.log(tr.includes('Air'));
console.log(tr.includes(23));
if(tr.startsWith('Air') && tr.endsWith('pickachu'))
{
    console.log('Welcome to our airbus family');

}
const checkBackage=function(items){
const backage=items.toLowerCase();
if(backage.includes('Knife')|| backage.includes('gun'))
{
    console.log('You are not allowed onBoard');
}else{
    console.log("welcome to onboard");
}
}
checkBackage('I have a laptop, some Food and a PocketKnife');
checkBackage('socks and camera');
checkBackage('Got some snacks and a gun for protection')
