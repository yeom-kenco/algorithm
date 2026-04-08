const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let str = "";
let cnt = n - 1;
for (let i = 1; i <= n; i++) {
    str = "";
    str = (" ").repeat(cnt);
    for (let j = 1; j <= 2 * i - 1; j++) {
        str += "*";
    }
    cnt--;
    console.log(str);
}
cnt = 1;
for (let i = n - 1; i > 0; i--) {
    str = "";
    str = (" ").repeat(cnt);
    for (let j = 2 * i - 1; j > 0; j--) {
        str += "*";
    }
    cnt++;
    console.log(str);
}