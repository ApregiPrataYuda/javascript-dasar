//class js
class person{
    constructor(names) {
        this.names = names
    }

    call(){
        console.log(`${this.names}`);
    }
}

 let x = new person('dfdfdf');
   x.call();






//    class Static Methods
   class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  
    static generateName() {
      const names = ['John', 'Jane', 'Bob'];
      const index = Math.floor(Math.random() * names.length);
      return names[index];
    }
  }
  
  const name = Person.generateName();
  console.log(name);






  //class pewarisan inheritance
  class Persons {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  class Student extends Persons {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  }
  
  const student1 = new Student('John', 30, 'A');
  console.log(student1);