const fs = require("fs");
let [A,B] = fs.readFileSync(0).toString().trim().split("\n");
let [A_age, A_sex] = A.split(" ");
let [B_age, B_sex] = B.split(" ");

if((Number(A_age)>=19&&A_sex=="M")||(Number(B_age)>=19&&B_sex=="M")){
    console.log(1);
}else{
    console.log(0)
}
