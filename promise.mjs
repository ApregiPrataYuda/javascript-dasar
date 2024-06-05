// const p = new Promise((resolve, reject) => {
//        const a = 1 + 1;
//        if (a == 2) {
//           resolve('success')
//        }else{
//          reject('err')
//        }
// })

//   p.then((pesan) => {
//        console.log('hasil true ' + pesan);
//   }).catch(() => {
//     console.log('hasil false ' + pesan);
//   })

let result = false;
const p = new Promise((resolve, reject) => {
        if (result) {
            setTimeout(() => {
                resolve('hasil true');
            }, 3000);
        }else{
            setTimeout(() => {
                reject('hasil false');
          }, 5000);
        }
})
p.then(response => {
     console.log('oke ' + response);
}).catch(response => {
    console.log('not oke ' + response);
})
