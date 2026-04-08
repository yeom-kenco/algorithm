const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let str = "";
let cnt1 = 1;
let cnt2 = n;
for (let i = 1; i <= 2 * n; i++) {
    if (i % 2 == 0) {
        str = "";
        str = "* ".repeat(cnt2);
        cnt2--;
        console.log(str);
    } else {
        str = "";
        str = "* ".repeat(cnt1);
        cnt1++;
        console.log(str);
    }
}