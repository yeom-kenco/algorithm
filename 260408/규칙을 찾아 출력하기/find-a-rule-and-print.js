const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i = 1; i <= n; i++) {
    str = "";
    for (let j = 1; j <= n; j++) {
        if (i == 1 || j == 1 || i == n || j == n || (i >= 3 && j <= i - 1)) {
            str += "* ";
        } else {
            str += "  ";
        }
    }
    console.log(str);
}