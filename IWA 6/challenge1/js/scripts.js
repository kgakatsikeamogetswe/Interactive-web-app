const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = parseInt(primaryPhone) == primaryPhone /**had to parse primaryValid to integer and use equlity operator, so this line will give me false because primaryValid was assigned to sting and number*/
const secondaryValid = parseInt(secondaryPhone) == secondaryPhone//this will be true

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )

