const fs = require("fs");
let [gender, age] = fs.readFileSync(0).toString().split("\n");

if(gender == 0){
    if(Number(age)>=19){
        console.log("MAN")
    }else{
        console.log("BOY")
    }
}else{
    if(Number(age)>=19){
        console.log("WOMAN")
    }else{
        console.log("GIRL")
    }
}
