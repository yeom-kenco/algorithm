const fs = require("fs");
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

if(a<b){
    result_1=1
}else{
    result_1=0
}

if(a===b){
    result_2=1
}else{
    result_2=0
}

console.log(result_1,result_2)