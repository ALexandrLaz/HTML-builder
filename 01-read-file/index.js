const fs = require('fs');
const path = require('path');
const text = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(text);
stream.on('data', (chank) => console.log(chank.toString()));