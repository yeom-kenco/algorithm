const fs = require("fs");
let input = fs.readFileSync(0).toString().split('\n').map(Number);
let satisfied = true;

for (let i = 0; i < 5; i++) {
    if (input[i] % 3 != 0) {
        satisfied = false;
    }
}
satisfied ? console.log(1) : console.log(0);