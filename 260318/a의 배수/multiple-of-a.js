const fs = require("fs");
let [N, a] = fs.readFileSync(0).toString().split(" ").map(Number);
let i = 1 ;

while (i<=N){
    if(i%a == 0){
        console.log(1);
    }else{
        console.log(0);
    }
    i++;
}