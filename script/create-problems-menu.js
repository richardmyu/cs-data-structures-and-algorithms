const fs = require("fs")
const FILE_PATH = "../problems"
const fileObj = {}

console.log("Creating problems menu...")
console.log(fs.existsSync(FILE_PATH));

if (fs.existsSync(FILE_PATH)) {
  let fileList = fs.readdirSync(FILE_PATH);
  fileList.forEach(function (file) {
    fileObj[file.slice(0, 2)] = file.slice(4, -2)
  })
}

console.log(fileObj);

