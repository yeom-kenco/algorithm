const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let str = "";

for(let i=1; i<=n; i++){
    str = "*".repeat(i);
    console.log(str);
    console.log("");
}
for(let i=n-1;i>0;i--){
    str = "*".repeat(i);
    console.log(str);
    console.log("");
}