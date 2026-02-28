const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());

if(n%2==1){
    console.log(31)
}else if(n%2==0){
    if(n==2){
        console.log(28)
    }else{
        console.log(30)
    }
}