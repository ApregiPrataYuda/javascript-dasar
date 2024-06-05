
//getter
let animal = {
    name: "Monkey",
    activity: "eats",
    food: "🍌",
    
    get eat() {
       return `${this.name} ${this.activity} ${this.food}`
    }
  }
  console.log(animal.eat) 




  //setter
  let animals = {
    name: "Monkey",
    activity: "eat",
    food: "🍌",
    
    get eat() {
       return `${this.name} ${this.activity} ${this.food}`
    },
    
    set eat(activity) {
       [this.name, this.activity, this.food] = activity.split(" ")
    }
  }
  animals.eat = "Squirrel eats 🥥"
  console.log(animals.name)
  console.log(animals.activity)
  console.log(animals.food)





//   class dengan getter setter
class Animalo {
    constructor(name) {
      this.name = name
     }
     
     get name() {
      // must use separeted property
      return this._name
     }
     
     set name(value) {
      if(value.length == 0) {
          console.log("Name can't empty")
          return
     }
      // must use separeted property
      this._name = value
     }
     
   }
   let Animals = new Animalo("carrot")
   console.log(Animals.name)
   animal = new Animalo("")
   
   