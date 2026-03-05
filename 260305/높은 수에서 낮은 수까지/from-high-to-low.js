const fs = require("fs");

let [A, B] = fs.readFileSync(0).toString().split(" ").map(Number);
let result ="";

if (A>=B){
    for(let i=A; i>=B; i--){
        result+= i+" ";
    }
}else{
    for(let i=B; i>=A; i--){
        result+= i+" ";
    }
}
console.log(result);