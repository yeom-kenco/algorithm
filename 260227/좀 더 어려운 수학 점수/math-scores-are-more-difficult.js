const fs = require("fs");
let [A, B] = fs.readFileSync(0).toString().trim().split("\n");

let [A_math, A_eng] = A.split(" ").map(Number);
let [B_math, B_eng] = B.split(" ").map(Number);

if (A_math>B_math){
    console.log("A");
} else if((A_math===B_math) && (A_eng > B_eng)){
    console.log("A");
} else{
    console.log("B");
}
