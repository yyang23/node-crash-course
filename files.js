const fs = require('fs');

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {   // read file need times
//     if (err){     // check if there was an error
//         console.log(err);
//     }
//     console.log(data.toString()); // return a buffer into a string
// });

// console.log('last line'); // show this line before "data.toString()"('hello, ninjas) because reading file needs times

// writing files
// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//     console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//     console.log('file was written');
// })

// fs.writeFile('./docs/blog3.txt', 'hello, again, again', () => {
//     console.log('file was written');
// })

// directories
if (!fs.existsSync('./assets')) {     // Check if "./assets" exist
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}
