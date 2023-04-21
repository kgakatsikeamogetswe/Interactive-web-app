const add = (a, b) => a + b;

const multiply = (a, b)=> a * b;

function internal() {
added = this.add(this.internal.a, this.internal.b)
multiplyed = this.multiply(added, this.internal.c)
console.log(multiplyed)
}

// Not allowed to change below this

const example1 = {
internal: {
 a: 2,
 b: 4,
 c: 8,
},
add,
multiply,
calculate: internal
}

const example2 = {
internal: {
 a: 2,
 b: 2,
 c: 3,
},
add,
multiply,
calculate: internal
}
const example3 = {
  internal: {
   a: 12,
   b: 7,
   c: 5,
  },
  add,
  multiply,
  calculate: internal
  }



example1.calculate()
example2.calculate()
example3.calculate()
