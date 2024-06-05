//objet literal Basic
let person = {
      //property
      name : "mark",
      age : 50,
      gender : "male"
}
console.log("Name " + person.name);
console.log("Age " + person.age);
console.log("Gender " + person.gender);


// //objet literal with func 
let person1 = {
    name : "mark z",
    age : 50,
    gender : "male",

    // method
    bio : function() { 
        console.log(`name we ${this.name} and age ${this.age} and gender ${this.gender}`)
    }
}
person1.bio();





// object constructor / class dengan metode lama es5
function persons(name,age,gender) { 
    this.name = name,
    this.age = age,
    this.gender = gender;

this.biodata = function () {
    return `Hii i ${this.name}  and my Age ${this.age} and gender ${this.gender}`;
};

this.print = function () {
    console.log(this.biodata());
};
 }

 
 let getDatas = new persons('via',20, 'male');
 getDatas.print()







// object constructor / class dengan metode terbaru es6
class person2 {
    constructor(name, age, gender) {
        // property
        this.name = name,
            this.age = age,
            this.gender = gender;

        this.biodata = function () {
            return `Hii i ${this.name}  and my Age ${this.age} and gender ${this.gender}`;
        };

        this.print = function () {
            console.log(this.biodata());
        };
    }
}

 let getData = new person2('budi',20, 'male');
 let getData1 = new person2('joko',21, 'male');
 let getData2 = new person2('putri',23, 'female');

 getData.print()
 getData1.print()
 getData2.print()