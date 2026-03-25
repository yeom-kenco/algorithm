const fs = require("fs");
let [a,b,c] = fs.readFileSync(0).toString().split(" ").map(Number);
let satisfied = true;

for(let i=a; i<=b; i++){
    if(i%c==0){
        satisfied = false;
    }
}

satisfied?console.log("YES"):console.log("NO");
