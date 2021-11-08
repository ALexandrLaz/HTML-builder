const fs = require('fs');
const path = require('path');
let folder = path.join(__dirname, 'files');
let folder2 = folder+'-copy';
fs.readdir(__dirname, {withFileTypes: true}, (error, files) => {
  if(error){
    throw error
  }else{
    files.forEach(file => {
      if(file.isDirectory()){
        fs.stat(folder2, err => {
          if(!err){
            fs.rmdir(folder2, {recursive:true}, err => {if(err) throw err});
          }else if(err.code === 'ENOENT') {
            console.log('директории нет');
          }})
        fs.mkdir(folder2, {recursive: true}, error => {if(error) throw error});
        fs.readdir(folder, {withFileTypes: true}, (error, folderFiles) => {
          if(error) throw error;
          folderFiles.forEach(fileFold =>{
            console.log(fileFold.name);
            fs.copyFile(folder+`/${fileFold.name}`, folder2+`/${fileFold.name}`, (err) => {if(err) throw err});
          })
        })
        
      }
    })
  }
})