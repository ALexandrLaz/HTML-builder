const fs = require('fs');
const path = require('path');
const destPath = path.join(__dirname, 'project-dist');
const fromCss = path.join(__dirname, 'styles');
const fromAssets = path.join(__dirname, 'assets');
fs.mkdir(__dirname+"/project-dist", { recursive: true }, (err) => {
  if (err) throw err;
});
fs.mkdir(destPath+"/assets", { recursive: true }, (err) => {
  if (err) throw err;
});
fs.readdir(fromCss, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  fs.writeFile(destPath+'/style.css', "", "utf-8", (err) => {
    if (err) throw err;
  });
  files.forEach((file) => {
    if(file.name.split('.')[1] == "css"){
      fs.readFile(fromCss+`/${file.name}`, 'utf-8', (error, code) => {
        if(error){
          throw error
        }else{
          fs.appendFile(destPath+'/style.css', code+'\n', (err) => {
            if(err){
              throw err
            }
          });
        }
      })
    }
  });
});
fs.readdir(fromAssets, { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  fs.mkdir(destPath+'/assets', { recursive: true }, (err) => {
    if (err) throw err;
  });
  // files.forEach((file) => {
  //   if(file.isDirectory()){
  //     let newFolder = destPath+`/assets/${file.name}`;
  //     fs.mkdir(newFolder, { recursive: true }, (err) => {
  //       if (err) throw err;
  //     });
  //     fs.readdir()
  //     fs.readFile(`${newFolder}/${file.name}`, "utf-8", (err, asset) => {
  //       if (err) throw err;
  //       else {
  //         fs.writeFile(destPath+`/assets/${file.name}`/${file.name}`, asset, "utf-8", (err) => {
  //           if (err) throw err;
  //         });
  //       }
  //     });
  //   }
  //   fs.readFile(`${fromAssets}/${file.name}`, "utf-8", (err, asset) => {
  //     if (err) throw err;
  //     else {
  //       fs.writeFile(`${destPath+'/assets'}/${file.name}`, asset, "utf-8", (err) => {
  //         if (err) throw err;
  //       });
  //     }
  //   });
  // });
});