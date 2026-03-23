const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());
let cnt = 0;

while (true) {
    if (n == 1) {
        console.log(cnt);
        break;
    }
    if (n % 2 == 0) {
        n /= 2;
        cnt++;
    } else {
        n = 3 * n + 1;
        cnt++;
    }
}