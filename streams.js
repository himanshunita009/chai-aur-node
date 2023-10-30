const fs = require('fs');

// const readStream = fs.createReadStream('./docs/blog3.txt',{encoding: 'utf8'});
// const writeStream = fs.createWriteStream('./docs/blogs4.txt');

// readStream.on('data' ,(chunk) => {
//     writeStream.write('\n\n\n------- WRITE STREAM ---------\n\n\n');
//     writeStream.write(chunk);
// });

// readStream.pipe(writeStream);

const readStream = fs.createReadStream('./docs/blogs4.txt');
const writeStream = fs.createWriteStream('./docs/blogs2.txt');

readStream.pipe(writeStream);






















