const fs = require("fs");
let [A,B]=fs.readFileSync(0).toString().split(" ").map(Number);
let result ="";
if(A>0){
    for(i=0;i<B;i++){
        result += `${A}`;
    }
    console.log(result);
}else{
    console.log(0);
}