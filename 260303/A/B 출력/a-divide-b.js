const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().split(" ").map(Number);

let first = parseInt(A/B);
let other = "";
A %= B;
for (let i=0; i<20; i++){
    A *= 10;
    other += parseInt(A/B);

    A %= B;
}

console.log(first+"."+other);