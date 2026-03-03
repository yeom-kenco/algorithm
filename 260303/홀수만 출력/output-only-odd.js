const fs = require("fs");
let [A, B]= fs.readFileSync(0).toString().split(" ").map(Number);

let result = "";
for (let i=A; i<=B; i+=2){
    result+=i+" ";
}
console.log(result);