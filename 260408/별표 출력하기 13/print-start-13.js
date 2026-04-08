const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let cnt1 = n;
let cnt2 = 1;

for (let i = 1; i <= 2 * n; i++) {
    if (i % 2 == 0) {
        console.log("* ".repeat(cnt2));
        cnt2++;
    } else {
        console.log("* ".repeat(cnt1));
        cnt1--;
    }
}