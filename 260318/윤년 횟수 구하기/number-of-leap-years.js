const fs = require("fs");
let N = Number(fs.readFileSync(0).toString());

let cnt = 0;
let cntExcept = 0;

for(i=1;i<=N;i++){
    if(i%4==0){
        cnt++
    }
    if(i%4==0&&(i%100==0 && i%400!=0)){
        cntExcept++;
    }
}
console.log(cnt-cntExcept);