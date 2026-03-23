const fs = require("fs");
let input = fs.readFileSync(0).toString().split('\n').map(Number);
let sum = 0;
let cnt = 0;
let idx = 0;

while(true){
    n = input[idx];
    if(n>29 || n<20){
        break;
    }
    sum += n;
    cnt ++;
    idx ++;
}

console.log((sum/cnt).toFixed(2));