const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 1; j <= n; j++) {
        if (i == 1 || (j >= i && j % 2 == 0)) {
            str += "* ";
        } else {
            str += "  ";
        }
    }
    console.log(str);
}