firstName = 'John';
age = 35;
HobbyForCoding = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

function hobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${HobbyForCoding}!`)
}

hobby()


