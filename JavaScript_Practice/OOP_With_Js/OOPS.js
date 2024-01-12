'use strict';
const Person=function(firstName,birthYear){
    this.firstName=firstName;
    this.birthYear=birthYear;

    //never create method inside the constructor func
    //never to this (so we use prototype&prototype inheritence)
    // this.calcAge=function(){
    //     console.log(2024-this.birthYear);
    // };
};
const Sanjay=new Person('sanjay',2002);//sanjay is an instance of an person
console.log(Sanjay)

// 1.New{} is created
// 2.function is called, this={}
// 3.{} linked to prototyfa-pull-left
// 4.function autometically return {}
const Boopesh=new Person('Boopesh',2002);
const Harsha=new Person('harsha',2002);//boopesh & harsha also include instance of an person
console.log(Boopesh,Harsha);

// instanceof using this we check the variable is instance or not
 console.log(Sanjay instanceof Person);//true
 console.log(Boopesh instanceof Person);//true
 const jay='jay';
 console.log(jay instanceof Person);//false

 console.log(Person.prototype )
 //Prototype
 Person.prototype.calcAge=function(){
    console.log(2024-this.birthYear);
    
 }
 Sanjay.calcAge();
 console.log(Person.prototype.isPrototypeOf(Boopesh));
 console.log(Person.prototype.isPrototypeOf(Harsha));
 console.log(Person.prototype.isPrototypeOf(jay));

 