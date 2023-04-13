function greet(name) {
    return `Hello, ${name}!`;
  }
  
  export { greet };

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
export default Person;


export default function(name) {
  return `Hello, ${name}!`;
}