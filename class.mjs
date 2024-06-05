// Kelas
// Kelas adalah jenis fungsi, namun alih-alih menggunakan kata kunci fungsi untuk memulainya, kita menggunakan kata kunci kelas,
//  dan properti ditetapkan di dalam metode konstruktor(). Kelas adalah templat untuk membuat objek, dan mereka merangkum semua data dan fungsionalitas suatu objek di satu tempat.
//  Kelas digunakan dalam bahasa Pemrograman Berorientasi Objek (OOP), seperti JavaScript, untuk membuat objek. Dalam JavaScript,
//   kelas adalah warga kelas satu, yang berarti mereka diperlakukan seperti variabel lainnya, dan dapat diberi nilai apa pun, termasuk fungsi dan objek.

// Membuat Kelas
// Untuk membuat kelas, gunakan kata kunci class diikuti dengan nama kelas. Nama kelas harus menggunakan huruf kapital. 
// Metode konstruktor adalah metode khusus untuk membuat dan menginisialisasi objek yang dibuat dengan suatu kelas.
// Hanya ada satu metode khusus dengan nama “konstruktor” di sebuah kelas.
//  Konstruktor dapat menggunakan kata kunci super untuk memanggil konstruktor kelas induk.

// Membuat Instance Kelas
// Untuk membuat instance kelas, gunakan kata kunci baru diikuti dengan nama kelas. 
// Ini akan membuat objek baru. Kata kunci new membuat objek baru, 
// dan kemudian memanggil metode konstruktor pada objek tersebut.

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




//    Metode Statis
//    Metode statis adalah metode yang dikaitkan dengan kelas,
//     tetapi tidak dengan objek tertentu di kelas tersebut. Untuk membuat metode statis,
//     gunakan kata kunci statis sebelum nama metode. Metode statis berguna untuk fungsi utilitas, 
//     seperti fungsi untuk membuat atau mengkloning objek.

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



//   Warisan Kelas
//   Warisan kelas adalah cara untuk memperluas fungsionalitas suatu kelas dengan membuat kelas baru yang mewarisi dari kelas aslinya.
//    Kelas baru mewarisi semua metode dan properti dari kelas asli,
//    dan juga dapat memiliki metode dan properti tambahannya sendiri. 
//    Untuk membuat kelas yang mewarisi kelas lain, gunakan kata kunci extends.


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