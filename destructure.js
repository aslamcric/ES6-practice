const person = {name: 'Rahim', age: 23, gfName: 'Khaleda', salary: 3344, home:'Dhaka'} 
const {age} = person;

const complexObject = {
    name: 'abc';
    info: {
        address: 'Kola Bagan';
        leader: 'Kader';
    }
}
const {leader} = complexObject.info;

const gfName = person.gfName;

// console.log(gfName, age);
// console.log(gfName, age);
// console.log(gfName, age);
const friends = ['shakib', 'rakib', 'makib', 'hakib', 'akib'];
const [one, ...older] = friends;
console.log(older);