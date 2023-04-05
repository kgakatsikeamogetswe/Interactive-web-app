const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line
//had to fix my arguements inside my condition and use equality operator
if (hourOfDay == 0 && minuteOfDay == 0){
const taxAsDecimal = parseInt(tax) / parseInt('100')/*changed string to number*/ ;
const startingAfterTax = salary -(salary * taxAsDecimal);
const balance =  (startingAfterTax - transport - food - rent);

console.log(balance.toFixed(2))//remove 3 with 2
}
	
