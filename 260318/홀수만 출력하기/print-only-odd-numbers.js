const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n").map(Number);

let N = input[0];

for (let i=0;i<N;i++){
    if(input[i+1]%2==1 && input[i+1]%3==0){
        console.log(input[i]);
    }
}