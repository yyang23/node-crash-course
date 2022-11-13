// Global object

/*console.log(global);

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

console.log(__dirname);  // absolute path of the current folder
console.log(__filename); // absolute path of the current folder with the file name added on as well
*/

console.log(document.querySelector);  
// show "not definded" because of documents in the window object, 
// we don't have that in the global namespace of node.js

