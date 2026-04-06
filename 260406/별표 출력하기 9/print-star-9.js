const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = i; j < n; j++) {
        str += "  ";
    }
    for (let j = i * 2 - 1; j > 0; j--) {
        str += "* ";
    }
    console.log(str);
}