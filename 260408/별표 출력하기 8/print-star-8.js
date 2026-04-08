const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for (let i = 1; i <= n; i++) {
    str = "";
    if (i % 2 == 0) {
        str = "* ".repeat(i);
        console.log(str);
    } else {
        str = "*";
        console.log(str);
    }
}