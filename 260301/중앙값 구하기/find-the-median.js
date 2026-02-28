const fs = require("fs");
let [A, B, C] = fs.readFileSync(0).toString().split(" ").map(Number);

let middle;

if (A > B) {
    if (A < C) {
        middle = A;
    }else if(C<B){
        middle = B;
    } else {
        middle = C;
    }
} else {
    if (B < C) {
        middle = B;
    }else if(C<A){
        middle = A;
    }else {
        middle = C;
    }
}
console.log(middle);