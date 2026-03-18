const fs = require("fs");
let N = Number(fs.readFileSync(0).toString());
let result = "";

for (let i=1 ; i<=N ; i++){
    if(String(i).split("").find(a => a == '3') || i%3==0){
        result += "0" + " ";
    }else{
        result += i + " ";
    }
}
console.log(result);