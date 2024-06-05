function tesArg(...args) { 
    console.log('this is', ...args);
}
let a = 1;
let b = 3;
let cxz = 5;
let cx = a + b + cxz;
tesArg(cx);
