const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
const ages = [20, 25, 30, 35];

console.log(people);

// module.exports = people; 

// For export multiple things
module.exports = {
    people, ages
};