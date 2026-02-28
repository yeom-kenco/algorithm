const fs = require("fs");

let [a,b,c] = fs.readFileSync(0).toString().split("\n");

let [a_cold, a_temp] = a.split(" ");
let [b_cold, b_temp] = b.split(" ");
let [c_cold, c_temp] = c.split(" ");

let count_A=0;

if(a_cold==="Y"&&Number(a_temp)>=37){
    count_A++;
}
if(b_cold==="Y"&&Number(b_temp)>=37){
    count_A++;
}
if(c_cold==="Y"&&Number(c_temp)>=37){
    count_A++;
}

if(count_A>=2){
    console.log("E");
}else{
    console.log("N");
}
