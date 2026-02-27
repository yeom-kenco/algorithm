const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

a==100?console.log("pass"):console.log("failure");