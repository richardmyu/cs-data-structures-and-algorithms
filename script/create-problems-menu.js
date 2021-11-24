const fs = require("fs")
const FILE_PATH = "~/Documents/githubproject/leetcode-practice/problems"
const fileObj = {}
console.log("Creating problems menu...")
console.log(fs.existsSync(FILE_PATH));
if(fs.existsSync(FILE_PATH)){
  console.log('11');
  let fileList=fs.readdirSync(FILE_PATH);
  console.log('22');
  fileList.forEach(function(file){
    console.log(file.slice(0,2));
    fileObj[file.slice(0,2)]=file.slice(4,-2)
  })
}
console.log(fileObj);

