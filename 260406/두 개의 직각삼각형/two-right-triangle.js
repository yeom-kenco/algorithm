const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let str = "";
let cnt = 0;

for (let i = n; i > 0; i--) {
    str = "";
    str = ("*").repeat(i);
    str += (" ").repeat(cnt);
    str += (" ").repeat(cnt);
    str += ("*").repeat(i);
    cnt++;
    console.log(str);
}