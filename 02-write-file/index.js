const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });
console.log("Здравствуйте, введите текст")
const fileName = 'text.txt';
const textFile = path.join(__dirname, fileName);
fs.writeFile(textFile, "", (err) => {
  if(err){
    throw err;
  }
})
rl.on('line', (str) => {
  if(str.includes('exit')){
    console.log('До свидания');
    process.exit();
  }

  fs.appendFile(textFile, str+'\n', (err) => {
    if(err){
      throw err
    }
  });
})

rl.on('close', () => {
  console.log('До свидания');
})