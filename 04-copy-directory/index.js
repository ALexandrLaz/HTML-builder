const fs = require('fs');
const path = require('path');
let folder = path.join(__dirname, 'files');
let folder2 = folder+'-copy';
fs.readdir(folder, {withFileTypes: true}, (error, files) => {
  if(error){
    throw error
  }else{
    fs.access(folder2, (error) => {
      if (!error) {
        fs.readdir(folder2, (error, files) => {
          if (error) throw error;
          for (let file of files) {
            fs.unlink(path.join(folder2, file), (error) => {
              if (error) throw error;
              cop();
            });
          }
        });
      }
    });
    function cop(){
      fs.mkdir(folder2, {recursive: true}, error => {if(error) throw error});
      files.forEach(fileFold =>{
        fs.copyFile(folder+`/${fileFold.name}`, folder2+`/${fileFold.name}`, (err) => {if(err) throw err});
      })
    }
    cop();
  }
})