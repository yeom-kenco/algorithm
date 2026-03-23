const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let a = n;
let cnt = 0;

for(let i=1;i<=a;i++){
    if(n<=1){
        console.log(cnt);
        break;
    }
    n = n/i;
    cnt ++;
}