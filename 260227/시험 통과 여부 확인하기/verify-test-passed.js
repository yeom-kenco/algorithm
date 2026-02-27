const fs = require("fs");
let N = Number(fs.readFileSync(0).toString().trim());

if (N>=80){
    console.log("pass");
}else{
    let x = 80 - N;
    console.log(`${x} more score`);
};