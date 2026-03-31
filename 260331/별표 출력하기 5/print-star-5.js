const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let result = "";
let sub_result = "";

for (let i = n; i > 0; i--) {
    result = "";
    sub_result = "";
    for (let j = i; j > 0; j--) {
        sub_result += "*";
    }
    for (let s = i; s > 0; s--) {
        result += sub_result + " ";
    }

    console.log(result);
}