const fs = require("fs");
let N = Number(fs.readFileSync(0).toString());

let sum = 0;

for(let i=1;i<N;i++){
    if(N%i==0){
        sum += i;
    }
}

if(sum==N){
    console.log('P');
}else{
    console.log('N');
}