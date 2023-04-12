const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = parseInt(tax[913]) / 100//parsed my values to parseInt, And called my value using square bracket
const startingAfterTax = salary - (salary * taxAsDecimal)//I multipled TaxAsDecimal with salary and subtracted it with salary so i could get StartingAfterTax
const type = (rent['large-apartment'])//I assiegned type to rent object and called large-apartment from rent object using square bracket 
const balance = startingAfterTax - (expenses.transport + expenses.food + type)//may brackets were used, They did not subtract the StartingAfterTax with expensess and type
console.log(balance.toFixed(2))