const fs = require("fs")
const FILE_PATH="../problems/"
const fileLists=[]
console.log("Creating problems menu...")

if(fs.existsSync(FILE_PATH)){
  let fileList=fs.readdirSync(FILE_PATH);
  fileList.forEach(function(file){
    fileLists.push(file.slice(0,-3))
  })
}
console.log(fileLists);

