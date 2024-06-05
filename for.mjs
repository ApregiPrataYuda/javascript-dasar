let myData = [1,2,3,4,5];

for (let i = 0; i < myData.length; i++) {
    let element = myData[i];
    console.log(element);
}


// for of
const myObject = {
    name: 'John',
    age: 30
  };
  
  for (let key in myObject) {
    console.log(myObject[key]);
  }


//   for in
  const myArray = [1,2,3,4,5];

for (let val of myArray) {
  console.log(val);
}