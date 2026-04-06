const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let str = "";
let cnt = 0;
for (let i = n; i > 0; i--) {
    str = "";
    str = ("  ").repeat(cnt);
    for (let j = 2 * i - 1; j > 0; j--) {
        str += "* ";
    }
    cnt++;
    console.log(str);
}
cnt = n - 2;
for (let i = 1; i < n; i++) {
    str = "";
    str = ("  ").repeat(cnt);
    for (let j = 2 * (i + 1) - 1; j > 0; j--) {
        str += "* ";
    }
    cnt--;
    console.log(str);
}