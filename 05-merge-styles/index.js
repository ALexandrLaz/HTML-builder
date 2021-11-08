const fs = require('fs');
const path = require('path');
const destPath = path.join(__dirname, 'project-dist/bundle.css');
const fromPath = path.join(__dirname, 'styles');
fs.readdir(fromPath, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  fs.writeFile(destPath, "", "utf-8", (err) => {
    if (err) throw err;
  });
  files.forEach((file) => {
    if(file.name.split('.')[1] == "css"){
      fs.readFile(fromPath+`/${file.name}`, 'utf-8', (error, code) => {
        if(error){
          throw error
        }else{
          fs.appendFile(destPath, code+'\n', (err) => {
            if(err){
              throw err
            }
          });
        }
      })
    }
  });
});