//function biasa
function sayHello(){
    console.log("Hello World!");
}
// memanggil fungsi
sayHello() 

//function Ekspresi
    let x = function () {
         console.log("Hello World!"); 
        }
      x();
    
//arrow function
  let v = () => {
    console.log("Hello Worlds!"); 
  }
   

  let juml = (a,b) => { 
    let jumlahkan =  a + b;
    console.log(jumlahkan);
    
  }
  juml(2,1);

  let zs = function(a,b) { 
    let jumlahkan =  a + b;
    console.log(jumlahkan);
   }
   zs(2,1);

function sum(a,b) { 
    let jumlahkan =  a + b;
    console.log(jumlahkan);
 }
 sum(1,1);

  x();
  y();
  z();




  function js(a,b) {
        let res = a + b;
        return res
  }
    let xs = 1;
    let zx = 4;
    let jumls = js(xs, zx);
      console.log(jumls);


      let arrfun = (a,b) => {
           let x = a + b;
           return x;
      }
       let c = 2;
       let d = 2;
       let hsil = arrfun(c,d)
       console.log(hsil);


       let sayName = n => {
                console.log('Holla ' + n);
       }
       sayName('fdfd')