const fs = require('fs');
const path = require('path');
const searchDir = path.join(__dirname, 'secret-folder');
fs.readdir(searchDir,{withFileTypes: true}, (error, files) => {
  if(error){
    throw error
  }else{
    files.forEach(file => {
      if(file.isFile()){
        fs.stat(searchDir+`/${file.name}`, (error, st) => {
          if(error){
            throw error
          }else{
            let fileInfo = file.name.split('.').join(" - ") + ` - ${(st.size/1000).toFixed(3)}kb`;
            console.log(fileInfo);
          }
        })
      }
    })
  }
})

