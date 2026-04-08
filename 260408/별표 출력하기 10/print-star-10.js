const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let cnt1 = 1;
let cnt2 = n;

for (let i = 1; i <= 2 * n; i++) {
    if (i % 2 !== 0) {
        console.log("* ".repeat(cnt1));
        cnt1++;
    } else {
        console.log("* ".repeat(cnt2));
        cnt2--;
    }
}