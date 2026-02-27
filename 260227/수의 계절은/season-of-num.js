const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

if(N>8 && N<12){
    console.log("Fall");
}else if(N>5){
    console.log("Summer");
}else if(N>2){
    console.log("Spring");
}else{
    console.log("Winter");
}