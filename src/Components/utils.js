function getName(user) {
    return user.name;
  }
  
  function getAge(user) {
    return user.age;
  }
  
  export { getName, getAge };

export default function(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
