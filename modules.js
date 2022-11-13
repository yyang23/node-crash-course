const xyz = require('./people');  // require('path') ./: look in same directory

//console.log(xyz); // In people, module.exports = varabal or string decides the content 
//console.log(people);  // "people is not defined"

console.log(xyz); 
/*  show a object
{
  people: [ 'yoshi', 'ryu', 'chun-li', 'mario' ],
  ages: [ 20, 25, 30, 35 ]
}
*/

// Import multiple different things 
console.log(xyz.people, xyz.ages); // [ 'yoshi', 'ryu', 'chun-li', 'mario' ] [ 20, 25, 30, 35 ]
console.log('------');

// Another way to get another file content
const { people, ages } = require('./people');
console.log(people, ages);

const os = require('os');

console.log(os.platform(), os.homedir());  // Find out info on the operating system
