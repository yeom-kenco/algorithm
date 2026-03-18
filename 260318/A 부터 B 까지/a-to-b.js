const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().split(" ").map(Number);
let result = "";

while (A<=B){
    if(A%2==1){
        result += A + " ";
        A *= 2;
    }else {
        result += A + " ";
        A += 3;
    }
}
console.log(result);