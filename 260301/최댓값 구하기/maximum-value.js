const fs = require("fs");
let [a,b,c] = fs.readFileSync(0).toString().split(" ").map(Number);

let max = -100;
if(a>=max){
    max = a;
}
if(b>=max){
    max = b;
}
if(c>=max){
    max = c;
}
console.log(max);