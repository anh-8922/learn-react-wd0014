import { greet } from './myModule.js';
import { add, subtract } from './math.js'
import { getName, getAge } from './utils.js';
import config from './config.js';
import Person from './myModules.js';
import greet from './myModules.js';
import sum from './utils.js';

//1
const name = 'John';
//2
console.log(greet(name));

console.log(add(1, 2));
console.log(subtract(4, 3));

//3
const user = { name: 'John', age: 30 };

console.log(getName(user)); // Output: John
console.log(getAge(user)); // Output: 30

//4


console.log(config.port); // Output: 3000
console.log(config.database); // Output: mongodb://localhost/myapp
console.log(config.apiKey); // Output: 1234567890

//5



const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);

console.log(person1.name, person1.age); // Output: John 30
console.log(person2.name, person2.age); // Output: Jane 25

//6



const name06 = 'John';

console.log(greet(name06)); // Output: Hello, John!

//7



const numbers = [1, 2, 3, 4, 5];

console.log(sum(numbers)); // Output: 15