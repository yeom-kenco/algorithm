const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let result = "";

for (let i=0; i<n; i++){
    result = "";
    for (let j=0; j<i+1; j++){
        result += "*" +" ";
    }
    console.log(result);
}