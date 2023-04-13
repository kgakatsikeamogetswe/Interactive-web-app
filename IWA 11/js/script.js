//Order 1
const orderOne = document.querySelector('[data-key="order1"]') 
const biscuitOne = orderOne.getAttribute('data-biscuits')
const donutsOne = orderOne.getAttribute('data-donuts')
const pancakesOne = orderOne.getAttribute('data-pancakes')
const statusOne = orderOne.getAttribute('data-delivered')

document.querySelector('.biscuits .count', '.donuts .count').innerText = biscuitOne
document.querySelector('.donuts .count').innerText = donutsOne
document.querySelector('.pancakes .count').innerText = pancakesOne
document.querySelector('.status dd').innerText = statusOne


//order 2
const orderTwo = document.querySelector('[data-key="order2"]') 
const biscuitTwo = orderTwo.getAttribute('data-biscuits')
const donutsTwo = orderTwo.getAttribute('data-donuts')
const pancakesTwo = orderTwo.getAttribute('data-pancakes')
const statusTwo = orderTwo.getAttribute('data-delivered')

document.querySelector('[data-key="order2"] .biscuits .count').innerText = biscuitTwo
document.querySelector('[data-key="order2"] .donuts .count').innerText = donutsTwo
document.querySelector('[data-key="order2"] .pancakes .count').innerText = pancakesTwo
document.querySelector('[data-key="order2"] .status dd').innerText = statusTwo


//order 3
const orderThree = document.querySelector('[data-key="order3"]') 
const biscuitThree = orderThree.getAttribute('data-biscuits')
const donutsThree = orderThree.getAttribute('data-donuts')
const pancakesThree = orderThree.getAttribute('data-pancakes')
const statusThree = orderThree.getAttribute('data-delivered')

document.querySelector('[data-key="order3"] .biscuits .count').innerText = biscuitThree
document.querySelector('[data-key="order3"] .donuts .count').innerText = donutsThree
document.querySelector('[data-key="order3"] .pancakes .count').innerText = pancakesThree
document.querySelector('[data-key="order3"] .status dd').innerText = statusThree


// const 1-root = document(order1),
// const 1-biscuits: document(biscuits),
// const 1-donuts: document(donuts),
// const 1-pancakes: document(pancakes),
// const 1-status: document(status)

// const 2-root = document(order2),
// const 2-biscuits: document(biscuits),
// const 2-donuts: document(donuts),
// const 2-pancakes: document(pancakes),
// const 2-status: document(status)

// const 3-root = document(order3),
// const 3-biscuits: document(biscuits),
// const 3-donuts: document(donuts),
// const 3-pancakes: document(pancakes),
// const 3-status: document(status)

// 1-biscuits= 1-root.biscuits,
// 1-donuts = 1-root.donuts,
// 1-pancakes = 1-root.pancakes,
// 1-status = 1-root.status ? Delivered : Pending

// 2-biscuits= 2-root.biscuits,
// 2-donuts = 2-root.donuts,
// 2-pancakes = 2-root.pancakes,
// 2-status = 2-root.status ? Delivered : Pending

// 3-biscuits= 3-root.biscuits,
// 3-donuts = 3-root.donuts,
// 3-pancakes = 3-root.pancakes,
// 3-status = 3-root.status ? Delivered : Pending