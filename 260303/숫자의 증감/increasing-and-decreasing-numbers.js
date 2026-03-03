const fs = require("fs");
let [C,N] = fs.readFileSync(0).toString().split(" ");
let result="";
N=Number(N);

if(C=='A'){
    for(let i=1;i<=N;i++){
        result += i+" ";
    }
}else{
    for(let i=N;i>=1;i--){
        result += i+" ";
    }
}
console.log(result);