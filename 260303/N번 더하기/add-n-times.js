const fs = require("fs");
let [A,N] = fs.readFileSync(0).toString().split(" ").map(Number);

for(i=0;i<N;i++){
    console.log(A+N);
    A+=N;
}