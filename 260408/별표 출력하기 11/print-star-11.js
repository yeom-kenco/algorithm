const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let str = "";
for (let i = 0; i <= 2 * n; i++) {
    str = "";
    for (let j = 0; j <= 2 * n; j++) {
        if (i == 0 || i % 2 == 0 || j == 0 || j % 2 == 0) {
            str += "* ";
        } else {
            str += "  ";
        }
    }
    console.log(str);
}